import React from "react";
import { View, StyleSheet, Text } from "react-native";
import { FlatList } from "react-native-gesture-handler";
import Item from "../components/item";

export const Carrera1 = () => {
  const DATA = [
    {
      materia: "Programación",
    },
    {
      materia: "Diseño Gráfico",
    },
    {
      materia: "Economía",
    },
    {
      materia: "Psicología",
    },
    {
      materia: "Inglés Avanzado",
    },
  ];

  return (
    <View>
      <Text style={styles.text}>Materias de la carrera 1</Text>
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
