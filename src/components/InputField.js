import React from "react";
import { View, TextInput, Image } from "react-native";
import { StyleSheet } from "react-native";

const CustomTextInput = ({ placeholder }) => {
  return <TextInput style={styles.TextInput} placeholder={placeholder} />;
};

const styles = StyleSheet.create({
  TextInput: {
    height: 50,
    width: "80%",
    margin: 10,
    borderWidth: 1,
    borderColor: "#cccccc",
    padding: 10,
    borderRadius: 5,
  },
});
export default CustomTextInput;
