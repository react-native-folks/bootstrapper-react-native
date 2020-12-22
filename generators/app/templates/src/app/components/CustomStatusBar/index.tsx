import React from 'react';
import { StatusBar } from 'react-native';
import { statusBarStyles } from 'app/navigation/config/statusBar';

interface CustomStatusBarProps {
  routeName?: string | null;
}

const CustomStatusBar = ({ routeName }: CustomStatusBarProps) => {
  const statusBarProps =
    statusBarStyles[routeName || ''] || statusBarStyles.default;
  return <StatusBar animated {...statusBarProps} />;
};

export default CustomStatusBar;
