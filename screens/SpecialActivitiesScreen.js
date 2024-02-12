import React, { useContext, useEffect } from 'react';
import { View,Text, Button,  StyleSheet, } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import ActivityList from '../components/ActivityList';
import { ActivityContext } from '../components/ActivityContext'; // Import your ActivityContext

import { Entypo } from '@expo/vector-icons';

const SpecialActivitiesScreen = () => {
  const navigation = useNavigation();
  const { activities } = useContext(ActivityContext); // Access activities from context
  const specialActivities = activities.filter(
    activity => (activity.type === 'Running' || activity.type === 'Weights') && activity.duration > 60
  );
  

  useEffect(() => {
    navigation.setOptions({
      headerRight: () => (
        <Button
          title="Add"
          color="gray"
          onPress={() => navigation.navigate('Add An Activity')}
        />
      ),
    });
  }, [navigation]);

  const formatDate = (date) => {
    return `${date.getMonth() + 1}/${date.getDate()}/${date.getFullYear()}`;
  };
  return (
    <View style={styles.container}>
      {specialActivities.map((activity, index) => (
        <View style={styles.activityContainer}>
         <Text style={styles.activityText}>
              {activity.type} <Entypo name="warning" size={24} color="black" /> {activity.duration} mins {formatDate(activity.date)}
            </Text>
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


export default SpecialActivitiesScreen;
