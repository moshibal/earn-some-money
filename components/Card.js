import { Image, StyleSheet, Text, View } from "react-native";
import React from "react";

const Card = ({ image, title, subTitle }) => {
  return (
    <View style={styles.cardContainer}>
      <Image
        source={image}
        style={{ width: "100%", height: 200, borderTopLeftRadius: 20 }}
      />
      <View>
        <Text style={styles.title}>{title}</Text>
        <Text style={styles.subTitle}>{subTitle}</Text>
      </View>
    </View>
  );
};

export default Card;

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
