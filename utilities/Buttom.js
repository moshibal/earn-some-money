import { TouchableOpacity, StyleSheet, Text } from "react-native";
import React from "react";

const CustomButtom = ({ text, color = "#fc5c65" }) => {
  return (
    <TouchableOpacity style={[styles.button, { backgroundColor: color }]}>
      <Text style={[styles.text]}>{text}</Text>
    </TouchableOpacity>
  );
};
const styles = StyleSheet.create({
  button: {
    borderColor: "#000",
    marginBottom: 10,
    backgroundColor: "tomato",
    borderRadius: 25,
    padding: 15,
    width: "100%",
    justifyContent: "center",
    alignItems: "center",
  },
  text: { color: "#fff", textTransform: "uppercase" },
});
export default CustomButtom;
