import { StyleSheet, Text, View, Image } from "react-native";
import React from "react";

const ListItem = ({ image, title, subTitle }) => {
  return (
    <View style={styles.listContainer}>
      <Image source={image} style={styles.image} />
      <View>
        <Text>{title}</Text>
        <Text>{subTitle}</Text>
      </View>
    </View>
  );
};

export default ListItem;

const styles = StyleSheet.create({
  listContainer: { flexDirection: "row" },
  image: { width: 70, height: 70, borderRadius: 35, marginHorizontal: 15 },
});
