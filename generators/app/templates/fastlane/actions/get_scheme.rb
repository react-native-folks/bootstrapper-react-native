module Fastlane
  module Actions
    class GetSchemeAction < Action

      # Given an environment
      # this script returns the scheme associated to it.

      ENV_KEY = "SCHEME".freeze

      def self.run(params)
        if params[:environment]
          environment_info = Actions::GetEnvironmentInfoAction.run(environment: params[:environment])
        else
          environment_info = Actions::GetEnvironmentInfoAction.run({})
        end
        environment_info[ENV_KEY] || Actions::ProjectNameAction.run({})
      end

      def self.get_all_schemes
        {
          develop: Actions::GetSchemeAction.run(environment: :develop),
          staging: Actions::GetSchemeAction.run(environment: :staging),
          production: Actions::GetSchemeAction.run(environment: :production)
        }
      end

      # Fastlane Action class required functions.

      def self.is_supported?(platform)
        true
      end

      def self.available_options
        [
          FastlaneCore::ConfigItem.new(key: :environment, optional: true, type: Symbol)
        ]
      end

    end
  end
end
