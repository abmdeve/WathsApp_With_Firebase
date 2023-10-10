import React from "react";
import { StyleSheet } from "react-native";
import {
  createMaterialTopTabNavigator,
  MaterialTopTabScreenProps,
} from "@react-navigation/material-top-tabs";
import { MaterialCommunityIcons } from "@expo/vector-icons";
import { COLORS } from "../configs/Colors";
import Community from "../screens/Community";
import Chat from "../screens/Chat";
import Status from "../screens/Status";
import Calls from "../screens/Calls";
import { CompositeScreenProps } from "@react-navigation/native";
import { NavigatorStackScreenProps } from "./Navigator";

export type TabTopStackParamList = {
  Calls: undefined;
  Chat: undefined;
  Community: undefined;
  Status: undefined;
};

const Tab = createMaterialTopTabNavigator<TabTopStackParamList>();

export type TabsStackScreenProps<T extends keyof TabTopStackParamList> =
  CompositeScreenProps<
    MaterialTopTabScreenProps<TabTopStackParamList, T>,
    NavigatorStackScreenProps<"TabsStack">
  >;

const TopTabBar = () => {
  return (
    <Tab.Navigator
      initialRouteName="Chat"
      screenOptions={{
        tabBarActiveTintColor: COLORS.white,
        tabBarIndicatorStyle: {
          backgroundColor: COLORS.white,
        },
        tabBarLabelStyle: {
          fontWeight: "bold",
        },
        tabBarStyle: {
          backgroundColor: COLORS.greenApp,
        },
      }}
    >
      <Tab.Screen
        options={{
          tabBarIcon: ({ color }) => {
            return (
              <MaterialCommunityIcons
                name="account-group-outline"
                size={24}
                color={color}
              />
            );
          },
          tabBarLabelStyle: styles.tabBarStyleLabel,
        }}
        name="Community"
        component={Community}
      />
      <Tab.Screen name="Chat" component={Chat} />
      <Tab.Screen name="Status" component={Status} />
      <Tab.Screen name="Calls" component={Calls} />
    </Tab.Navigator>
  );
};

export default TopTabBar;

const styles = StyleSheet.create({
  container: {},
  tabBarStyleLabel: {
    display: "none",
  },
});
