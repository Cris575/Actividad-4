import React from "react";
import { View, StyleSheet, Image } from "react-native";
import CustomTextInput from "../../components/InputField";
import CustomButton from "../../components/customButton";

const Login = ({ navigation }) => {
  const handleLogin = () => {
    navigation.navigate("Home");
  };

  return (
    <View style={styles.container}>
      <Image style={styles.image} source={require("../../../assets/logo-appescolar1.jpeg")} />
      <CustomTextInput placeholder={"Usuarios"} />
      <CustomTextInput placeholder={"Contraseña"} />
      <CustomButton title={"Login"} onPress={handleLogin} />
    </View>
  );
};
const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "#f0f0f0",
    padding: 0,
  },
  image: {
    backgroundColor: "#ffffff", // Ajusta este color al de tu logo
    width: 100,
    height: 100,
    borderRadius: 50,
    marginBottom: 20,
  },
});

export default Login;
