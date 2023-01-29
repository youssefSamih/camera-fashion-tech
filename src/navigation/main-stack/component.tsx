import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import {
  createStackNavigator,
  StackNavigationOptions,
} from '@react-navigation/stack';

import { CameraScreen, ResultScreen } from '@screens';
import { ROUTES } from '@constants';

// ~~~~~~ Component

export const MainStack = () => {
  // ~~~~~~ Computed

  const Stack = createStackNavigator();

  const screenOptions: StackNavigationOptions = {
    headerShown: false,
  };

  // ~~~~~~ Render

  return (
    <NavigationContainer>
      <Stack.Navigator
        screenOptions={screenOptions}
        initialRouteName={ROUTES.CAMERA_ROUTE}
      >
        <Stack.Screen name={ROUTES.CAMERA_ROUTE} component={CameraScreen} />
        <Stack.Screen name={ROUTES.RESULT_ROUTE} component={ResultScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};
