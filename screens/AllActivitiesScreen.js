
import React, { useContext,useEffect } from "react";
import { View, Text,Button } from 'react-native';
import ActivityList from '../components/ActivityList';
import { useNavigation } from '@react-navigation/native';
import { ActivityContext } from '../components/ActivityContext'; // Import your ActivityContext




const AllActivitiesScreen = () => {
  const navigation = useNavigation();
  const { activities } = useContext(ActivityContext); 
  // functions inside useEffect are called after the rendering
  useEffect(() => {
    if (navigation) { // Ensure navigation object exists before using it
      navigation.setOptions({
        headerRight: () => (
          <Button
            title="Add"
            color="gray"
            onPress={() => navigation.navigate('Add An Activity')}
          />
        ),
      });
    }
  }, [navigation]);

  const formatDate = (date) => {
    return `${date.getMonth() + 1}/${date.getDate()}/${date.getFullYear()}`;
  };


  return (
    <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
      {activities.map((activity, index) => (
        <View key={index}>
          <Text>Type: {activity.type}</Text>
          <Text>Duration: {activity.duration}</Text>
          <Text>Date: {formatDate(activity.date)}</Text>
        </View>
      ))}
    </View>
  );
};


export default AllActivitiesScreen;
