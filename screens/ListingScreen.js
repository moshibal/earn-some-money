import { StyleSheet, Text, View, Image } from "react-native";
import React from "react";

import ListItem from "../components/ListItem";

const ListingScreen = ({ title, subTitle }) => {
  const image = require("../assets/jacket.jpg");
  return (
    <View style={styles.cardContainer}>
      <Image
        source={image}
        style={{ width: "100%", height: 200, borderTopLeftRadius: 20 }}
      />
      <View>
        <Text style={styles.title}>{title}</Text>
        <Text style={styles.subTitle}>{subTitle}</Text>
        <View style={{ marginVertical: 50 }}>
          <ListItem
            title="Bishal"
            subTitle="5 Listing"
            image={require("../assets/mosh.jpg")}
          />
        </View>
      </View>
    </View>
  );
};

export default ListingScreen;

const styles = StyleSheet.create({
  cardContainer: {
    backgroundColor: "#f8f4f4",
    borderRadius: 15,
    padding: 15,
    marginTop: 30,
  },
  title: {
    textTransform: "uppercase",
    fontSize: 20,
  },
  subTitle: {
    color: "#4ecdc4",
    fontSize: 15,
  },
});
