import React, { useContext, useEffect } from 'react';
import { View,Text, Button} from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { ActivityContext } from '../components/ActivityContext'; 
import { COMMON_STYLES } from "../components/styles";
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
          title='Add'
          color='gold'
          onPress={() => navigation.navigate('Add An Activity')}
        />
      ),
    });
  }, [navigation]);

  return (

    <View style={COMMON_STYLES.container}>
      <View style={COMMON_STYLES.specialContainer}>
        {specialActivities.map((activity) => (
          <View key={activity.id} style={COMMON_STYLES.activityContainer}>
          <Text style={COMMON_STYLES.activityText}>{activity.type} {specialActivities.includes(activity) && <Entypo name="warning" size={24} color="yellow" />}
            </Text>
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





export default SpecialActivitiesScreen;
