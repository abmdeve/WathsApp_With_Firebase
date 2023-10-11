import { StyleSheet, Text, View } from "react-native";
import React from "react";
import { NavigatorStackScreenProps } from "../../../routes/Navigator";
import ChatHeader from "../../../components/Chats/ChatHeader";

const ChatScreen = ({
  navigation,
}: NavigatorStackScreenProps<"ChatScreen">) => {
  return (
    <View>
      <ChatHeader
        name="Kunta Yannick"
        onGoBack={() => navigation.goBack()}
        onCall={() => "#"}
        onCamera={() => "#"}
        onDotVertical={() => "#"}
      />
      <Text>ChatScreen</Text>
    </View>
  );
};

export default ChatScreen;

const styles = StyleSheet.create({});
