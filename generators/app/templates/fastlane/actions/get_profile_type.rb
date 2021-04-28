module Fastlane
  module Actions
    class GetProfileTypeAction < Action

      # Given an environment
      # this script returns the match type associated to it.

      # Default match types by environment
      MATCH_TYPES = {
        develop: "adhoc",
        staging: "adhoc",
        production: "appstore"
      }.freeze

      EXPORT_METHOD = {
        develop: "ad-hoc",
        staging: "ad-hoc",
        production: "app-store"
      }.freeze

      def self.run(params)
        {
          match_type: MATCH_TYPES[params[:environment]],
          export_method: EXPORT_METHOD[params[:environment]]
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
