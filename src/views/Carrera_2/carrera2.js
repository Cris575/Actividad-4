import React from "react";
import { View, StyleSheet, Text } from "react-native";
import { FlatList } from "react-native-gesture-handler";
import Item from "../../components/item";

export const Carrera2 = () => {
  const DATA = [
    {
      materia: "Matemáticas",
    },
    {
      materia: "Ciencias Naturales",
    },
    {
      materia: "Lengua y Literatura",
    },
    {
      materia: "Historia",
    },
    {
      materia: "Geografía",
    },
  ];

  return (
    <View>
      <Text style={styles.text}>Materias de la carrera 2</Text>
      <FlatList data={DATA} renderItem={({ item }) => <Item title={item.materia} />} />
    </View>
  );
};

const styles = StyleSheet.create({
  text: {
    textAlign: "center",
    fontSize: 40,
    marginTop: 50,
    marginBottom: 50,
  },
});
