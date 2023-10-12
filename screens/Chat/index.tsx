import { StyleSheet, View, FlatList } from "react-native";
import React, { useEffect, useState } from "react";
import { TabsStackScreenProps } from "../../routes/TopTabBar";
import { CHAT_DATA } from "../../data/chatData";
import ChatItem from "../../components/Chats/ChatItem";
import { CHAT_DATA_TYPE } from "../../utils/types";
import FloatingActionButton from "../../components/FloatingActionButton";
import { COLORS } from "../../configs/Colors";

const Chat = ({ navigation }: TabsStackScreenProps<"Chat">) => {
  const [chatData, setchatData] = useState<Array<CHAT_DATA_TYPE>>([
    {
      id: 0,
      image: "",
      name: "",
      time: "",
      totalUnread: 0,
      lastMessage: "",
    },
  ]);
  useEffect(() => {
    setchatData(CHAT_DATA);
  }, []);

  return (
    <View style={styles.container}>
      <FlatList
        data={chatData}
        keyExtractor={(item) => item.id.toString()}
        renderItem={({ item }) => {
          return (
            <ChatItem
              idUser={item.id}
              key={item.id}
              image={item.image}
              name={item.name}
              time={item.time}
              lastMessage={item.lastMessage}
              totalUnread={item.totalUnread}
              onPress={(id) => {
                console.log("id", id);
                navigation.navigate("ChatScreen", { id: id });
              }}
            />
          );
        }}
      />
      <FloatingActionButton
        type={"MaterialCommunityIcons"}
        name={"android-messages"}
        size={24}
        color={COLORS.white}
        onPress={() => "#"}
      />
    </View>
  );
};

export default Chat;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginTop: 10,
  },
});
