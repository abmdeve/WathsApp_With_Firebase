import { StyleSheet, Text, View } from "react-native";
import React from "react";
import { MaterialCommunityIcons } from "@expo/vector-icons";
import Ripple from "react-native-material-ripple";
import { COLORS } from "../../configs/Colors";
import VectorIcon from "../VectorIcon";

interface FloatingActionButtonProps {
  name: any;
  onPress: () => void;
  size: number;
  color: string;
  type: string;
}

const FloatingActionButton = ({
  name,
  onPress,
  size,
  color,
  type,
}: FloatingActionButtonProps) => {
  return (
    <Ripple style={styles.chatButton} onPress={onPress}>
      <VectorIcon name={name} size={size} color={color} type={type} />
    </Ripple>
  );
};

export default FloatingActionButton;

const styles = StyleSheet.create({
  chatButton: {
    position: "absolute",
    bottom: 30,
    right: 20,
    backgroundColor: COLORS.greenApp,
    width: 60,
    height: 60,
    borderRadius: 30,
    alignItems: "center",
    justifyContent: "center",
  },
});
