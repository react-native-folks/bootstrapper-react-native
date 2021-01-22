require 'xcodeproj'
project_name = ARGV[0]
total_path = ARGV[1]
bundle_id = ARGV[2]
google_services = ARGV[3] == 'true'
project_path = total_path + '/' + project_name + '/ios/' + project_name + '.xcodeproj'
project = Xcodeproj::Project.open(project_path)
release_base_config_file = nil
release_build_settings = nil

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

# Versioning Script
if !target.shell_script_build_phases.find { |bp| bp.name == 'Replace version from package.json' }
   phase = target.new_shell_script_build_phase("Replace version from package.json")
   phase.shell_script = "CURRENT_VERSION=`node \"require('../package.json').version\"`\nCOMMIT_COUNT=$(git rev-list HEAD --count --merges --first-parent)\n\nxcrun agvtool new-marketing-version $CURRENT_VERSION\nxcrun agvtool new-version -all $COMMIT_COUNT\n";
end
# Google Services Script
if google_services && !target.shell_script_build_phases.find { |bp| bp.name == 'Google Services Script' }
   phase = target.new_shell_script_build_phase("Google Services Script")
   phase.shell_script = "\"$SRCROOT/../firebaseFilesScript.sh\" \"${PRODUCT_BUNDLE_IDENTIFIER}\" \"ios\"\ncp $SRCROOT/GoogleService-Info.plist $\{BUILT_PRODUCTS_DIR}/$\{PRODUCT_NAME}.app/GoogleService-Info.plist"
end

# Copy Release Build Configuration and delete Release Build Configuration from Target
release_build_config = target.build_configurations.find { |each| each.name == 'Release' }
release_base_config_file = release_build_config.base_configuration_reference

# Add new Build Configurations to Target
debug_build_config = target.build_configurations.find { |each| each.name == 'Debug' }
debug_build_config.build_settings['PRODUCT_BUNDLE_IDENTIFIER'] = "#{bundle_id}.develop"

develop_build_config = target.add_build_configuration('Develop', :release)
develop_build_config.base_configuration_reference=(release_base_config_file)
develop_build_config.build_settings['PRODUCT_BUNDLE_IDENTIFIER'] = "#{bundle_id}.develop"

staging_build_config = target.add_build_configuration('Staging', :release)
staging_build_config.base_configuration_reference=(release_base_config_file)
staging_build_config.build_settings['PRODUCT_BUNDLE_IDENTIFIER'] = "#{bundle_id}.staging"

production_build_config = target.add_build_configuration('Production', :release)
production_build_config.base_configuration_reference=(release_base_config_file)
production_build_config.build_settings['PRODUCT_BUNDLE_IDENTIFIER'] = bundle_id

release_build_config.remove_from_project

# Copy Release Build Configuration and delete Release Build Configuration from Project
release_build_config = project.build_configurations.find { |each| each.name == 'Release' }
release_base_config_file = release_build_config.base_configuration_reference

# Add new Build Configurations to Project
develop_build_config = project.add_build_configuration('Develop', :release)
develop_build_config.base_configuration_reference=(release_base_config_file)

staging_build_config = project.add_build_configuration('Staging', :release)
staging_build_config.base_configuration_reference=(release_base_config_file)

production_build_config = project.add_build_configuration('Production', :release)
production_build_config.base_configuration_reference=(release_base_config_file)

release_build_config.remove_from_project

project.save
