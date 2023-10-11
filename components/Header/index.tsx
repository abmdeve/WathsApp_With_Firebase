import { StyleSheet, Text, View } from "react-native";
import React from "react";
import Ripple from "react-native-material-ripple";
import { Feather, Fontisto, MaterialCommunityIcons } from "@expo/vector-icons";
import { COLORS } from "../../configs/Colors";
import VectorIcon from "../VectorIcon";

export interface HeaderProps {
  onPressSearch?: () => void;
  onPressCamera?: () => void;
  onPressDotVertical?: () => void;
}

const Header = ({
  onPressCamera,
  onPressDotVertical,
  onPressSearch,
}: HeaderProps) => {
  return (
    <View style={styles.container}>
      <View style={styles.headerContainer}>
        <Text style={styles.headerText}>WhatsApp</Text>
        <View style={styles.iconContainer}>
          <Ripple onPress={onPressCamera}>
            <VectorIcon
              style={styles.icon}
              name={"camera"}
              size={20}
              color={COLORS.white}
              type={"Feather"}
            />
          </Ripple>
          <Ripple onPress={onPressSearch}>
            <VectorIcon
              style={styles.icon}
              name={"search"}
              size={20}
              color={COLORS.white}
              type={"Fontisto"}
            />
          </Ripple>
          <Ripple onPress={onPressDotVertical}>
            <VectorIcon
              style={styles.icon}
              name={"dots-vertical"}
              size={20}
              color={COLORS.white}
              type={"MaterialCommunityIcons"}
            />
          </Ripple>
        </View>
      </View>
    </View>
  );
};

export default Header;

const styles = StyleSheet.create({
  container: {
    backgroundColor: COLORS.greenApp,
    paddingTop: 80,
    paddingBottom: 8,
  },
  headerContainer: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    marginHorizontal: 16,
  },
  headerText: {
    fontSize: 20,
    color: "white",
    fontWeight: "500",
  },
  iconContainer: {
    flexDirection: "row",
    alignItems: "center",
  },
  icon: {
    marginLeft: 20,
  },
});
