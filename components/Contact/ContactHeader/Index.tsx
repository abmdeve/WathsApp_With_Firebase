import { StyleSheet, Text, View } from "react-native";
import React from "react";
import VectorIcon from "../../VectorIcon";
import { COLORS } from "../../../configs/Colors";

export interface ContactHeaderProps {
  onGoback: () => void;
  onDotsVertical: () => void;
  onSearch: () => void;
  numberContact: number;
}

const ContactHeader = ({
  onGoback,
  onDotsVertical,
  onSearch,
  numberContact,
}: ContactHeaderProps) => {
  return (
    <View style={styles.container}>
      <View style={styles.headerContainer}>
        <VectorIcon
          name={"arrow-back"}
          size={24}
          color={COLORS.white}
          type="Ionicons"
          onPress={onGoback}
        />
        <View>
          <Text style={styles.selectContact}>Select Contact</Text>
          <Text style={styles.count}>{numberContact} Contacts</Text>
        </View>
      </View>
      <View style={styles.headerContainer}>
        <VectorIcon
          style={styles.iconStyle}
          name={"search"}
          size={24}
          color={COLORS.white}
          type="Ionicons"
          onPress={onSearch}
        />
        <VectorIcon
          style={styles.iconStyle}
          name={"dots-three-vertical"}
          size={24}
          color={COLORS.white}
          type="Entypo"
          onPress={onDotsVertical}
        />
      </View>
    </View>
  );
};

export default ContactHeader;

const styles = StyleSheet.create({
  container: {
    backgroundColor: COLORS.primaryColor,
    paddingVertical: 15,
    paddingHorizontal: 10,
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
  },
  headerContainer: {
    flexDirection: "row",
    alignItems: "center",
  },
  selectContact: {
    fontSize: 17,
    color: COLORS.white,
    marginLeft: 20,
  },
  count: {
    fontSize: 12,
    color: COLORS.white,
    marginLeft: 20,
    marginTop: 2,
  },
  iconStyle: {
    marginHorizontal: 25,
  },
});
