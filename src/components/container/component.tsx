import React from 'react';
import { SafeAreaView } from 'react-native';

import { styles } from './style';

// ~~~~~~ Types

type Props = {
  children: React.ReactNode;
};

// ~~~~~~ Component

export const Container = ({ children }: Props) => {
  // ~~~~~~ Render

  return (
    <SafeAreaView style={styles.mainViewContainer}>{children}</SafeAreaView>
  );
};
