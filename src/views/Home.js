import React from "react";
import { View, Text, StyleSheet } from "react-native";
import CustomButton from "../components/customButton";

export const Home = ({ navigation }) => {
  const handleCarera1 = () => {
    navigation.navigate("Carrera 1");
  };

  const handleCarera2 = () => {
    navigation.navigate("Carrera 2");
  };

  return (
    <View style={styles.container}>
      <CustomButton title={"Carrera 1"} onPress={handleCarera1} />
      <CustomButton title={"Carrera 2"} onPress={handleCarera2} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    width: "90%",
  },
});
