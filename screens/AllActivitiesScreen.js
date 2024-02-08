
import React from 'react';
import { View, Text } from 'react-native';
import ActivitiesList from '../components/ActivityList';
import { MaterialIcons } from '@expo/vector-icons';

const AllActivitiesScreen = () => {
  return (
    <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
      <ActivitiesList special={false} />
    </View>
  );
};

export default AllActivitiesScreen;
