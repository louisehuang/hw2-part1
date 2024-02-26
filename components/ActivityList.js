import { Text, View } from "react-native";
import React, { useState, useEffect } from 'react';
import { Entypo } from '@expo/vector-icons';
import { COMMON_STYLES } from './styles';
import PressableButton from './PressableButton';
import { database } from "../firebase-files/firebaseSetup";
import { collection, query, where, onSnapshot } from "firebase/firestore";

const ActivityList = ({ type, navigation }) => {
  const [activities, setActivities] = useState([]);

  useEffect(() => {
    const activitiesCollection = collection(database, "activities");

    const queryCollection = type === 'special' 
      ? query(activitiesCollection, where('special', '==', true))
      : activitiesCollection;

    const unsub = onSnapshot(queryCollection, (snapshot) => {
      const fetchedActivities = [];
      snapshot.forEach((doc) => {
        fetchedActivities.push({ id: doc.id, ...doc.data() });
      });
      setActivities(fetchedActivities);
    });

    return () => unsub();
  }, [type]);

  function handleEdit(activity) {
    navigation.navigate("Add An Activity", { editMode: true, activityToEdit:activity.id,});
  }

    return (
      // specail activity do not have icon fix it
    <View style={COMMON_STYLES.container}>
       <View style={COMMON_STYLES.specialContainer}>
      
        {activities.map(activity => (
           <PressableButton 
           customStyle={COMMON_STYLES.pressableContainer}
           onPressFunction={() => handleEdit(activity)}>
          <View key={activity.id} style={COMMON_STYLES.activityContainer}>

            <Text style={COMMON_STYLES.activityText}>
              {activity.type} {activity.special && <Entypo name="warning" size={15} color="gold" />}
            </Text>
            <View style={COMMON_STYLES.activityInfo}>
              <Text style={COMMON_STYLES.activityInfoText}>
                {activity.date}
              </Text>
            </View>
            <View style={COMMON_STYLES.activityInfo}>
              <Text style={COMMON_STYLES.activityInfoText}>
                {activity.duration} mins
              </Text>
            </View>
          </View>
          </PressableButton>
        ))}
        </View>
      </View>
    );
  };
  
  export default ActivityList;