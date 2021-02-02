module Fastlane
  module Actions
    class GetCertificatesInfoAction < Action

      # Given an environment
      # this script returns the certificates git url (:url),
      # and the certificates git branch (:branch) associated to it for the match lane.

      CERTIFICATES_GIT_URL_ENV_KEY = "CERTIFICATES_GIT_URL".freeze
      CERTIFICATES_GIT_BRANCH_ENV_KEY = "CERTIFICATES_GIT_BRANCH".freeze

      def self.run(params)
        {
          url: ENV[CERTIFICATES_GIT_URL_ENV_KEY] || Actions::GetEnvironmentInfoAction.run(environment: params[:environment])[CERTIFICATES_GIT_URL_ENV_KEY],
          branch: Actions::GetEnvironmentInfoAction.run(environment: params[:environment])[CERTIFICATES_GIT_BRANCH_ENV_KEY]
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
