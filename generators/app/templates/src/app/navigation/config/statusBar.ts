import { blue, white } from 'constants/colors';

import Routes from '../routes';

const statusBarConfig = {
  transparentStatusBar: {
    barStyle: 'dark-content',
    translucent: true,
    backgroundColor: 'rgba(255, 255, 255, 0.6)'
  },
  blueStatusBar: { barStyle: 'light-content', backgroundColor: blue },
  whiteStatusBar: { barStyle: 'dark-content', backgroundColor: white }
} as const;

export const statusBarStyles = {
  // TODO: Change these styles to customize the status bar
  [Routes.Login]: statusBarConfig.transparentStatusBar,
  [Routes.SignUp]: statusBarConfig.blueStatusBar,
  [Routes.Tab1]: statusBarConfig.blueStatusBar,
  [Routes.Tab2]: statusBarConfig.whiteStatusBar,
  [Routes.Home]: statusBarConfig.blueStatusBar,
  default: statusBarConfig.transparentStatusBar
};

export default statusBarConfig;
