
import React, { useEffect } from "react";
import { View, Text,Button } from 'react-native';
import ActivitiesList from '../components/ActivityList';
import { useNavigation } from '@react-navigation/native';
import { ActivityContext } from '../components/ActivityContext'; // Import your ActivityContext




const AllActivitiesScreen = () => {
  const navigation = useNavigation();
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
    <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
      <ActivitiesList special={false} />
      
    </View>
  );
};

export default AllActivitiesScreen;
