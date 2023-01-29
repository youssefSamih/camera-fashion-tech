import { StyleSheet } from 'react-native';

import { COLORS } from '@constants';

export const styles = StyleSheet.create({
  cameraButtonView: {
    flex: 0.3,
    justifyContent: 'center',
    alignItems: 'center',
  },
  touchableBorder: {
    width: 90,
    height: 90,

    borderRadius: 50,
    borderWidth: 3,
    borderColor: COLORS.white,

    justifyContent: 'center',
  },
  circleButton: {
    width: 80,
    height: 80,

    backgroundColor: COLORS.white,

    borderRadius: 40,
    margin: 2,
  },
});
