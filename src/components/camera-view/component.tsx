import React from 'react';
import { NavigationProp, useNavigation } from '@react-navigation/native';
import { requireNativeComponent } from 'react-native';

import { ROUTES } from '@constants';
import { styles } from './style';

// ~~~~~~ Constant

const CameraViewComponent: any = requireNativeComponent('CameraView');

// ~~~~~~ Component

export const CameraView = () => {
  // ~~~~~~ Hooks

  const navigation = useNavigation<NavigationProp<any>>();

  // ~~~~~~ Computed

  function onResultImageExported(event: any) {
    navigation.navigate(ROUTES.RESULT_ROUTE, {
      data: event.nativeEvent,
    });
  }

  // ~~~~~~ Render

  return (
    <CameraViewComponent
      style={styles.cameraView}
      onResultImageExported={onResultImageExported}
    />
  );
};
