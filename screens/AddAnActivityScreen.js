import React, { useContext, useState,useEffect } from 'react';
import { View, Button, Alert,TextInput,  StyleSheet,Text,TouchableOpacity,Keyboard } from 'react-native';
import { SelectList } from 'react-native-dropdown-select-list'
import DateTimePicker from '@react-native-community/datetimepicker';
import { ActivityContext } from '../components/ActivityContext';
import { COMMON_STYLES, COLORS } from '../components/styles';
import PressableButton from '../components/PressableButton';
import Checkbox from "expo-checkbox";

const AddActivityScreen = ({ navigation }) => {
  const {updateActivities } = useContext(ActivityContext);
  const [activityType, setActivityType] = useState('');
  const [duration, setDuration] = useState('');
  const [date, setDate] = useState(null);
  const [showDatePicker, setShowDatePicker] = useState(false);
  
  useEffect(() => {
    //dynamically adjust the layout when the keyboard is shown or hidden
    const keyboardDidShowListener = Keyboard.addListener('keyboardDidShow', (event) => {

    });
    const keyboardDidHideListener = Keyboard.addListener('keyboardDidHide', () => {
     
    });

    return () => {
      keyboardDidShowListener.remove();
      keyboardDidHideListener.remove();
    };
  }, []);

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
    const currentDate = selectedDate || date || new Date();
    setShowDatePicker(false);;
     setShowDatePicker (false);
    setDate(currentDate);
  };

  const toggleDatePicker = () => {
    setShowDatePicker(prevState => !prevState); // Toggle showDatePicker state
    if (!showDatePicker) {
      setDate(new Date());
    }
  };


  const formatDate = (date) => {
    if (!date) return '';
    const options = { weekday: 'short', month: 'short', day: 'numeric', year: 'numeric' };
    const formattedDate = date.toLocaleDateString(undefined, options);
    const parts = formattedDate.split(', ');
  
    // Join the parts without the comma
    return parts.join(' ');
  };

  return (
    <View style={COMMON_STYLES.container}>
      <View style={COMMON_STYLES.addAcvityContainer}>
      <Text style={COMMON_STYLES.labelText}>Activity *</Text>
      <SelectList
        data={activityOptions}
        setSelected={setActivityType}
        placeholder="Select An Activity"
        defaultSelectedIndex={-1} 
        dropdownTextStyles={COMMON_STYLES.dropdownText}
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
        <TouchableOpacity onPress={toggleDatePicker}>
          <View style={styles.dateInput}>
            <Text
            style={COMMON_STYLES.inputText}>{formatDate(date)}</Text>
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

        <View >
          <Text style={styles.errorText}>
            This item is marked as special. 
            Select the checkbox if you would like to approve it.
          </Text>
          <Checkbox
            style={styles.checkbox}
            value={isChecked}
            onValueChange={setChecked}
          />
        </View>
     
        <View style={COMMON_STYLES.buttonsContainer}>
          <View style={COMMON_STYLES.buttonView}>
          <PressableButton
              customStyle={COMMON_STYLES.saveButton}
              onPressFunction={handleCancel}
            >
              <Text style={styles.buttonText}>Cancel</Text>
            </PressableButton>
        </View>
          <View style={COMMON_STYLES.buttonView}></View>
          <PressableButton
              customStyle={COMMON_STYLES.resetButton}
              onPressFunction={handleSave}
            >
              <Text style={styles.buttonText}>Save</Text>
            </PressableButton>
          
      </View>
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