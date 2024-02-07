// components/ActivitiesList.js

import React from 'react';
import { View, Text, FlatList } from 'react-native';

const ActivitiesList = ({ activities }) => {
  return (
    <View>
      <FlatList
        data={activities}
        renderItem={({ item }) => (
          <View>
            <Text>{item.name}</Text>
            <Text>Type: {item.type}</Text>
            <Text>Duration: {item.duration} minutes</Text>
            <Text>Special: {item.isSpecial ? 'Yes' : 'No'}</Text>
          </View>
        )}
        keyExtractor={(item) => item.id.toString()}
      />
    </View>
  );
};

export default ActivitiesList;