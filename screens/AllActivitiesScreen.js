
import React, { useContext,useEffect } from "react";
import { View, Text,Button,StyleSheet } from 'react-native';
import ActivityList from '../components/ActivityList';
import { useNavigation } from '@react-navigation/native';
import { ActivityContext } from '../components/ActivityContext'; // Import your ActivityContext
import { Entypo } from '@expo/vector-icons';



const AllActivitiesScreen = () => {
  const navigation = useNavigation();
  const { activities } = useContext(ActivityContext); 
  const specialActivities = activities.filter(
    activity => (activity.type === 'Running' || activity.type === 'Weights') && activity.duration > 60
  );
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



  return (
    <View style={styles.container}>
      {activities.map((activity, index) => (
        <View key={activity.id} style={styles.activityContainer}>
          <View style={styles.activityInfo}>
            <Text style={styles.activityText}>{activity.type} 
            {specialActivities.includes(activity) && <Entypo name="warning" size={24} color="black" />}
            
            {activity.duration} mins
            {activity.formattedDate}
            </Text>
          </View>
        </View>
      ))}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 20,
  },

  activityContainer: {
    borderWidth: 1,
    borderColor: 'white',
    backgroundColor:'darkblue',
    borderRadius: 10,
    padding: 10,
    marginBottom: 10,
    width: '90%',
    backgroundColor: 'white',
  },
  activityInfo: {
    backgroundColor: 'white',
    borderRadius: 5,
    padding: 5,
    marginVertical: 5,
  },
  activityText: {
    fontSize: 16,
  },
});

export default AllActivitiesScreen;
