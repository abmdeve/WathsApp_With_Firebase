import { StyleSheet, Text, View, Image } from "react-native";
import React from "react";
import { COLORS } from "../../../configs/Colors";
import { ImageSourcePropType } from "react-native";

export interface ItemContactProps {
  image: ImageSourcePropType | any;
  name: string;
  description: string;
}

const ItemContact = ({ image, name, description }: ItemContactProps) => {
  return (
    <View style={styles.container}>
      <View style={styles.contactContainer}>
        <Image style={styles.imgStyle} source={image} />
        <View>
          <Text style={styles.username}>{name}</Text>
          <Text style={styles.description}>{description}</Text>
        </View>
      </View>
    </View>
  );
};

export default ItemContact;

const styles = StyleSheet.create({
  container: {
    backgroundColor: COLORS.primaryColor,
    padding: 13,
  },
  contactContainer: {
    flexDirection: "row",
    alignItems: "center",
    // paddingVertical: 12,
  },
  imgStyle: {
    height: 40,
    width: 40,
    borderRadius: 50,
  },
  username: {
    fontSize: 16,
    color: COLORS.textColor,
    marginLeft: 15,
  },
  description: {
    fontSize: 12,
    color: COLORS.textGrey,
    marginTop: 2,
    marginLeft: 15,
  },
});
