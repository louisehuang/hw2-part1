// screens/SpecialActivitiesScreen.js

import React from 'react';
import { View, Text } from 'react-native';
import ActivitiesList from '../components/ActivityList';

const SpecialActivitiesScreen = () => {
  return (
    <View>
      <Text>Special Activities</Text>
      <ActivitiesList showSpecial={true} />
    </View>
  );
};

export default SpecialActivitiesScreen;
