import React, { useContext, useState } from 'react';
import { View, Button, Alert,TextInput } from 'react-native';
import DropDownPicker from 'react-native-dropdown-picker';
import DateTimePicker from '@react-native-community/datetimepicker';
import { ActivityContext } from '../components/ActivityContext';

const AddActivityScreen = ({ navigation }) => {
  const { activities } = useContext(ActivityContext);
  const [activityType, setActivityType] = useState('');
  const [duration, setDuration] = useState('');
  const [date, setDate] = useState(new Date());
  const [showDatePicker, setShowDatePicker] = useState(false);

  const handleSave = () => {
    // Validate user's entries
    if (!activityType || !duration || isNaN(duration) || duration <= 0) {
      Alert.alert('Invalid Input', 'Please fill in all fields with valid data.');
      return;
    }

    // Save the new entry
    const newActivity = {
      id: Date.now(), // Assuming unique ID based on timestamp
      type: activityType,
      duration: parseInt(duration),
      date,
    };

    setActivities([activities, newActivity]); // Update the data array

    // Navigate back to the previous screen
    navigation.goBack();
  };

  const handleCancel = () => {
    // Navigate back to the previous screen
    navigation.goBack();
  };

  const onChangeDate = (event, selectedDate) => {
    const currentDate = selectedDate || date;
    setShowDatePicker(false);
    setDate(currentDate);
  };

  return (
    <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
      <DropDownPicker
        items={activities.map(activity => ({ label: activity, value: activity }))}
        defaultValue={activityType}
        containerStyle={{ height: 40, width: 200 }}
        onChangeItem={(item) => setActivityType(item.value)}
        placeholder="Select Activity Type"
      />
      <TextInput
        value={duration}
        onChangeText={setDuration}
        placeholder="Duration (minutes)"
        keyboardType="numeric"
      />
      <Button title="Select Date" onPress={() => setShowDatePicker(true)} />
      {showDatePicker && (
        <DateTimePicker
          testID="dateTimePicker"
          value={date}
          mode="date"
          is24Hour={true}
          display="default"
          onChange={onChangeDate}
        />
      )}
      <Button title="Save" onPress={handleSave} />
      <Button title="Cancel" onPress={handleCancel} />
    </View>
  );
};

export default AddActivityScreen;