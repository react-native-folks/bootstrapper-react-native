import React, { useContext } from 'react';
import { View } from 'react-native';
import { RadioButton } from 'react-native-paper';
import i18next from 'i18next';
import { ThemeContext } from 'hooks/theme';
import { CustomText } from 'app/components';

import styles from './styles';

export default function ThemeSelector() {
  const { changeTheme, appTheme } = useContext(ThemeContext);
  const changeValue = (value: string) => changeTheme(value);

  return (
    <View style={styles.themeSelectorContainer}>
      <CustomText testID="theme-sector-group-text" primary>
        {i18next.t('HOME:THEME_GROUP_TEXT')}
      </CustomText>
      <RadioButton.Group
        onValueChange={newValue => changeValue(newValue)}
        value={appTheme.type}>
        <View style={styles.themeSelectorGroup}>
          <RadioButton.Item
            label="Light"
            value="light"
            style={styles.selectorItem}
          />
          <RadioButton.Item
            label="Dark"
            value="dark"
            style={styles.selectorItem}
          />
          <RadioButton.Item
            label="System"
            value="system"
            style={styles.selectorItem}
          />
        </View>
      </RadioButton.Group>
    </View>
  );
}
