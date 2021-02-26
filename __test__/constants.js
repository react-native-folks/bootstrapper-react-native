const path = require('path');

const CASES = [
  {
    features: [
      'loginandsignup',
      'onboarding',
      'tabs',
      'drawer',
      /*'socialButtons',*/
      'googlemaps',
      'firebase',
      'pushnotifications',
      'landscape'
    ],
    // socialbuttons: ['facebook', 'apple', 'google', 'twitter'],
    stateManagement: 'redux'
  },
  {
    features: [
      'loginandsignup',
      'onboarding',
      'tabs',
      'drawer',
      /*'socialButtons',*/
      'googlemaps',
      'firebase',
      'pushnotifications',
      'landscape'
    ],
    // socialbuttons: ['facebook', 'apple', 'google', 'twitter'],
    stateManagement: 'recoil'
  },
  { features: [], socialbuttons: [], stateManagement: 'redux' },
  { features: [], socialbuttons: [], stateManagement: 'recoil' },
  { features: ['loginandsignup'], socialbuttons: [], stateManagement: 'redux' },
  { features: ['onboarding'], socialbuttons: [], stateManagement: 'recoil' },
  { features: ['tabs'], socialbuttons: [], stateManagement: 'redux' },
  { features: ['drawer'], socialbuttons: [], stateManagement: 'recoil' },
  {
    features: [/*'socialButtons',*/ 'landscape'],
    // socialbuttons: ['facebook', 'apple', 'google', 'twitter'],
    stateManagement: 'redux'
  },
  { features: ['googlemaps'], socialbuttons: [], stateManagement: 'recoil' },
  { features: ['firebase '], socialbuttons: [], stateManagement: 'redux' },
  { features: ['firebase'], socialbuttons: [], stateManagement: 'recoil' },
  {
    features: ['pushnotifications'],
    socialbuttons: [],
    stateManagement: 'recoil'
  },
  {
    features: [
      'loginandsignup',
      /*'socialButtons',*/
      'pushnotifications',
      'landscape'
    ],
    // socialbuttons: ['facebook', 'google', 'twitter'],
    stateManagement: 'redux'
  },
  {
    features: [
      'loginandsignup',
      /*'socialButtons',*/
      'pushnotifications',
      'landscape'
    ],
    // socialbuttons: ['facebook', 'google', 'twitter'],
    stateManagement: 'recoil'
  },
  {
    features: [
      'loginandsignup',
      'tabs',
      /*'socialButtons',*/
      'firebase',
      'pushnotifications'
    ],
    // socialbuttons: ['apple', 'google'],
    stateManagement: 'redux'
  },
  {
    features: [
      'loginandsignup',
      'tabs',
      /*'socialButtons',*/
      'firebase',
      'pushnotifications'
    ],
    // socialbuttons: ['apple', 'google'],
    stateManagement: 'recoil'
  },
  {
    features: [
      'tabs',
      'drawer',
      /*'socialButtons',*/
      'googlemaps',
      'firebase',
      'landscape'
    ],
    // socialbuttons: ['facebook', 'apple', 'google', 'twitter'],
    stateManagement: 'redux'
  },
  {
    features: [
      'tabs',
      'drawer',
      /*'socialButtons',*/
      'googlemaps',
      'firebase',
      'landscape'
    ],
    // socialbuttons: ['facebook', 'apple', 'google', 'twitter'],
    stateManagement: 'recoil'
  },
  {
    features: [
      'loginandsignup',
      'onboarding',
      'tabs',
      'drawer',
      'firebase',
      'pushnotifications'
    ],
    socialbuttons: [],
    stateManagement: 'redux'
  },
  {
    features: [
      'loginandsignup',
      'onboarding',
      'tabs',
      'drawer',
      'firebase',
      'pushnotifications'
    ],
    socialbuttons: [],
    stateManagement: 'recoil'
  },
  {
    features: [
      'loginandsignup',
      'onboarding',
      /*'socialButtons',*/
      'firebase',
      'pushnotifications',
      'landscape'
    ],
    // socialbuttons: ['facebook', 'google', 'twitter'],
    stateManagement: 'redux'
  },
  {
    features: [
      'loginandsignup',
      'onboarding',
      /*'socialButtons',*/
      'firebase',
      'pushnotifications',
      'landscape'
    ],
    // socialbuttons: ['facebook', 'google', 'twitter'],
    stateManagement: 'recoil'
  },
  {
    features: [
      'loginandsignup',
      'onboarding',
      'tabs',
      /*'socialButtons',*/
      'firebase',
      'pushnotifications',
      'landscape'
    ],
    // socialbuttons: ['facebook', 'apple', 'google', 'twitter'],
    stateManagement: 'redux'
  },
  {
    features: [
      'loginandsignup',
      'onboarding',
      'tabs',
      /*'socialButtons',*/
      'firebase',
      'pushnotifications',
      'landscape'
    ],
    // socialbuttons: ['facebook', 'apple', 'google', 'twitter'],
    stateManagement: 'recoil'
  }
].map((v, i) => {
  v.features = v.features.reduce((p, c) => ({ ...p, [c]: true }), {});
  return [i + 1, v];
});

const TEMP_FOLDER = path.join(__dirname, '../../tmp');
const PROJECT_NAME = 'kaminorn';
const GENERATOR_TIMEOUT = 720000; // 12 min

module.exports = {
  CASES,
  GENERATOR_TIMEOUT,
  PROJECT_NAME,
  TEMP_FOLDER
};
