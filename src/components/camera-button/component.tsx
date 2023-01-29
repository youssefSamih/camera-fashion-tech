import React from 'react';
import { NativeModules, TouchableOpacity, View } from 'react-native';

import { styles } from './style';

// ~~~~~~ Constant

const { CameraViewManager } = NativeModules;

// ~~~~~~ Component

export const CameraButton = () => {
  // ~~~~~~ Computed

  function takePhoto() {
    CameraViewManager.takePhoto();
  }

  // ~~~~~~ Render

  return (
    <View style={styles.cameraButtonView}>
      <TouchableOpacity onPress={takePhoto} style={styles.touchableBorder}>
        <View style={styles.circleButton} />
      </TouchableOpacity>
    </View>
  );
};
