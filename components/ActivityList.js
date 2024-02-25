import { Text, View } from "react-native";
import React, { useState, useEffect } from 'react';
import { ActivityContext } from "./ActivityContext";
import { COMMON_STYLES } from './styles';
import PressableButton from './PressableButton';
import { database } from "../firebase-files/firebaseSetup";
import { collection, query, where, onSnapshot } from "firebase/firestore";

const ActivityList = ({ type }) => {
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


    return (
      // specail activity do not have icon fix it
    <View style={COMMON_STYLES.container}>
       <PressableButton
            customStyle={COMMON_STYLES.specialContainer}
            onPressFunction={() => {
              console.log("Pressed");
            }}
          >
        {activities.map(activity => (
          <View key={activity.id} style={COMMON_STYLES.activityContainer}>
            <Text style={COMMON_STYLES.activityText}>
              {activity.type} {type === 'special' && <Entypo name="warning" size={15} color="gold" />}
            </Text>
            <View style={COMMON_STYLES.activityInfo}>
              <Text style={COMMON_STYLES.activityInfoText}>
                {activity.formattedDate}
              </Text>
            </View>
            <View style={COMMON_STYLES.activityInfo}>
              <Text style={COMMON_STYLES.activityInfoText}>
                {activity.duration} mins
              </Text>
            </View>
          </View>
        ))}
      </PressableButton>
      </View>
    );
  };
  
  export default ActivityList;