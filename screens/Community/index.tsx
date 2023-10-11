import { StyleSheet, Text, View, Image, TouchableOpacity } from "react-native";
import React from "react";
import { COLORS } from "../../configs/Colors";

const Community = () => {
  return (
    <View style={styles.container}>
      <Image
        style={styles.communityImg}
        source={require("../../src/images/community-img.png")}
      />
      <Text style={styles.community}>Introducing communities</Text>
      <Text style={styles.subText}>
        Easily organize your related groups and send announcements. Now, your
        communities, like neighbourhood or schools, can have their own space.{" "}
      </Text>
      <TouchableOpacity style={styles.button}>
        <Text style={styles.buttonTitle}>Start Your Community</Text>
      </TouchableOpacity>
    </View>
  );
};

export default Community;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: COLORS.background,
    alignItems: "center",
    justifyContent: "center",
  },
  communityImg: {
    height: 150,
    width: 200,
  },
  community: {
    color: COLORS.white,
    fontSize: 26,
    fontWeight: "500",
    marginTop: 40,
  },
  subText: {
    color: COLORS.textGrey,
    fontSize: 16,
    textAlign: "center",
    paddingHorizontal: 30,
    marginTop: 5,
    lineHeight: 22,
    letterSpacing: 0.6,
  },
  button: {
    backgroundColor: COLORS.tertiary,
    marginTop: 30,
    padding: 8,
    borderRadius: 30,
    width: "80%",
  },
  buttonTitle: {
    textAlign: "center",
    fontSize: 14,
    color: COLORS.background,
  },
});
