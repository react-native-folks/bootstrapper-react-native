require 'xcodeproj'
project_name = ARGV[0]
total_path = ARGV[1]
app_name = ARGV[2]
bundle_id = ARGV[3]
google_services = ARGV[4] == 'true'
ios_folder = total_path + '/' + project_name + '/ios/'
project_path = ios_folder + project_name + '.xcodeproj'
project = Xcodeproj::Project.open(project_path)
plist = Xcodeproj::Plist.read_from_path(ios_folder + project_name + '/Info.plist')
release_base_config_file = nil
release_build_settings = nil

# Update info plist
plist['CFBundleDisplayName'] = app_name
Xcodeproj::Plist.write_to_path(plist, ios_folder + project_name + '/Info.plist')

# Delete unused targets
def delete_targets_from_project(project, project_name)
   project.targets.each do |target|
      if target.name != project_name
         target_atts_obj = project.root_object.attributes['TargetAttributes']
         target_atts_obj.delete(target.uuid)
         target.remove_from_project
      end
   end
end

delete_targets_from_project(project, project_name)
delete_targets_from_project(project, project_name)

project.root_object.attributes["TargetAttributes"].each do | target, sett |
   sett["ProvisioningStyle"] = 'Manual'
end

target = project.targets.find { |each| each.name == project_name }

# Google Services Script
if google_services && !target.shell_script_build_phases.find { |bp| bp.name == 'Google Services Script' }
   phase = target.new_shell_script_build_phase("Google Services Script")
   phase.shell_script = "\"$SRCROOT/../firebaseFilesScript.sh\" \"${PRODUCT_BUNDLE_IDENTIFIER}\" \"ios\"\ncp $SRCROOT/GoogleService-Info.plist $\{BUILT_PRODUCTS_DIR}/$\{PRODUCT_NAME}.app/GoogleService-Info.plist"

   # Put the build phase at the beginning
   target.build_phases.insert(0, target.build_phases.delete(phase))
end

# Copy Release Build Configuration and delete Release Build Configuration from Target
release_build_config = target.build_configurations.find { |each| each.name == 'Release' }
release_build_settings = release_build_config.build_settings

# Add new Build Configurations to Target
debug_build_config = target.build_configurations.find { |each| each.name == 'Debug' }
debug_build_config.build_settings['PRODUCT_BUNDLE_IDENTIFIER'] = "#{bundle_id}.develop"

develop_build_config = target.add_build_configuration('Develop', :release)
develop_build_config.build_settings.update(release_build_settings)
develop_build_config.build_settings['PRODUCT_BUNDLE_IDENTIFIER'] = "#{bundle_id}.develop"
develop_build_config.build_settings['TARGETED_DEVICE_FAMILY'] = "1,2"
develop_build_config.build_settings['ONLY_ACTIVE_ARCH'] = "YES"

staging_build_config = target.add_build_configuration('Staging', :release)
staging_build_config.build_settings.update(release_build_settings)
staging_build_config.build_settings['PRODUCT_BUNDLE_IDENTIFIER'] = "#{bundle_id}.staging"
staging_build_config.build_settings['TARGETED_DEVICE_FAMILY'] = "1,2"

production_build_config = target.add_build_configuration('Production', :release)
production_build_config.build_settings.update(release_build_settings)
production_build_config.build_settings['PRODUCT_BUNDLE_IDENTIFIER'] = bundle_id
production_build_config.build_settings['TARGETED_DEVICE_FAMILY'] = "1,2"

release_build_config.remove_from_project

# Copy Release Build Configuration and delete Release Build Configuration from Project
release_build_config = project.build_configurations.find { |each| each.name == 'Release' }
release_build_settings = release_build_config.build_settings

# Add new Build Configurations to Project
develop_build_config = project.add_build_configuration('Develop', :release)
develop_build_config.build_settings.update(release_build_settings)

staging_build_config = project.add_build_configuration('Staging', :release)
staging_build_config.build_settings.update(release_build_settings)

production_build_config = project.add_build_configuration('Production', :release)
production_build_config.build_settings.update(release_build_settings)

release_build_config.remove_from_project

project.save
