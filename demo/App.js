import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, TouchableOpacity } from 'react-native';
import {NavigationContainer} from "@react-navigation/native"
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { MaterialCommunityIcons } from "@expo/vector-icons";
import navigationTheme from './theme/navigationTheme'
import CameraNavigator from './CameraNavigator';
import MediaNavigator from './MediaNavigator';
import SendSmsScreen from './SendSmsScreen';
import CallScreen from './PhoneCallScreen';

const Tab = createBottomTabNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Tab.Navigator>
        <Tab.Screen 
          name="Camera" 
          component={CameraNavigator} 
          options={{
            tabBarIcon: ({ color, size }) => (
              <MaterialCommunityIcons name="camera" color={color} size={size} />
        ),
      }}/>
        <Tab.Screen 
          name="Media" 
          component={MediaNavigator}       
          options={{
            tabBarIcon: ({ color, size }) => (
              <MaterialCommunityIcons name="movie" color={color} size={size} />
        ),
      }}/>
      <Tab.Screen 
          name="SMS" 
          component={SendSmsScreen}       
          options={{
            tabBarIcon: ({ color, size }) => (
              <MaterialCommunityIcons name="message" color={color} size={size} />
        ),
      }}/>
      <Tab.Screen 
          name="Phone" 
          component={CallScreen}       
          options={{
            tabBarIcon: ({ color, size }) => (
              <MaterialCommunityIcons name="phone" color={color} size={size} />
        ),
      }}/>
      </Tab.Navigator>
    </NavigationContainer>
  );
}