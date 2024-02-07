// screens/AllActivitiesScreen.js

import React from 'react';
import { View, Text } from 'react-native';
import ActivitiesList from '../components/ActivityList';

const AllActivitiesScreen = () => {
  return (
    <View>
      <Text>All Activities</Text>
      <ActivitiesList showSpecial={false} />
    </View>
  );
};

export default AllActivitiesScreen;
