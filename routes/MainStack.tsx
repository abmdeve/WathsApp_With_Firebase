import { StyleSheet, Text, View, StatusBar } from "react-native";
import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import Navigator from "./Navigator";
import { COLORS } from "../configs/Colors";

const MainStack = () => {
  return (
    <NavigationContainer>
      <StatusBar backgroundColor={COLORS.greenApp} barStyle="light-content" />
      <Navigator />
    </NavigationContainer>
  );
};

export default MainStack;

const styles = StyleSheet.create({});
