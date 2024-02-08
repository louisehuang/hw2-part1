import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import StartScreen from './screens/startscreen';
import AllActivitiesScreen from './screens/AllActivitiesScreen';
import SpecialActivitiesScreen from './screens/SpecialActivitiesScreen';
import { AntDesign } from '@expo/vector-icons';
import { MaterialIcons } from '@expo/vector-icons';
//import AddActivityScreen from './screens/AddActivityScreen';


const Stack = createStackNavigator();
const Tab = createBottomTabNavigator();


function MainTabNavigator() {
  return (
    <Tab.Navigator>
      <Tab.Screen name="All Activities" 
      component={AllActivitiesScreen} 
      options={{
        tabBarIcon:() => (<MaterialIcons name="attach-money" 
        size={24} color="black" />
        ),
      }}/>
      <Tab.Screen name="Special Activities" 
      component={SpecialActivitiesScreen} 
      options={{
        tabBarIcon: () => (
          <AntDesign name="exclamation" size={24} color={'black'} />
        ),
      }}/>
    </Tab.Navigator>
  );
};

export default function App() {
  return (
      <NavigationContainer>
        <Stack.Navigator>
          <Stack.Screen name="Start" component={StartScreen} />
          <Stack.Screen name="Main" component={MainTabNavigator} />
         
          
        </Stack.Navigator>
      </NavigationContainer>

  );
}