import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import StartScreen from './screens/startscreen';
import AllActivitiesScreen from './screens/AllActivitiesScreen';
import SpecialActivitiesScreen from './screens/SpecialActivitiesScreen';
import { AntDesign } from '@expo/vector-icons';
import { MaterialIcons } from '@expo/vector-icons';
import AddActivityScreen from './screens/AddAnActivityScreen';
import { ActivityProvider } from './components/ActivityContext'
import { COLORS } from './components/styles';


const Stack = createStackNavigator();
const Tab = createBottomTabNavigator();

function MainTabNavigator() {
  return (
    <Tab.Navigator  screenOptions={{
      hheaderStyle: { backgroundColor: COLORS.header },
      tabBarStyle: { backgroundColor: COLORS.header}, // Set tabBar background color
      tabBarOptions: {
        activeTintColor: COLORS.icon, 
        inactiveTintColor: COLORS.grey,
        },
      }}
    >
      <Tab.Screen name="All Activities" 
      component={AllActivitiesScreen} 
      options={{
        tabBarIcon:({ color }) => (<MaterialIcons name="attach-money" 
        size={24} color={color} />
        ),
      }}/>
      <Tab.Screen name="Special Activities" 
      component={SpecialActivitiesScreen} 
      options={{
        tabBarIcon: ({ color }) => (
          <AntDesign name="exclamation" size={24} color={color}  />
        ),
      }}/>
    </Tab.Navigator>
  );
};

export default function App() {
  return (
    <ActivityProvider>
       <NavigationContainer>
        
        <Stack.Navigator>
          <Stack.Screen name="Start" component={StartScreen} options={{ headerShown: false }} />
          <Stack.Screen name="Main" component={MainTabNavigator} options={{ headerShown: false }}  />
          <Stack.Screen name="Add An Activity" component={AddActivityScreen} />
        
          
        </Stack.Navigator>
      
      
      </NavigationContainer>
    </ActivityProvider>
     

  );
}