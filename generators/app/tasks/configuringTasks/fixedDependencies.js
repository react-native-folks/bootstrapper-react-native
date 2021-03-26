module.exports.FIXED_RN_VERSION = '0.63.3';

module.exports.getFixedDependencies = function getFixedDependencies() {
  return {
    REACT_NAVIGATION_NATIVE: `@react-navigation/native${
      this.options.latest ? '' : '@^5.9.3'
    }`,
    REACT_NATIVAGITION_STACK: `@react-navigation/stack${
      this.options.latest ? '' : '@^5.14.3'
    }`,
    REACT_NAVIGATION_DRAWER: `@react-navigation/drawer${
      this.options.latest ? '' : '@^5.12.4'
    }`,
    REACT_NAVIGATION_TABS: `@react-navigation/bottom-tabs${
      this.options.latest ? '' : '@^5.11.8'
    }`,
    REACT_NATIVE_REANIMATED: `react-native-reanimated${
      this.options.latest ? '' : '@^2.0.1'
    }`,
    REACT_NATIVE_SAFE_AREA_CONTEXT: `react-native-safe-area-context${
      this.options.latest ? '' : '@^3.2.0'
    }`,
    REACT_NATIVE_SCREENS: `react-native-screens${
      this.options.latest ? '' : '@^2.18.1'
    }`,
    REACT_NATIVE_MASKED_VIEW: `@react-native-community/masked-view${
      this.options.latest ? '' : '@^0.1.10'
    }`,
    REACT_NATIVE_GESTURE_HANDLER: `react-native-gesture-handler${
      this.options.latest ? '' : '@^1.10.3'
    }`,
    REACT_NATIVE_FIREBASE_ANALYTICS: `@react-native-firebase/analytics${
      this.options.latest ? '' : '@^11.1.2'
    }`,
    REACT_NATIVE_FIREBASE_APP: `@react-native-firebase/app${
      this.options.latest ? '' : '@^11.1.2'
    }`,
    REACT_NATIVE_FIREBASE_CRASHLYTICS: `@react-native-firebase/crashlytics${
      this.options.latest ? '' : '@^11.1.2'
    }`,
    REACT_NATIVE_FIREBASE_PERF: `@react-native-firebase/perf${
      this.options.latest ? '' : '@^11.1.2'
    }`,
    REACT_NATIVE_FIREBASE_MESSAGING: `@react-native-firebase/messaging${
      this.options.latest ? '' : '@^11.1.2'
    }`,
    REACT_NATIVE_CONFIG: `react-native-config${
      this.options.latest ? '' : '@^1.4.2'
    }`
  };
};
