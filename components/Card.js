import { Image, StyleSheet, Text, View } from "react-native";
import React from "react";

const Card = ({ image, title, subTitle }) => {
  return (
    <View style={styles.cardContainer}>
      <Image
        source={image}
        style={{ width: "100%", height: 200, borderTopLeftRadius: 20 }}
        resizeMode="contain"
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

    paddingTop: 30,
    marginTop: 30,
  },
  title: {
    textAlign: "center",
    textTransform: "uppercase",
    fontVariant: "red",
  },
});
