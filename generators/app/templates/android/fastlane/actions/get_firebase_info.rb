module Fastlane
  module Actions
    class GetFirebaseInfoAction < Action

      # Given an environment
      # this script returns the Firebase App Id (:app),
      # the Firebase Token (:app),
      # groups (:groups),
      # and the tester groups path file (:groups_file) associated to it.

      FIREBASE_APP_ID = "FIREBASE_APP".freeze
      FIREBASE_TOKEN = "FIREBASE_TOKEN".freeze
      GROUPS = "GROUPS".freeze
      GROUPS_PATH = "GROUPS_PATH".freeze

      def self.run(params)
        {
          app: Actions::GetEnvironmentInfoAction.run(environment: params[:environment])[FIREBASE_APP_ID],
          token: Actions::GetEnvironmentInfoAction.run(environment: params[:environment])[FIREBASE_TOKEN],
          groups: Actions::GetEnvironmentInfoAction.run(environment: params[:environment])[GROUPS],
          groups_file: Actions::GetEnvironmentInfoAction.run(environment: params[:environment])[GROUPS_PATH]
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
