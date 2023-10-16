import { StyleSheet, Text, View, Image, ScrollView } from "react-native";
import React from "react";
import { COLORS } from "../../../configs/Colors";
import { VIEWED_STATUS_DATA } from "../../../data/viewedStatus";

const ViewedStatus = () => {
  return (
    <View>
      <Text style={styles.recentUpdate}>Viewed updates</Text>
      {/* <ScrollView> */}
        {VIEWED_STATUS_DATA.map((item) => {
          return (
            <View style={styles.story} key={item.id}>
              <View style={styles.imgStory}>
                <Image source={item.storyImg} style={styles.statusStyle} />
              </View>
              <View style={styles.statusInfo}>
                <Text style={styles.username}>{item.name}</Text>
                <Text style={styles.time}>{item.time}</Text>
              </View>
            </View>
          );
        })}
      {/* </ScrollView> */}
    </View>
  );
};

export default ViewedStatus;

const styles = StyleSheet.create({
  statusStyle: {
    height: 42,
    width: 42,
    borderRadius: 50,
  },
  recentUpdate: {
    fontSize: 15,
    color: COLORS.textGrey,
    paddingBottom: 10,
    paddingTop: 20,
  },
  imgStory: {
    height: 50,
    width: 50,
    backgroundColor: COLORS.background,
    borderColor: COLORS.tertiary,
    borderWidth: 2,
    borderRadius: 50,
    justifyContent: "center",
    alignItems: "center",
  },
  username: {
    fontSize: 13,
    color: COLORS.white,
    fontWeight: "500",
  },
  time: {
    fontSize: 15,
    color: COLORS.textGrey,
    marginTop: 3,
  },
  story: {
    flexDirection: "row",
    marginTop: 15,
  },
  statusInfo: {
    marginLeft: 15,
  },
});
