import { Text, View } from "react-native";
import React, { useContext } from 'react';
import { ActivityContext } from "./ActivityContext";
import { COMMON_STYLES } from './styles';

const Act = ({ type }) => {
    const { activities } = useContext(ActivityContext);
  
    const filteredActivities = activities.filter(activity => {
        if (type === 'special') {
          return (activity.type === 'Running' || activity.type === 'Weights') && activity.duration > 60;
        } else {
          return true; 
        }
      });
  
    return (
      // specail activity do not have icon fix it
    <View style={COMMON_STYLES.container}>
       <View style={COMMON_STYLES.specialContainer}>
        {filteredActivities.map(activity => (
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
      </View>
      </View>
    );
  };
  
  export default Act;