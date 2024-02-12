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
import { COMMON_STYLES, COLORS } from '../components/styles';

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
    checkEmailValidity();
    checkPhoneNumberValidity();
    setIsStartButtonClicked(true);
    // Check if both email and phone number are valid and the button is clicked
    if (isValidEmail && isValidPhoneNumber && isStartButtonClicked) {
      navigation.navigate('Main'); // Navigate to the main page
      
    }
    
  }


  return (
    <SafeAreaView style={COMMON_STYLES.container}>
      <TouchableOpacity activeOpacity={1} onPress={() => Keyboard.dismiss()} style={styles.innerContainer}>
        <Text style={COMMON_STYLES.labelText}>Email Address:</Text>
        <View style={COMMON_STYLES.inputContainer}>
          <TextInput
            style={[styles.input, !isValidEmail && (isStartButtonClicked ? styles.invalidInput : null)]}
            value={email}
            onChangeText={(text) => setEmail(text)}
            onBlur={checkEmailValidity}
          />
        </View>
        {isStartButtonClicked &&!isValidEmail && <Text style={styles.errorText}>Please Enter a Valid Email Address</Text>}

        <Text style={COMMON_STYLES.labelText}>Phone Number:</Text>
        <View style = {COMMON_STYLES.inputContainer} >
          <TextInput
            style={[ styles.input, !isValidPhoneNumber && (isStartButtonClicked ? styles.invalidInput : null)]}
            value={phoneNumber}
            keyboardType="phone-pad"
            onChangeText={(text) => setPhoneNumber(text)}
            onBlur={checkPhoneNumberValidity}
          />
        </View>
        {isStartButtonClicked && !isValidPhoneNumber && <Text style={styles.errorText}>Please Enter a Valid Phone Number</Text>}

        <View style={COMMON_STYLES.buttonsContainer}>
          <View style={COMMON_STYLES.buttonView}>
            <CustomButton title="Reset" onPress={handleReset} />
          </View>
          <View style={COMMON_STYLES.buttonView}>
            <Button title="Start"
             color={isStartButtonDisabled ? COLORS.grey : COLORS.text }  

            onPress={handleStart} disabled={isStartButtonDisabled} />
          </View>
        </View>
      </TouchableOpacity>
    </SafeAreaView>
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
    color: 'grey',
    fontSize: 16,
    marginTop: 5,
  },
});
