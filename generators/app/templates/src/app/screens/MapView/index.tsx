import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import { appScreensNavOptions } from 'app/navigation/config/screensOptions';
import Routes from 'app/navigation/routes';
import { Maps } from 'app/components';

function MapView() {
  return <Maps testID="google-maps-container" />;
}

const Stack = createStackNavigator();

const MapScreen = () => (
  <Stack.Screen
    name={Routes.MapView}
    component={MapView}
    options={appScreensNavOptions[Routes.MapView]}
  />
);

export default MapScreen;
