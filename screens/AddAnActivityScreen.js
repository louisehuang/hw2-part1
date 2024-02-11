import React, { useContext, useState } from 'react';
import { View, Button, Alert,TextInput,  StyleSheet,Text,TouchableOpacity } from 'react-native';
import DropDownPicker from 'react-native-dropdown-picker';
import DateTimePicker from '@react-native-community/datetimepicker';
import { ActivityContext } from '../components/ActivityContext';
import { COMMON_STYLES, COLORS, LOCATION } from '../components/styles';
import CustomButton from '../components/CustomButton';

const AddActivityScreen = ({ navigation }) => {
  const { activities, updateActivities } = useContext(ActivityContext);
  const [activityType, setActivityType] = useState('');
  const [duration, setDuration] = useState('');
  const [date, setDate] = useState(new Date());
  const [open, setOpen] = useState(false);
  const [showDatePicker, setShowDatePicker] = useState(false);
  

  const activityOptions = [
    { label: 'Walking', value: 'Walking' },
    { label: 'Running', value: 'Running' },
    { label: 'Swimming', value: 'Swimming' },
    { label: 'Weights', value: 'Weights' },
    { label: 'Yoga', value: 'Yoga' },
    { label: 'Cycling', value: 'Cycling' },
    { label: 'Hiking', value: 'Hiking' },
  ];

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

    updateActivities(newActivity);

    navigation.goBack();
  };

  const handleCancel = () => {
    // Navigate back to the previous screen
    navigation.goBack();
  };



  
  //need to edit, since the date of today is default
  const onChangeDate = (event, selectedDate) => {
    const currentDate = selectedDate || date;
    setShowDatePicker(false);
    setDate(currentDate);
  };

  const getWeekDate = (date) => {
    const weekDay = ['Sun', 'Mon', 'Tue', 'Wed', 'Thur', 'Fri', 'Sat'];
    return weekDay[date.getDay()];
  };

  return (
    <View style={styles.container}>
      <Text style={styles.labelText}>Activity *</Text>
      <DropDownPicker
        open={open}
        value={activityType}
        items={activityOptions}
        setOpen={setOpen}
        setValue={setActivityType}
        placeholder="Select Activity Type"
        
      />
      <Text style={styles.labelText}>Duration *</Text>
      <View style={styles.inputContainer}>
        
      <TextInput
        value={duration}
        onChangeText={setDuration}
        keyboardType="numeric"
      />
      </View>

      <Text style={styles.labelText}>Date *</Text>
      <View style={styles.inputContainer}>
        <TouchableOpacity onPress={() => setShowDatePicker(true)}>
          <View style={styles.dateInput}>
            <Text>{getWeekDate(date)} {date.toLocaleDateString()}</Text>
          </View>
        </TouchableOpacity>  
      </View>    

        {showDatePicker && (
          <DateTimePicker
            testID="dateTimePicker"
            value={date}
            mode="date"
            is24Hour={true}
            display="inline"
            onChange={onChangeDate}
          />
        )}

        <View style={styles.buttonsContainer}>
          <View style={styles.buttonView}>
          
        <CustomButton title="Save" onPress={handleSave} />
        </View>
          <View style={styles.buttonView}></View>
          <Button title="Cancel" onPress={handleCancel} />
      </View>
    </View>  
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    paddingHorizontal: 20,
  },
  buttonView: {
    width: "35%",
    margin: 5,
  },
  buttonsContainer: { flexDirection: "row" },
  labelText: {
    fontSize: 16,
    margin:5,
    color: COLORS.text
  },
  inputContainer: {
    marginVertical: 10,
    padding: 10,
    marginHorizontal: 5,
    borderWidth: 2,
    borderBlockColor: COLORS.text,
    borderRadius: 7
  },

  input: {
    borderBottomColor: COLORS.test,
    fontSize: 20,
    color: COLORS.header,
    paddingVertical: 5,
  },
  errorText: {
    color: 'grey',
    fontSize: 16,
    marginTop: 5,
  },
  
});

export default AddActivityScreen;