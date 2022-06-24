import { StyleSheet, Text, View } from "react-native";
import React from "react";
import Card from "../components/Card";

const ListingScreen = () => {
  return (
    <View>
      <Card
        title="Red jacket for sell"
        subTitle="$100"
        image={require("../assets/jacket.jpg")}
      />
    </View>
  );
};

export default ListingScreen;

const styles = StyleSheet.create({});
