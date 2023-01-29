import React from 'react';
import { NavigationProp, useNavigation } from '@react-navigation/native';
import { Image, Text, TouchableOpacity, View } from 'react-native';

import { ICONS } from '@constants';
import { styles } from './style';

// ~~~~~~ Component

export const ResultButtons = () => {
  // ~~~~~~ Hooks

  const navigation = useNavigation<NavigationProp<any>>();

  // ~~~~~~ Render

  return (
    <View style={styles.buttonsView}>
      <TouchableOpacity
        style={styles.resultTouchable}
        onPress={navigation.goBack}
      >
        <Image source={ICONS.back} />
        <Text style={styles.resultButtonText}>Retake</Text>
      </TouchableOpacity>

      <TouchableOpacity style={styles.resultTouchable} onPress={() => {}}>
        <Image source={ICONS.check} />
        <Text style={styles.resultButtonText}>Use photo</Text>
      </TouchableOpacity>
    </View>
  );
};
