import { StyleSheet, Text, View, Image, ImageBackground } from "react-native";
import React from "react";
import CustomButtom from "../utilities/Buttom";

const WelcomeScreen = () => {
  return (
    <ImageBackground
      source={require(".././assets/background.jpg")}
      style={styles.background}
    >
      <View style={styles.logoContainer}>
        <Image
          source={require("../assets/logo-red.png")}
          style={{ height: 100, width: 100 }}
        />
        <Text>Sell the Items, You need no more..</Text>
      </View>

      <CustomButtom text="LOGIN" color="#fc5c65" />
      <CustomButtom text="REGISTER" color="#4ecdc4" />
    </ImageBackground>
  );
};

export default WelcomeScreen;

const styles = StyleSheet.create({
  background: {
    flex: 1,
    justifyContent: "flex-end",
    alignItems: "center",
  },
  logoContainer: {
    position: "absolute",
    top: 60,
    alignItems: "center",
  },
  login: {
    marginBottom: 10,
  },
});
