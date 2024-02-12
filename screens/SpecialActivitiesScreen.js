import React, { useContext, useEffect } from 'react';
import { View,Text, Button,  StyleSheet, } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { ActivityContext } from '../components/ActivityContext'; 
import { COLORS } from "../components/styles";
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

  return (
    <View style={styles.container}>
      {specialActivities.map((activity, index) => (
        <View key={activity.id} style={styles.activityContainer}>
         <Text style={styles.activityText}>{activity.type} {specialActivities.includes(activity) && <Entypo name="warning" size={24} color="yellow" />}
           </Text>
         <View style={styles.activityInfo}>
            <Text style={styles.activityInfoText}>
              {activity.duration} mins 
              </Text>
        </View>
          <View style={styles.activityInfo}>
            <Text style={styles.activityInfoText}>     
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
    marginTop:10,
    justifyContent: 'flex-start',
    alignItems: 'center',
  },
  activityContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    borderWidth: 1,
    borderColor: 'purple',
    backgroundColor:'purple',
    borderRadius: 10,
    padding: 10,
    marginBottom: 10,
    width: '90%',
  },
  iconInfo: {
    flexDirection: 'row',
    backgroundColor: 'purple',
    padding: 5,
    marginHorizontal:5,
    marginRight: 3,
    justifyContent: 'flex-end'
  },
  activityInfo: {
    flexDirection: 'row',
    backgroundColor: 'white',
    padding: 5,
    marginHorizontal:3,
    //marginRight: 4,
    justifyContent: 'flex-end'
  },
  activityText: {
    fontSize: 16,
    color:COLORS.text,
    marginRight: 10,
  },
  activityInfoText: {
    fontSize: 16,
  },
});


export default SpecialActivitiesScreen;
