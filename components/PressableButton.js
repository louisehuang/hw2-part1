import { Pressable, StyleSheet } from "react-native";
import React from "react";
import { COLORS, LOCATION } from '../components/styles';

export default function PressableButton({
  customStyle,
  onPressFunction,
  children,
  isDisabled,
}) {
  return (
    <Pressable
      onPress={onPressFunction}
      style={({ pressed }) => [
        styles.defaultStyle,
        customStyle,
        isDisabled && styles.disabled,
        pressed && styles.pressed,
      ]}
      android_ripple={{ color: "rgba(0, 0, 0, 0.2)"}}
      disabled={isDisabled}
    >
      {children}
    </Pressable>
  );
}

const styles = StyleSheet.create({
    defaultStyle: {
      borderRadius: 5,
      padding: 10,
      backgroundColor: "#f0f0f0",
    },
    pressed: {
      opacity: 0.5,
    },
    disabled:{
      opacity: 0.5,
      backgroundColor:COLORS.grey,
    },
  });