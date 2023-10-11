import { StyleSheet, Text, View } from "react-native";
import React from "react";
import {
  MaterialCommunityIcons,
  MaterialIcons,
  AntDesign,
  Entypo,
  EvilIcons,
  Feather,
  FontAwesome,
  FontAwesome5,
  Fontisto,
  Foundation,
  Ionicons,
  Octicons,
  SimpleLineIcons,
  Zocial,
} from "@expo/vector-icons";
import Ripple from "react-native-material-ripple";

export interface VectorIconProps {
  name: any;
  style?: any;
  color?: string;
  size: number;
  onPress?: () => void;
  type: string;
}

const VectorIcon = ({
  style,
  name,
  size,
  color,
  onPress,
  type,
}: VectorIconProps) => {
  return (
    <Ripple style={style} onPress={onPress}>
      {type === "MaterialCommunityIcons" ? (
        <MaterialCommunityIcons name={name} size={size} color={color} />
      ) : type === "MaterialIcons" ? (
        <MaterialIcons name={name} size={size} color={color} />
      ) : type === "AntDesign" ? (
        <AntDesign name={name} size={size} color={color} />
      ) : type === "Entypo" ? (
        <Entypo name={name} size={size} color={color} />
      ) : type === "EvilIcons" ? (
        <EvilIcons name={name} size={size} color={color} />
      ) : type === "Feather" ? (
        <Feather name={name} size={size} color={color} />
      ) : type === "FontAwesome" ? (
        <FontAwesome name={name} size={size} color={color} />
      ) : type === "FontAwesome5" ? (
        <FontAwesome5 name={name} size={size} color={color} />
      ) : type === "Fontisto" ? (
        <Fontisto name={name} size={size} color={color} />
      ) : type === "Foundation" ? (
        <Foundation name={name} size={size} color={color} />
      ) : type === "Ionicons" ? (
        <Ionicons name={name} size={size} color={color} />
      ) : type === "Octicons" ? (
        <Octicons name={name} size={size} color={color} />
      ) : type === "SimpleLineIcons" ? (
        <SimpleLineIcons name={name} size={size} color={color} />
      ) : (
        <Zocial name={name} size={size} color={color} />
      )}
    </Ripple>
  );
};

export default VectorIcon;

const styles = StyleSheet.create({});
