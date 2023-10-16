import { StyleSheet, Text, View, Image } from "react-native";
import React from "react";
import Ripple from "react-native-material-ripple";
import { COLORS } from "../../../configs/Colors";
import { ImageSourcePropType } from "react-native";

interface ChatItemProps {
  image: ImageSourcePropType | any;
  name: string;
  time: string;
  lastMessage: string;
  totalUnread: number;
  onPress: (idUser: number) => void;
  idUser: number;
}

const ChatItem = ({
  image,
  name,
  time,
  lastMessage,
  totalUnread,
  onPress,
  idUser,
}: ChatItemProps) => {
  return (
    <Ripple style={styles.chatContainer} onPress={() => onPress(idUser)}>
      <Image source={image} style={styles.image} />
      <View style={styles.chatContent}>
        <View style={styles.chatHeader}>
          <Text style={styles.chatName}>{name} </Text>
          <Text style={styles.chatTime}>{time} </Text>
        </View>
        <View style={styles.messages}>
          <Text numberOfLines={1} style={styles.chatMessage}>
            {lastMessage}
          </Text>
          {totalUnread > 0 && (
            <View style={styles.unreadContainer}>
              <Text style={styles.totalUnread}>{totalUnread}</Text>
            </View>
          )}
        </View>
      </View>
    </Ripple>
  );
};

export default ChatItem;

const styles = StyleSheet.create({
  chatContainer: {
    flexDirection: "row",
    marginHorizontal: 16,
  },
  image: {
    height: 50,
    width: 50,
    borderRadius: 25,
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: COLORS.greenAppDark,
  },
  chatContent: {
    flex: 5,
    borderBottomWidth: 0,
    marginLeft: 16,
    paddingBottom: 16,
    marginBottom: 13,
  },
  chatHeader: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    marginBottom: 2,
    marginTop: 4,
  },
  chatName: {
    fontSize: 16,
    fontWeight: "bold",
  },
  chatTime: {
    color: COLORS.gray,
  },
  messages: {
    flexDirection: "row",
    justifyContent: "space-between",
  },
  chatMessage: {
    fontSize: 14,
    color: COLORS.gray,
    width: "90%",
  },
  unreadContainer: {
    height: 20,
    width: 25,
    borderRadius: 20,
    backgroundColor: COLORS.greenAppLight,
    alignItems: "center",
    justifyContent: "center",
  },
  totalUnread: {
    fontSize: 10,
    color: COLORS.white,
    fontWeight: "600",
  },
});
