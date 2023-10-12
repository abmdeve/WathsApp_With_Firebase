import { StyleSheet, Text, View } from "react-native";
import React from "react";
import VectorIcon from "../../../VectorIcon";
import { COLORS } from "../../../../configs/Colors";

export interface UserMessageViewProps {
  message: string;
  time: string;
}

const UserMessageView = ({ message, time }: UserMessageViewProps) => {
  return (
    <View style={styles.userContainer}>
      <View style={styles.userInnerContainer}>
        <Text style={styles.message}>{message}</Text>
        <Text style={styles.time}>{time}</Text>
        <VectorIcon
          style={styles.checkDouble}
          name={"check-double"}
          size={12}
          color={COLORS.blue}
          type="FontAwesome5"
        />
      </View>
    </View>
  );
};

export default UserMessageView;

const styles = StyleSheet.create({
  userContainer: {
    flexDirection: "row",
    justifyContent: "flex-end",
    marginVertical: 5,
  },
  userInnerContainer: {
    backgroundColor: COLORS.teal,
    paddingVertical: 8,
    paddingHorizontal: 15,
    borderTopLeftRadius: 30,
    borderBottomRightRadius: 20,
    borderBottomLeftRadius: 30,
    flexDirection: "row",
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
  checkDouble: {
    marginLeft: 5,
  },
});
