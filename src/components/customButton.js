import React from "react";
import { Button, StyleSheet } from "react-native";

const customButton = ({ onPress, title }) => {
  return <Button style={styles.b} title={title} onPress={onPress} />;
};

const styles = StyleSheet.create({
  b: {
    width: 100,
    backgroundColor: "red",
  },
});

export default customButton;
