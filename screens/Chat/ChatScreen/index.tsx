import { ImageBackground, StyleSheet, Text, View } from "react-native";
import React, { useState } from "react";
import { NavigatorStackScreenProps } from "../../../routes/Navigator";
import ChatHeader from "../../../components/Chats/ChatHeader";
import ChatFooter from "../../../components/Chats/ChatFooter";
import { Alert } from "react-native";
import ChatMessage from "../../../components/Chats/ChatMessage";
import { MESSAGE_DATA } from "../../../data/MessageData";

const ChatScreen = ({
  navigation,
  route,
}: NavigatorStackScreenProps<"ChatScreen">) => {
  const { id } = route.params;
  const [message, setMessage] = useState("");
  const [sendEnable, setSendEnable] = useState(false);
  const onChangeText = (text: string) => {
    setMessage(text);
    setSendEnable(true);
  };
  const __onSend = () => {
    setMessage("");
    setSendEnable(false);
    Alert.alert("Message Send !");
  };
  return (
    <>
      <ChatHeader
        name="Kunta Yannick"
        onGoBack={() => navigation.goBack()}
        onCall={() => "#"}
        onCamera={() => "#"}
        onDotVertical={() => "#"}
      />
      <ImageBackground
        style={styles.wallpaper}
        source={require("../../../src/images/wallpaper.jpeg")}
      >
        <ChatMessage userId={id} data={MESSAGE_DATA} />
      </ImageBackground>
      <ChatFooter
        sendEnable={sendEnable}
        setSendEnable={setSendEnable}
        value={message}
        onChange={(value: string) => onChangeText(value)}
        onMicrophone={() => "#"}
        onSend={__onSend}
        onAttachment={() => "#"}
        onCamera={() => "#"}
        onEmoji={() => "#"}
        onRupee={() => "#"}
      />
    </>
  );
};

export default ChatScreen;

const styles = StyleSheet.create({
  wallpaper: {
    flex: 1,
    paddingHorizontal: 12,
    paddingBottom: 12,
  },
});
