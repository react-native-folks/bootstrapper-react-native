module Fastlane
  module Actions
    class GetProjectDirAction < Action

      # Given an environment
      # this script returns the android project path (:android_dir)
      # and the ios project path (:ios_dir) associated to it.

      IOS_DIR = "IOS_DIR".freeze
      ANDROID_DIR = "ANDROID_DIR".freeze
      DEFAULT_IOS_DIR = "ios".freeze
      DEFAULT_ANDROID_DIR = "android".freeze

      def self.run(params)
        environment = params[:environment]

        android_dir = environment ? (Actions::GetEnvironmentInfoAction.run(environment: environment)[ANDROID_DIR] || DEFAULT_ANDROID_DIR) : DEFAULT_ANDROID_DIR
        ios_dir = environment ? (Actions::GetEnvironmentInfoAction.run(environment: environment)[IOS_DIR] || DEFAULT_IOS_DIR) : DEFAULT_IOS_DIR
        {
          android_dir: "#{ENV['PWD']}/#{android_dir}",
          ios_dir: "#{ENV['PWD']}/#{ios_dir}",
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
