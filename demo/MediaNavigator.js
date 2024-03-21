import React from 'react'
import { createStackNavigator } from "@react-navigation/stack";

import AudioScreen from './AudioScreen';
import VideoScreen from './VideoScreen';
import MediaListingsScreen from './MediaListingsScreen';

const Stack = createStackNavigator();

function MediaNavigator() {
  return (
  <Stack.Navigator >
    <Stack.Screen name="MediaListings" component={MediaListingsScreen} />
    <Stack.Screen name="AudioDetails" component={AudioScreen} />
    <Stack.Screen name="VideoDetails" component={VideoScreen} />
  </Stack.Navigator>
  )
}

export default MediaNavigator
