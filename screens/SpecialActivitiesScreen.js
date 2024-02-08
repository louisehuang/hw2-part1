import React from 'react';
import { View, Text } from 'react-native';
import ActivitiesList from '../components/ActivityList';
import { AntDesign } from '@expo/vector-icons';

const SpecialActivitiesScreen = () => {
  return (
    <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
      <ActivitiesList special />
    </View>
  );
};

export default SpecialActivitiesScreen;
