import React from 'react';
import { useRoute } from '@react-navigation/native';
import { Image } from 'react-native';

import { styles } from './style';

// ~~~~~~ Component

export const PhotoView = () => {
  // ~~~~~~ Hooks

  const route = useRoute();

  // ~~~~~~ Render

  return (
    <Image
      style={styles.photoView}
      source={{ uri: (route?.params as any)?.data?.resultUrl }}
    />
  );
};
