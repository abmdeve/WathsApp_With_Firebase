import { StyleSheet, Text, View } from "react-native";
import React from "react";
import { COLORS } from "../../../../configs/Colors";

export interface OtherMessageViewProps {
    message: string
    time: string
}

const OtherMessageView = ({message, time}: OtherMessageViewProps) => {
  return (
    <View style={styles.otherUserContainer}>
      <View style={styles.otherUserInnerContainer}>
        <Text style={styles.message}>{message}</Text>
        <Text style={styles.time}>{time}</Text>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  otherUserContainer: {
    flexDirection: "row",
    alignItems: "center",
    marginVertical: 5,
  },
  otherUserInnerContainer: {
    flexDirection: "row",
    backgroundColor: COLORS.primaryColor,
    paddingVertical: 8,
    paddingHorizontal: 15,
    borderTopRightRadius: 30,
    borderBottomRightRadius: 30,
    borderBottomLeftRadius: 20,
    alignItems: "flex-end",
  },
  message: {
    fontSize: 13,
    color: COLORS.white,
  },
  time: {
    fontSize: 9,
    color: COLORS.white,
    marginLeft: 5,
  },
});

export default OtherMessageView
