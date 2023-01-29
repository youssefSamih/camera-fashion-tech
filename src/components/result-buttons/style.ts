import { StyleSheet } from 'react-native';

import { COLORS } from '@constants';
import { FONTS } from '@theme';

export const styles = StyleSheet.create({
  buttonsView: {
    flex: 0.3,
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginHorizontal: 25,
  },
  resultTouchable: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 5,
  },
  resultButtonText: {
    color: COLORS.white,
    ...FONTS.Display,
  },
});
