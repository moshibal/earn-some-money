import { Image, StyleSheet, Text, View } from "react-native";
import React from "react";
import { MaterialCommunityIcons } from "@expo/vector-icons";

const ImageScreen = () => {
  return (
    <View style={styles.mainContainer}>
      <View style={styles.add}>
        <MaterialCommunityIcons name="close" color="#fff" size={50} />
      </View>
      <View style={styles.close}>
        <MaterialCommunityIcons
          name="trash-can-outline"
          color="#fff"
          size={50}
        />
      </View>
      <Image
        source={require("../assets/chair.jpg")}
        style={styles.imageContainer}
        resizeMode="contain"
      />
    </View>
  );
};

export default ImageScreen;

const styles = StyleSheet.create({
  mainContainer: {
    flex: 1,
    backgroundColor: "#000",
  },
  imageContainer: { height: "100%", width: "100%" },
  add: {
    left: 30,
    top: 40,
    position: "absolute",
  },
  close: {
    right: 30,
    top: 40,
    position: "absolute",
  },
});
