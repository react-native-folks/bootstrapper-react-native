module Fastlane
  module Actions
    class GetFirebaseInfoAction < Action

      # Given an environment
      # this script returns the Firebase App Id for android and ios (:ios_app and :android_app),
      # the Firebase Token (:token),
      # groups (:groups),
      # and the tester groups path file (:groups_file) associated to it.

      FIREBASE_ANDROID_APP_ID = "FIREBASE_ANDROID_APP_ID".freeze
      FIREBASE_IOS_APP_ID = "FIREBASE_IOS_APP_ID".freeze
      FIREBASE_TOKEN = "FIREBASE_TOKEN".freeze
      FIREBASE_GROUPS = "FIREBASE_GROUPS".freeze
      FIREBASE_GROUPS_PATH = "FIREBASE_GROUPS_PATH".freeze

      def self.run(params)
        {
          ios_app: Actions::GetEnvironmentInfoAction.run(environment: params[:environment])[FIREBASE_IOS_APP_ID],
          android_app: Actions::GetEnvironmentInfoAction.run(environment: params[:environment])[FIREBASE_ANDROID_APP_ID],
          token: Actions::GetEnvironmentInfoAction.run(environment: params[:environment])[FIREBASE_TOKEN],
          groups: Actions::GetEnvironmentInfoAction.run(environment: params[:environment])[FIREBASE_GROUPS],
          groups_file: Actions::GetEnvironmentInfoAction.run(environment: params[:environment])[FIREBASE_GROUPS_PATH]
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
