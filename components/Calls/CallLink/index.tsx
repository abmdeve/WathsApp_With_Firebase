import { StyleSheet, Text, View } from "react-native";
import React from "react";
import VectorIcon from "../../VectorIcon";
import { COLORS } from "../../../configs/Colors";

const CallLink = () => {
  return (
    <View style={styles.container}>
      <View style={styles.iconBg}>
        <VectorIcon
          name={"link"}
          size={20}
          color={COLORS.white}
          type="Fontisto"
        />
      </View>
      <View style={styles.linkSection}>
        <Text style={styles.callLink}>Create call link</Text>
        <Text style={styles.shareLink}>
          Share a link for your Whatsapp call
        </Text>
      </View>
    </View>
  );
};

export default CallLink;

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
  },
  iconBg: {
    backgroundColor: COLORS.tertiary,
    height: 45,
    width: 45,
    borderRadius: 50,
    justifyContent: "center",
    alignItems: "center",
  },
  callLink: {
    fontSize: 15,
    color: COLORS.white,
    fontWeight: "500",
  },
  shareLink: {
    fontSize: 13,
    color: COLORS.textGrey,
    marginTop: 3,
  },
  linkSection: {
    marginLeft: 15,
    
  },
});
