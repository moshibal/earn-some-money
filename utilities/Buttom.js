import { Button, View, TouchableOpacity } from "react-native";
import React from "react";

const CustomButtom = ({ text, color }) => {
  return (
    <TouchableOpacity
      style={{
        borderColor: "#000",
        backgroundColor: `${color}`,
        borderRadius: 20,
        width: "100%",
      }}
    >
      <Button title={text} color="#fff" />
    </TouchableOpacity>
  );
};

export default CustomButtom;
