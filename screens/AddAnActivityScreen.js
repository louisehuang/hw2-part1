import React, { useContext, useState,useEffect } from 'react';
import { View, Alert,TextInput,  StyleSheet,Text,TouchableOpacity,Keyboard } from 'react-native';
import { SelectList } from 'react-native-dropdown-select-list'
import { database } from "../firebase-files/firebaseSetup";
import { COMMON_STYLES, COLORS } from '../components/styles';
import {addToDB, deleteFromDB,updateInDB} from "../firebase-files/firebaseHelper";
import PressableButton from '../components/PressableButton';
import { AntDesign } from "@expo/vector-icons";
import { doc, getDoc } from "firebase/firestore";
import Checkbox from "expo-checkbox";
import DropDownPicker from '../components/DropDownPicker';
import DateTimePicker from '../components/DateTimePicker'

const AddActivityScreen = ({ route,navigation }) => {
  const [activityType, setActivityType] = useState('');
  const [duration, setDuration] = useState('');
  const [date, setDate] = useState(null);
  const [special, setSpecial] = useState(false);
  const [isChecked, setChecked] = useState(false);
  const { editMode, activityToEdit } = route.params;

  useEffect(() => {
    navigation.setOptions({
      title: editMode ? "Edit" : "Add an Activity",
      headerRight: () => (
        <PressableButton
          customStyle={COMMON_STYLES.deleteButton}
          onPressFunction={handleDelete}
        >
          {editMode && <AntDesign name="delete" size={24} color="white" />}
        </PressableButton>
      ),
    });
  }, [editMode]);


  useEffect(() => {
    if (editMode) {
      const fetchActivity = async () => {
        try {
          const docRef = doc(database, "activities", activityToEdit);
          const docSnap = await getDoc(docRef);
          if (docSnap.exists()) {
            const activityData = docSnap.data();
            setActivityType(activityData.type);
            setDuration(activityData.duration.toString());
            setDate(new Date(activityData.date));
            setSpecial(activityData.special);
          } else {
            console.log("No such document!");
          }
        } catch (err) {
          console.error("Error getting document:", err);
        }
      };
      fetchActivity();
    }
  }, [editMode, activityToEdit]);
  
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


  function validateSpecial(activity) {
    if (activity.type === "Running" || activity.type === "Weights") {
      if (parseInt(activity.duration) > 60) {
        return true;
      }
    }
    return false;
  }

  const handleSave = () => {
    // Validate user's entries
    if ( !activityType ||!duration || isNaN(duration) || duration <= 0 || !date) {
      Alert.alert('Invalid Input', 'Please check you input values.');
      return;
    }else{

    }

    // Save the new entry
    const newActivity = {
      //id: editMode ? activityToEdit.id : Date.now(),
      type: activityType,
      duration: parseInt(duration),
      date:date.toDateString(),
      special: isChecked || validateSpecial({
        type: activityType,
        duration: duration,
      }),
    };

    //updateActivities(newActivity);
    //add to firebase
    addToDB(newActivity);

    navigation.goBack();
  };

  const handleDelete = () => {
    Alert.alert(
      "Delete",
      "Are you sure you want to delete this item?",
      [
        { text: "No" },
        {
          text: "Yes",
          onPress: () => {
            deleteFromDB(activityId);
            navigation.goBack();
          },
        },
      ],
      { cancelable: false }
    );
  }


  const handleCancel = () => {
    // Navigate back to the previous screen
    navigation.goBack();
  };


  // const onChangeDate = (event, selectedDate) => {
  //   const currentDate = selectedDate || date || new Date();
  //   setShowDatePicker(false);;
  //    setShowDatePicker (false);
  //   setDate(currentDate);
  // };

  // const toggleDatePicker = () => {
  //   setShowDatePicker(prevState => !prevState); // Toggle showDatePicker state
  //   if (!showDatePicker) {
  //     setDate(new Date());
  //   }
  // };


  // const formatDate = (date) => {
  //   if (!date) return '';
  //   const options = { weekday: 'short', month: 'short', day: 'numeric', year: 'numeric' };
  //   const formattedDate = date.toLocaleDateString(undefined, options);
  //   const parts = formattedDate.split(', ');
  
  //   // Join the parts without the comma
  //   return parts.join(' ');
  // };

  return (
    <View style={COMMON_STYLES.container}>
      <View style={COMMON_STYLES.addAcvityContainer}>
      <Text style={COMMON_STYLES.labelText}>Activity *</Text>
      <DropDownPicker
            editMode={editMode}
            activity={activityType}
            onChangeActivity={setActivityType}
          />
      <Text style={COMMON_STYLES.labelText}>Duration *</Text>
      <View style={COMMON_STYLES.inputContainer}>
        
      <TextInput style ={COMMON_STYLES.inputText}
        value={duration}
        onChangeText={setDuration}
        keyboardType="numeric"
      />
      </View>
      <DateTimePicker
        editMode={editMode}
        activityDate={date}
        onDateChange={setDate}
      />
      {/* <Text style={COMMON_STYLES.labelText}>Date *</Text>
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
        )} */}

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