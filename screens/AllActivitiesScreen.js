
import React, { useContext,useEffect } from "react";
import { View, Text,Button,StyleSheet } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { ActivityContext } from '../components/ActivityList'; // Import your ActivityContext
import { Entypo } from '@expo/vector-icons';
import { COLORS, COMMON_STYLES } from "../components/styles";



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
            color= 'gold'
            onPress={() => navigation.navigate('Add An Activity')}
          />
        ),
      });
    }
  }, [navigation]);



  return (
    <View style={COMMON_STYLES.container}>
       <View style={COMMON_STYLES.specialContainer}>
        {activities.map((activity) => (
          <View key={activity.id} style={COMMON_STYLES.activityContainer}>
            <View style={COMMON_STYLES.iconInfo}>
            <Text style={COMMON_STYLES.activityText}>{activity.type} {specialActivities.includes(activity) && <Entypo name="warning" size={24} color="gold" />}
            </Text>
            </View>
            <View style={COMMON_STYLES.activityInfo}>
              <Text style={COMMON_STYLES.activityInfoText}>
              {activity.duration} mins
              </Text>
            </View>  
      
            <View style={COMMON_STYLES.activityInfo}>
              <Text style={COMMON_STYLES.activityInfoText}>
              {activity.formattedDate}
              </Text>
            </View>
          </View>
          
        ))}
      </View>
    </View>
   
  );
};


export default AllActivitiesScreen;
