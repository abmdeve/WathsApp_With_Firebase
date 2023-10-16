import { StyleSheet, Text, View, Modal, Image } from "react-native";
import React, { Dispatch, SetStateAction } from "react";
import { COLORS } from "../configs/Colors";
import VectorIcon from "../components/VectorIcon";
import ProgressBar from "./ProgressBar";
import { ITEM_STATUS } from "./types";

export interface FullModalProps {
  isVisible: boolean;
  setIsVisible: Dispatch<SetStateAction<boolean>>;
  item: ITEM_STATUS;
  onPress?: () => void;
  setTimeUp: () => void;
}

const FullModal = ({
  isVisible,
  setIsVisible,
  item,
  onPress,
  setTimeUp,
}: FullModalProps) => {
  const updateModalStatus = () => {
    // setIsVisible((prev) => ({ ...prev, [item.id]: false }));
    setIsVisible((prev) => ({ ...prev, [item.id]: false }));
  };
  return (
    <Modal
      animationType="fade"
      visible={isVisible}
      onRequestClose={updateModalStatus}
    >
      <View style={styles.container}>
        <ProgressBar setTimeUp={setTimeUp} />
        <View style={styles.topContainer}>
          <View style={styles.profileSection}>
            <VectorIcon
              name={"arrow-back"}
              size={24}
              color={COLORS.white}
              type="Ionicons"
              //   onPress={onPress}
              onPress={() =>
                setIsVisible((prev) => ({ ...prev, [item.id]: false }))
              }
            />
            <Image
              source={require("../src/images/image-7.jpg")}
              style={styles.profileImg}
            />
            <Text style={styles.username}>Name User</Text>
          </View>
          <VectorIcon
            name={"dots-three-vertical"}
            size={18}
            color={COLORS.white}
            type="Entypo"
            onPress={onPress}
          />
        </View>
        <Image
          source={require("../src/images/image-3.jpg")}
          style={styles.storyImg}
        />
        <Text style={styles.storyMsg}>My Last Art</Text>
        <View style={styles.replySection}>
          <VectorIcon
            name={"chevron-small-up"}
            size={24}
            color={COLORS.white}
            type="Entypo"
            onPress={() =>
              setIsVisible((prev) => ({ ...prev, [item.id]: false }))
            }
          />
          <Text style={styles.reply}>Reply</Text>
        </View>
      </View>
    </Modal>
  );
};

export default FullModal;

const styles = StyleSheet.create({
  container: {
    backgroundColor: COLORS.primaryColor,
    height: "100%",
    justifyContent: "space-between",
  },
  topContainer: {
    flexDirection: "row",
    alignItems: "center",
    paddingVertical: 12,
    paddingHorizontal: 10,
    justifyContent: "space-between",
  },
  profileSection: {
    flexDirection: "row",
    alignItems: "center",
  },
  replySection: {
    alignItems: "center",
  },
  reply: {
    fontSize: 15,
    color: COLORS.white,
    textAlign: "center",
    marginBottom: 10,
  },
  username: {
    fontSize: 17,
    color: COLORS.white,
    marginLeft: 10,
  },
  profileImg: {
    height: 40,
    width: 40,
    borderRadius: 50,
  },
  storyImg: {
    height: "75%",
    width: "100%",
  },
  storyMsg: {
    fontSize: 17,
    color: COLORS.white,
    textAlign: "center",
  },
});
