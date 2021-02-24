module.exports = function schemeBase(envName, buildConfig) {
  return `<?xml version="1.0" encoding="UTF-8"?>
 <Scheme
    LastUpgradeVersion = "1130"
    version = "1.7">
    <BuildAction
       parallelizeBuildables = "YES"
       buildImplicitDependencies = "YES">
       <PreActions>
          <ExecutionAction
             ActionType = "Xcode.IDEStandardExecutionActionsCore.ExecutionActionType.ShellScriptAction">
             <ActionContent
               title = "Run Script"
               scriptText = "cat \${PROJECT_DIR}/../.envs/${envName}.env &gt; \${SRCROOT}/Config.xcconfig&#10;echo &quot;.envs/${envName}.env&quot; &gt; /tmp/envfile &#10;&#10;# Versioning Script&#10;CURRENT_VERSION=\`awk -F&apos;&quot;&apos; &apos;/&quot;version&quot;: &quot;.+&quot;/{ print $4; exit; }&apos; $SRCROOT/../package.json\`&#10;COMMIT_COUNT=$(git rev-list HEAD --count --merges --first-parent)&#10;&#10;xcrun agvtool new-marketing-version $CURRENT_VERSION&#10;xcrun agvtool new-version -all $COMMIT_COUNT&#10;&#10;">
               <EnvironmentBuildable>
                  <BuildableReference
                     BuildableIdentifier = "primary"
                     BlueprintIdentifier = "13B07F861A680F5B00A75B9A"
                     BuildableName = "${this.projectName}.app"
                     BlueprintName = "${this.projectName}"
                     ReferencedContainer = "container:${this.projectName}.xcodeproj">
                  </BuildableReference>
               </EnvironmentBuildable>
             </ActionContent>
          </ExecutionAction>
       </PreActions>
       <BuildActionEntries>
          <BuildActionEntry
             buildForTesting = "YES"
             buildForRunning = "YES"
             buildForProfiling = "YES"
             buildForArchiving = "YES"
             buildForAnalyzing = "YES">
             <BuildableReference
                BuildableIdentifier = "primary"
                BlueprintIdentifier = "13B07F861A680F5B00A75B9A"
                BuildableName = "${this.projectName}.app"
                BlueprintName = "${this.projectName}"
                ReferencedContainer = "container:${this.projectName}.xcodeproj">
             </BuildableReference>
          </BuildActionEntry>
       </BuildActionEntries>
    </BuildAction>
    <TestAction
       buildConfiguration = "${buildConfig}"
       selectedDebuggerIdentifier = "Xcode.DebuggerFoundation.Debugger.LLDB"
       selectedLauncherIdentifier = "Xcode.DebuggerFoundation.Launcher.LLDB"
       shouldUseLaunchSchemeArgsEnv = "YES">
       <Testables>
          <TestableReference
             skipped = "NO">
             <BuildableReference
                BuildableIdentifier = "primary"
                BlueprintIdentifier = "00E356ED1AD99517003FC87E"
                BuildableName = "${this.projectName}Tests.xctest"
                BlueprintName = "${this.projectName}Tests"
                ReferencedContainer = "container:${this.projectName}.xcodeproj">
             </BuildableReference>
          </TestableReference>
       </Testables>
    </TestAction>
    <LaunchAction
       buildConfiguration = "${buildConfig}"
       selectedDebuggerIdentifier = "Xcode.DebuggerFoundation.Debugger.LLDB"
       selectedLauncherIdentifier = "Xcode.DebuggerFoundation.Launcher.LLDB"
       launchStyle = "0"
       useCustomWorkingDirectory = "NO"
       ignoresPersistentStateOnLaunch = "NO"
       debugDocumentVersioning = "YES"
       debugServiceExtension = "internal"
       allowLocationSimulation = "YES">
       <BuildableProductRunnable
          runnableDebuggingMode = "0">
          <BuildableReference
             BuildableIdentifier = "primary"
             BlueprintIdentifier = "13B07F861A680F5B00A75B9A"
             BuildableName = "${this.projectName}.app"
             BlueprintName = "${this.projectName}"
             ReferencedContainer = "container:${this.projectName}.xcodeproj">
          </BuildableReference>
       </BuildableProductRunnable>
    </LaunchAction>
    <ProfileAction
       buildConfiguration = "${buildConfig}"
       shouldUseLaunchSchemeArgsEnv = "YES"
       savedToolIdentifier = ""
       useCustomWorkingDirectory = "NO"
       debugDocumentVersioning = "YES">
       <BuildableProductRunnable
          runnableDebuggingMode = "0">
          <BuildableReference
             BuildableIdentifier = "primary"
             BlueprintIdentifier = "13B07F861A680F5B00A75B9A"
             BuildableName = "${this.projectName}.app"
             BlueprintName = "${this.projectName}"
             ReferencedContainer = "container:${this.projectName}.xcodeproj">
          </BuildableReference>
       </BuildableProductRunnable>
    </ProfileAction>
    <AnalyzeAction
       buildConfiguration = "${buildConfig}">
    </AnalyzeAction>
    <ArchiveAction
       buildConfiguration = "${buildConfig}"
       revealArchiveInOrganizer = "YES">
    </ArchiveAction>
 </Scheme>
 `;
};
