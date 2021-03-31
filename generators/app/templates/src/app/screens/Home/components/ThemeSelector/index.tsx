import React, { useContext } from 'react';
import { View } from 'react-native';
import { RadioButton } from 'react-native-paper';
import i18next from 'i18next';
import { ThemeProperty } from 'interfaces/theme';
import { ThemeContext } from 'hooks/theme';
import { Text } from 'app/components';

import styles from './styles';

export default function ThemeSelector() {
  const { changeTheme, appTheme } = useContext(ThemeContext);
  const changeValue = (value: ThemeProperty) => changeTheme(value);

  return (
    <View style={styles.themeSelectorContainer}>
      <Text testID="theme-sector-group-text" primary>
        {i18next.t('HOME:THEME_GROUP_TEXT')}
      </Text>
      <RadioButton.Group
        onValueChange={newValue => changeValue(newValue as ThemeProperty)}
        value={appTheme.type}>
        <View style={styles.themeSelectorGroup}>
          <RadioButton.Item
            label="Light"
            value={ThemeProperty.LIGHT}
            style={styles.selectorItem}
          />
          <RadioButton.Item
            label="Dark"
            value={ThemeProperty.DARK}
            style={styles.selectorItem}
          />
          <RadioButton.Item
            label="System"
            value={ThemeProperty.SYSTEM}
            style={styles.selectorItem}
          />
        </View>
      </RadioButton.Group>
    </View>
  );
}
