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
      headerStyle: { backgroundColor: COLORS.header },
      headerTintColor: COLORS.headerText,
      tabBarStyle: { backgroundColor: COLORS.header}, 
      tabBarActiveTintColor:COLORS.icon,
      tabBarinactiveTintColor: COLORS.grey,
      }}
    >
      <Tab.Screen name="All Activities" 
      component={AllActivitiesScreen} 
      options={{
        tabBarIcon:({ color }) => (<MaterialIcons name="attach-money" 
        size={25} color={color} />
        ),
      }}/>
      <Tab.Screen name="Special Activities" 
      component={SpecialActivitiesScreen} 
      options={{
        tabBarIcon: ({ color }) => (
          <AntDesign name="exclamation" size={25} color={color}  />
        ),
      }}/>
    </Tab.Navigator>
  );
};

export default function App() {
  return (
    
       <NavigationContainer>
        <Stack.Navigator screenOptions={{
          headerStyle: { backgroundColor: COLORS.header },
          headerTintColor: COLORS.headerText,
        }}>
          <Stack.Screen name="Start" component={StartScreen} options={{ headerShown: false }} />
          <Stack.Screen name="Main" component={MainTabNavigator} options={{ headerShown: true }}/>
          <Stack.Screen name="Add An Activity" component={AddActivityScreen} options={{  headerBackTitleVisible: false,
            headerTitleStyle: { color: COLORS.headerText }, 
          }}/>
        
          
        </Stack.Navigator>
      
      
      </NavigationContainer>
 
     

  );
}