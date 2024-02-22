import React, { createContext, useState } from 'react';

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
    const formattedDate = date.toLocaleDateString(undefined, options);
    const parts = formattedDate.split(', ');
  
    // Join the parts without the comma
    return parts.join(' ');
  };

  return (
    <ActivityContext.Provider value={{ activities, updateActivities }}>
      {children}
    </ActivityContext.Provider>
  );
};
