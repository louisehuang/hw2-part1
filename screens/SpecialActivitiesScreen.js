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
    <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
      {specialActivities.map((activity, index) => (
        <View key={index}>
          <Text>Type: {activity.type}</Text>
          <Text>Duration: {activity.duration}</Text>
          <Text>Date: {formatDate(activity.date)}</Text>
        </View>
      ))}
    </View>
  );
};


export default SpecialActivitiesScreen;
