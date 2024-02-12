import React, { createContext, useState, useContext } from 'react';
import { View, Text, FlatList } from 'react-native';

// Activity context
export const ActivityContext = createContext();

// Activity provider
export const ActivityProvider = ({ children }) => {
  const [activities, setActivities] = useState([]);


  // Function to update activities array
  const updateActivities = (newActivity) => {
    const formattedDate = formatDate(newActivity.date);
    const activityWithFormattedDate = { ...newActivity, formattedDate };
    setActivities([...activities, activityWithFormattedDate]);
  };
  const formatDate = (date) => {
    const options = { weekday: 'short', month: 'short', day: 'numeric', year: 'numeric' };
    return date ? date.toLocaleDateString(undefined, options) : 'Select date';
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
            <Text>{item.label}</Text>
            <Text>Duration: {item.duration} minutes</Text>
            {special && <Text>Special Activity</Text>}
          </View>
        )}
        keyExtractor={item => item.value.toString()}
      />
    </View>
  );
};

export default ActivityList;