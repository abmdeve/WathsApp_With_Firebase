import { StyleSheet, Text, View } from "react-native";
import React from "react";
import { NavigatorScreenParams } from "@react-navigation/native";
import {
  NativeStackScreenProps,
  createNativeStackNavigator,
} from "@react-navigation/native-stack";
import TopTabBar, { TabTopStackParamList } from "./TopTabBar";
import Contacts from "../screens/Contacts";
import ChatScreen from "../screens/Chat/ChatScreen";

export type NavigatorStackParamList = {
  TabsStack: NavigatorScreenParams<TabTopStackParamList>;
  Contacts: undefined;
  ChatScreen: { id: number };
};

const Stack = createNativeStackNavigator<NavigatorStackParamList>();

export type NavigatorStackScreenProps<T extends keyof NavigatorStackParamList> =
  NativeStackScreenProps<NavigatorStackParamList, T>;

const Navigator = () => {
  return (
    <Stack.Navigator
      screenOptions={{
        headerShown: false,
      }}
    >
      <Stack.Screen name="TabsStack" component={TopTabBar} />
      <Stack.Screen name="Contacts" component={Contacts} />
      <Stack.Screen name="ChatScreen" component={ChatScreen} />
    </Stack.Navigator>
  );
};

export default Navigator;

const styles = StyleSheet.create({});
