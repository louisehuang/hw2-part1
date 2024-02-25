
import React, { useContext,useEffect } from "react";
import { View, Text,Button } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { ActivityContext } from '../components/ActivityContext'; 
import { Entypo } from '@expo/vector-icons';
import { COMMON_STYLES } from "../components/styles";
import PressableButton from "../components/PressableButton";
import ActivityList from '../components/ActivityList';


const AllActivitiesScreen = () => {
  const navigation = useNavigation();
  // functions inside useEffect are called after the rendering
  useEffect(() => {
    if (navigation) { // Ensure navigation object exists before using it
      navigation.setOptions({
        headerRight: () => (
          <PressableButton
          customStyle={COMMON_STYLES.addButton}
            onPressFunction={() => navigation.navigate('Add An Activity')}
          >
          <Text style={COMMON_STYLES.addButton}>+</Text>
          </PressableButton>
          
          
        ),
      });
    }
  }, [navigation]);



  return (
    <View style={COMMON_STYLES.container}>
      <ActivityList type ="all"/>
      
      
    </View>
   
  );
};


export default AllActivitiesScreen;
