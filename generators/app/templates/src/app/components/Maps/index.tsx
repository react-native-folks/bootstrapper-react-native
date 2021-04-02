// import { blue } from 'constants/colors';

import React from 'react';
import { View } from 'react-native';
import MapView, {
  Callout,
  Marker,
  MapViewProps,
  PROVIDER_GOOGLE
} from 'react-native-maps';
import { Text } from 'app/components';

import styles from './styles';

const defaultRegion = {
  latitude: 37.78825,
  longitude: -122.4324,
  latitudeDelta: 0.0922,
  longitudeDelta: 0.0421
};

const Maps = (mapProps: MapViewProps) => {
  return (
    <MapView
      provider={PROVIDER_GOOGLE}
      style={styles.defaultStyle}
      initialRegion={defaultRegion}
      {...mapProps}>
      <Marker coordinate={{ ...defaultRegion }}>
        <Callout>
          <View style={styles.markerContainer}>
            <Text big>HI!</Text>
          </View>
        </Callout>
      </Marker>
    </MapView>
  );
};

export default Maps;
