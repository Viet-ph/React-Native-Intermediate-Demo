import React from 'react'
import { createStackNavigator } from "@react-navigation/stack";

import CameraListingsScreen from './CameraListingsScreen';
import ExpoCameraScreen from './ExpoCameraScreen';

const Stack = createStackNavigator();

function CameraNavigator() {
  return (
  <Stack.Navigator >
    <Stack.Screen name="CameraListings" component={CameraListingsScreen} />
    <Stack.Screen name="ExpoCamera" component={ExpoCameraScreen} />
  </Stack.Navigator>
  )
}

export default CameraNavigator
