import React, { useEffect,useState } from "react";
import { View, Text,TouchableOpacity,StyleSheet} from 'react-native';
import { COMMON_STYLES,COLORS } from './styles';
import DateTimePicker from "@react-native-community/datetimepicker";

export default function DatePicker({ editMode, activityDate, onDateChange }) {
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
      setShowDatePicker (false);
      if (onDateChange) {
    onDateChange(currentDate);
  }
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
      </View>
    );
  }
      
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
      

    




