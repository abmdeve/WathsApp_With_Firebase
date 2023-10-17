import { StyleSheet, Text, View, Image, TouchableOpacity } from "react-native";
import React, { useState } from "react";
import { COLORS } from "../../../configs/Colors";
import { RECENT_STATUS_DATA } from "../../../data/recentStatusData";
import Ripple from "react-native-material-ripple";
import FullModal from "../../../utils/FullModal";

const RecentStatus = () => {
  const [showStatusModal, setShowStatusModal] = useState(false);
  const setTimeUp = (itemId: number) => {
    setShowStatusModal((prev) => ({ ...prev, [itemId]: false }));
  };
  const vieweStatus = (itemId: number) => {
    setShowStatusModal((prev) => ({ ...prev, [itemId]: true }));
  };
  return (
    <View>
      <Text style={styles.recentUpdate}>Recent update</Text>
      {RECENT_STATUS_DATA.map((item) => {
        return (
          <>
            <TouchableOpacity
              onPress={() => vieweStatus(item.id)}
              style={styles.story}
              key={item.id}
            >
              <View style={styles.imgStory}>
                <Image
                  source={item.storyImg}
                  // source={require("../../../src/images/image-3.jpg")}
                  style={styles.statusStyle}
                />
              </View>
              <View style={styles.statusInfo}>
                <Text style={styles.username}>{item.name}</Text>
                <Text style={styles.time}>{item.time}</Text>
              </View>
            </TouchableOpacity>
            <FullModal
              isVisible={showStatusModal[item.id]}
              setIsVisible={(value) =>
                setShowStatusModal((prev) => ({ ...prev, [item.id]: value }))
              }
              item={item}
              setTimeUp={() => setTimeUp(item.id)}
            />
          </>
        );
      })}
    </View>
  );
};

export default RecentStatus;

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
