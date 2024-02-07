import React from 'react';
import {
  Button,
} from "react-native";
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import StartScreen from './screens/startscreen';
import AllActivitiesScreen from './screens/AllActivitiesScreen';
import SpecialActivitiesScreen from './screens/SpecialActivitiesScreen';
//import AddActivityScreen from './screens/AddActivityScreen';


const Stack = createStackNavigator();
const Tab = createBottomTabNavigator();



export default function App() {
  return (
      <NavigationContainer>
        <Stack.Navigator>
          <Stack.Screen name="Start" component={StartScreen} />
          <Stack.Screen name="AllActivities" component={AllActivitiesScreen} />
          <Stack.Screen name="SpecialActivities" component={SpecialActivitiesScreen} />
         
          
        </Stack.Navigator>
      </NavigationContainer>

  );
}