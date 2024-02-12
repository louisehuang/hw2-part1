import React, { useContext, useState } from 'react';
import { View, Button, Alert,TextInput,  StyleSheet,Text,TouchableOpacity } from 'react-native';
import DropDownPicker from 'react-native-dropdown-picker';
import DateTimePicker from '@react-native-community/datetimepicker';
import { ActivityContext } from '../components/ActivityList';
import { COMMON_STYLES, COLORS, LOCATION } from '../components/styles';
import CustomButton from '../components/CustomButton';

const AddActivityScreen = ({ navigation }) => {
  const {updateActivities } = useContext(ActivityContext);
  const [activityType, setActivityType] = useState('');
  const [duration, setDuration] = useState('');
  const [date, setDate] = useState(null);
  const [open, setOpen] = useState(false);
  const [showDatePicker, setShowDatePicker] = useState(false);
  

  const activityOptions = [
    { key: '1', label: 'Walking', value: 'Walking' },
    { key: '2', label: 'Running', value: 'Running' },
    { key: '3', label: 'Swimming', value: 'Swimming' },
    { key: '4', label: 'Weights', value: 'Weights' },
    { key: '5', label: 'Yoga', value: 'Yoga' },
    { key: '6', label: 'Cycling', value: 'Cycling' },
    { key: '7', label: 'Hiking', value: 'Hiking' },
  ];

  const handleSave = () => {
    // Validate user's entries
    if (!activityType || !duration || isNaN(duration) || duration <= 0 || !date) {
      Alert.alert('Invalid Input', 'Please check you input values.');
      return;
    }

    // Save the new entry
    const newActivity = {
      id: Date.now(),
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

  const onChangeDate = (event, selectedDate) => {
    const currentDate = selectedDate || date;
    setShowDatePicker(false);
    setDate(currentDate);
  };

  const formatDate = (date) => {
    if (!date) return '';
    const options = { weekday: 'short', month: 'short', day: 'numeric', year: 'numeric' };
    return date ? date.toLocaleDateString(undefined, options) : '';
  };

  return (
    <View style={COMMON_STYLES.container}>
      
      <Text style={COMMON_STYLES.labelText}>Activity *</Text>
      <DropDownPicker
        open={open}
        value={activityType}
        items={activityOptions}
        setOpen={setOpen}
        setValue={setActivityType}
        placeholder="Select An Activity"
        style={{ backgroundColor: COLORS.background }}
      />
      <Text style={COMMON_STYLES.labelText}>Duration *</Text>
      <View style={COMMON_STYLES.inputContainer}>
        
      <TextInput style ={COMMON_STYLES.inputText}
        value={duration}
        onChangeText={setDuration}
        keyboardType="numeric"
      />
      </View>

      <Text style={COMMON_STYLES.labelText}>Date *</Text>
      <View style={COMMON_STYLES.inputContainer}>
        <TouchableOpacity onPress={() => setShowDatePicker(true)}>
          <View style={styles.dateInput}>
            <Text style={COMMON_STYLES.inputText}>{formatDate(date)}</Text>
          </View>
        </TouchableOpacity>  
      </View>    

        {showDatePicker && (
          <DateTimePicker
            testID="dateTimePicker"
            value={date || new Date()}
            mode="date"
            is24Hour={true}
            display="inline"
            onChange={onChangeDate}
            style={COMMON_STYLES.labelText}
          />
        )}

        <View style={COMMON_STYLES.buttonsContainer}>
          <View style={COMMON_STYLES.buttonView}>
            <CustomButton title="Cancel" onPress={handleCancel} />
        </View>
          <View style={COMMON_STYLES.buttonView}></View>
            <Button title="Save" onPress={handleSave} color={ COLORS.text}/>
      </View>
    </View>  
  );
};

const styles = StyleSheet.create({

  input: {
    borderBottomColor: COLORS.test,
    fontSize: 20,
    color: COLORS.header,
    paddingVertical: 5,
  },
  errorText: {
    color: COLORS.grey,
    fontSize: 16,
    marginTop: 5,
  },
  
});

export default AddActivityScreen;