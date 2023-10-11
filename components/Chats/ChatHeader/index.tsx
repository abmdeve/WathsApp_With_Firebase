import { StyleSheet, Text, View, Image } from "react-native";
import React from "react";
import Ripple from "react-native-material-ripple";
import VectorIcon from "../../VectorIcon";
import { COLORS } from "../../../configs/Colors";

export interface ChatHeaderProps {
  name: string;
  onGoBack: () => void;
  onCamera: () => void;
  onCall: () => void;
  onDotVertical: () => void;
}

const ChatHeader = ({
  name,
  onGoBack,
  onCall,
  onCamera,
  onDotVertical,
}: ChatHeaderProps) => {
  return (
    <View style={styles.container}>
      <Ripple style={styles.innerContainer} onPress={onGoBack}>
        <VectorIcon
          name={"arrow-back"}
          type="Ionicons"
          size={24}
          color={COLORS.white}
        />
        <Image
          source={require("../../../src/images/image-7.jpg")}
          style={styles.profile}
        />
        <Text style={styles.username}>{name}</Text>
      </Ripple>
      <View style={styles.iconContainer}>
        <VectorIcon
          style={styles.icon}
          name={"videocam"}
          size={24}
          color={COLORS.white}
          type="Ionicons"
          onPress={onCamera}
        />
        <VectorIcon
          style={styles.icon}
          name={"phone-alt"}
          size={16}
          color={COLORS.white}
          type="FontAwesome5"
          onPress={onCall}
        />
        <VectorIcon
          style={styles.icon}
          name={"dots-vertical"}
          size={24}
          color={COLORS.white}
          type={"MaterialCommunityIcons"}
          onPress={onDotVertical}
        />
      </View>
    </View>
  );
};

export default ChatHeader;

const styles = StyleSheet.create({
  container: {
    backgroundColor: COLORS.greenApp,
    // backgroundColor: COLORS.primaryColor,
    padding: 12,
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
  },
  innerContainer: {
    // flex: 1,
    flexDirection: "row",
    alignItems: "center",
    // justifyContent: "space-around",
  },
  iconContainer: {
    flexDirection: "row",
    // flex: 1,
    alignItems: "center",
  },
  profile: {
    height: 40,
    width: 40,
    borderRadius: 50,
  },
  username: {
    fontSize: 17,
    color: COLORS.white,
    marginLeft: 10,
  },
  icon: {
    marginHorizontal: 10,
  },
});
