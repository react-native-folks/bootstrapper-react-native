import React from 'react';
import { StatusBar } from 'react-native';
import { statusBarStyles } from 'app/navigation/config/statusBar';
import { useTheme } from 'react-native-paper';

interface CustomStatusBarProps {
  routeName?: string | null;
}

const CustomStatusBar = ({ routeName }: CustomStatusBarProps) => {
  const isDark = useTheme().dark;
  const statusbar = statusBarStyles(isDark);
  const statusBarProps = statusbar[routeName || ''] || statusbar.default;
  return <StatusBar animated {...statusBarProps} />;
};

export default CustomStatusBar;
