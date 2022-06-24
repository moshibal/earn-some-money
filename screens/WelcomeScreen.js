import { StyleSheet, Text, View, Image, ImageBackground } from "react-native";
import React from "react";
import CustomButtom from "../utilities/Buttom";

const WelcomeScreen = () => {
  return (
    <ImageBackground
      blurRadius={4}
      source={require(".././assets/background.jpg")}
      style={styles.background}
    >
      <View style={styles.logoContainer}>
        <Image
          source={require("../assets/logo-red.png")}
          style={{ height: 100, width: 100 }}
        />
        <Text style={styles.tagline}>Sell the Items, You need no more..</Text>
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
    paddingHorizontal: 15,
  },
  logoContainer: {
    position: "absolute",
    top: 60,
    alignItems: "center",
  },
  tagline: {
    fontSize: 25,
    fontWeight: "600",
  },
});
