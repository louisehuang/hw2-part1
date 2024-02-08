import React, { useContext, useEffect } from 'react';
import { View, Button } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import ActivitiesList from '../components/ActivityList';
import { ActivityContext } from '../components/ActivityContext'; // Import your ActivityContext

const SpecialActivitiesScreen = () => {
  const navigation = useNavigation();
  const { activities } = useContext(ActivityContext); // Access activities from context

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
    <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
      <ActivitiesList activities={activities.filter(activity => activity.isSpecial)} />
    </View>
  );
};

export default SpecialActivitiesScreen;
