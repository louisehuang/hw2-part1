import React, { useEffect,useState } from "react";
import { View, Text,TouchableOpacity} from 'react-native';
import { COMMON_STYLES } from './styles';
import DateTimePicker from "@react-native-community/datetimepicker";

const DatePicker= ({  editMode, activityDate, onDateChange }) => {
  const [date, setDate] = useState(null);
  const [showDatePicker, setShowDatePicker] = useState(false);


  useEffect(() => {
    if (editMode && activityDate) {
      // set the date to activityDate
      setDate(activityDate);
    }
  }, [editMode,activityDate]);


  const onChangeDate = (event, selectedDate) => {
      const currentDate = selectedDate || date || new Date();
      setShowDatePicker(false);;
      //display changed data on addanactivity
      setDate(currentDate);
      //display changed data on editMode
      onDateChange(currentDate);
      
  
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
      <View>
      <Text style={COMMON_STYLES.labelText}>Date *</Text>
      <View style={COMMON_STYLES.inputContainer}>
          <TouchableOpacity onPress={toggleDatePicker}>
          <View>
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
      </View>
    );
  };
  export default DatePicker;
  
      

    





    




