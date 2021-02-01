module Fastlane
  module Actions
    class GetCredentialsAction < Action

      # Given an environment
      # this script returns the apple id (:account),
      # the developer portal team id (:team)
      # and the App Store Connect team id (:itc_team) associated to it.

      APPLE_ACCOUNT_ENV_KEY = "APPLE_ID".freeze
      APPLE_TEAM_ENV_KEY = "APPLE_TEAM_ID".freeze
      APP_STORE_CONNECT_TEAM_ENV_KEY = "APP_STORE_CONNECT_TEAM".freeze

      def self.run(params)
        {
          account: Actions::GetEnvironmentInfoAction.run(environment: params[:environment])[APPLE_ACCOUNT_ENV_KEY],
          team: Actions::GetEnvironmentInfoAction.run(environment: params[:environment])[APPLE_TEAM_ENV_KEY],
          itc_team: Actions::GetEnvironmentInfoAction.run(environment: params[:environment])[APP_STORE_CONNECT_TEAM_ENV_KEY]
        }
      end

      # Fastlane Action class required functions.

      def self.is_supported?(platform)
        true
      end

      def self.available_options
        [
          FastlaneCore::ConfigItem.new(key: :environment, optional: false, type: Symbol)
        ]
      end

    end
  end
end
