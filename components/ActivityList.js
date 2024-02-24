import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { ActivityContext } from '../components/ActivityContext';

export default function ActivityList({ type }) {
    const { activities } = useContext(ActivityContext); 
    const specialActivities = activities.filter(
        (activity) => (activity.type === 'Running' || activity.type === 'Weights') && activity.duration > 60
      );
  return (
    <View style={COMMON_STYLES.container}>
       <View style={COMMON_STYLES.specialContainer}>
        {activities.map((activity) => (
          <View key={activity.id} style={COMMON_STYLES.activityContainer}>

            <View style={COMMON_STYLES.iconInfo}>
            
            <Text style={COMMON_STYLES.activityText}>{activity.type} {specialActivities.includes(activity) && <Entypo name="warning" size={15} color="gold" />}
            </Text>
            
            
            </View>

            <View style={[COMMON_STYLES.activityInfoContainer,{ justifyContent: 'flex-end' }]}>
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
            
          </View>
          
        ))}
      </View>
    </View>
  )
}
