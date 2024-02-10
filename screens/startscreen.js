import React, { useState, useEffect } from "react";
import {
  Button,
  StyleSheet,
  Text,
  TextInput,
  View,
  SafeAreaView,
  TouchableOpacity,
  Keyboard,
} from "react-native";
import CustomButton from "../components/CustomButton";
import { COMMON_STYLES, COLORS, LOCATION } from '../components/styles';

export default function StartScreen({ navigation }) {
  const [email, setEmail] = useState('');
  const [phoneNumber, setPhoneNumber] = useState('');
  const [isValidEmail, setIsValidEmail] = useState(true);
  const [isValidPhoneNumber, setIsValidPhoneNumber] = useState(true);
  const [isStartButtonDisabled, setIsStartButtonDisabled] = useState(true);
  const [isStartButtonClicked, setIsStartButtonClicked] = useState(false);

  useEffect(() => {
    setIsStartButtonDisabled(!(email.trim() !== '' || phoneNumber.trim() !== ''));
  }, [email, phoneNumber]);

  function checkEmailValidity() {
    // Use a regular expression to check for a valid email format
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    setIsValidEmail(emailRegex.test(email));
  }

  function checkPhoneNumberValidity() {
    // Use a regular expression to check for a valid phone number (10 digits, no letters)
    const phoneNumberRegex = /^\d{10}$/;
    setIsValidPhoneNumber(phoneNumberRegex.test(phoneNumber));
  }

  function handleReset() {
    setEmail('');
    setPhoneNumber('');
    setIsValidEmail(true);
    setIsValidPhoneNumber(true);
    setIsStartButtonDisabled(true);
    setIsStartButtonClicked(false); 
  }

  function handleStart() {
    // Check if both email and phone number are valid and the button is clicked
    if (isValidEmail && isValidPhoneNumber && isStartButtonClicked) {
      navigation.navigate('Main'); // Navigate to the main page
    } else {
      // Show error messages for email and phone number
      checkEmailValidity();
      checkPhoneNumberValidity();
      // Set the button as clicked
      setIsStartButtonClicked(true);
    }
  }
  useEffect(() => {
    if (isValidEmail && isValidPhoneNumber && isStartButtonClicked) {
      navigation.navigate('Main');
    }
  }, [isValidEmail, isValidPhoneNumber, isStartButtonClicked]);


  return (
    <SafeAreaView style={[styles.container, { backgroundColor: COLORS.background}]}>
      <TouchableOpacity activeOpacity={1} onPress={() => Keyboard.dismiss()} style={styles.innerContainer}>
        <Text style={styles.labelText}>Email Address:</Text>
        <View style={styles.inputContainer}>
          <TextInput
            style={[styles.input, !isValidEmail && styles.invalidInput]}
            value={email}
            onChangeText={(text) => setEmail(text)}
            onBlur={checkEmailValidity}
          />
        </View>
        {isStartButtonClicked &&!isValidEmail && <Text style={styles.errorText}>Please Enter a Valid Email Address</Text>}

        <Text style={styles.labelText}>Phone Number:</Text>
        <View style = {styles.inputContainer} >
          <TextInput
            style={[ styles.input, !isValidPhoneNumber && styles.invalidInput]}
            value={phoneNumber}
            keyboardType="phone-pad"
            onChangeText={(text) => setPhoneNumber(text)}
            onBlur={checkPhoneNumberValidity}
          />
        </View>
        {isStartButtonClicked && !isValidPhoneNumber && <Text style={styles.errorText}>Please Enter a Valid Phone Number</Text>}

        <View style={styles.buttonsContainer}>
          <View style={styles.buttonView}>
            <CustomButton title="Reset" onPress={handleReset} />
          </View>
          <View style={styles.buttonView}>
            <Button title="Start" onPress={handleStart} disabled={isStartButtonDisabled} />
          </View>
        </View>
      </TouchableOpacity>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    
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
    margin: 10,
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
