require 'dotenv'

module Fastlane
  module Actions
    class GetEnvironmentInfoAction < Action

      # Given an environment
      # this script returns the hash with all env variables for that environment.

      # File with env variables by environment
      ENV_FOLDER = (Dir.pwd + "/../.env").freeze
      
      ENVIRONMENTS_FILES = {
        develop: ENV_FOLDER + "/develop.env",
        staging: ENV_FOLDER + "/staging.env",
        production: ENV_FOLDER + "/production.env",
      }.freeze

      OVERALL_ENVIRONMENT_FILE = (ENV_FOLDER + "/.env").freeze

      def self.run(params)
        environment = params[:environment]
        # specific file has priority over general file around key collisions
        environment ? Dotenv.load(OVERALL_ENVIRONMENT_FILE, ENVIRONMENTS_FILES[environment]) : Dotenv.load(OVERALL_ENVIRONMENT_FILE)
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
