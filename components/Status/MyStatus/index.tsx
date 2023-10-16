import { StyleSheet, Text, View, Image } from "react-native";
import React from "react";
import { COLORS } from "../../../configs/Colors";
import VectorIcon from "../../VectorIcon";

const MyStatus = () => {
  return (
    <View style={styles.container}>
      <Image
        source={require("../../../src/images/image-1.jpg")}
        style={styles.profile}
      />
      <View style={styles.iconBg}>
        <VectorIcon
          name={"pluscircle"}
          type="AntDesign"
          size={20}
          color={COLORS.tertiary}
        />
      </View>
      <View style={styles.statusContainer}>
        <Text style={styles.myStatus}>MyStatus</Text>
        <Text style={styles.addStatus}>Tap to add status update</Text>
      </View>
    </View>
  );
};

export default MyStatus;

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    
  },
  profile: {
    borderRadius: 50,
    height: 50,
    width: 50,
    position: "relative",
  },
  myStatus: {
    fontSize: 15,
    fontWeight: "500",
    color: COLORS.white,
  },
  addStatus: {
    fontSize: 13,
    color: COLORS.textGrey,
    marginTop: 3,
  },
  statusContainer: {
    marginLeft: 15,
  },
  iconBg: {
    backgroundColor: COLORS.white,
    height: 20,
    width: 20,
    borderRadius: 50,
    position: "absolute",
    bottom: 0,
    left: 30,
    
  },
});
