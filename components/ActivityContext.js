import React, { createContext, useState, useContext } from 'react';
import { View, Text, FlatList } from 'react-native';

// Activity context
export const ActivityContext = createContext();

// Activity provider
export const ActivityProvider = ({ children }) => {
  const [activities, setActivities] = useState([
    { label: 'Walking', value: 'Walking'},
    { label: 'Running', value: 'Running' },
    { label: 'Swimming', value: 'Swimming'},
    { label: 'Weights', value: 'Weights'},
    { label: 'Yoga', value: 'Yoga' },
    { label: 'Cycling', value: 'Cycling' },
    { label: 'Hiking', value: 'Hiking' },
  ]);

  // Function to update activities array
  const updateActivities = (newActivity) => {
    setActivities([...activities, newActivity]);
  };

  return (
    <ActivityContext.Provider value={{ activities, updateActivities }}>
      {children}
    </ActivityContext.Provider>
  );
};

// ActivitiesList component
const ActivityList = ({ special }) => {
  const { activities } = useContext(ActivityContext);

  // Filter activities based on special condition
  const filteredActivities = special
    ? activities.filter(activity => (activity.type === 'Running' || activity.type === 'Weights') && activity.duration > 60)
    : activities;

  return (
    <View>
      <FlatList
        data={filteredActivities}
        renderItem={({ item }) => (
          <View>
            <Text>{item.type}</Text>
            <Text>Duration: {item.duration} minutes</Text>
            {special && <Text>Special Activity</Text>}
          </View>
        )}
        keyExtractor={item => item.id.toString()}
      />
    </View>
  );
};

export default ActivityList;