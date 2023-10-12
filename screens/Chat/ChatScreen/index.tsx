import { StyleSheet, Text, View } from "react-native";
import React, { useState } from "react";
import { NavigatorStackScreenProps } from "../../../routes/Navigator";
import ChatHeader from "../../../components/Chats/ChatHeader";
import ChatFooter from "../../../components/Chats/ChatFooter";
import { Alert } from "react-native";

const ChatScreen = ({
  navigation,
}: NavigatorStackScreenProps<"ChatScreen">) => {
  const [message, setMessage] = useState("");
  const [sendEnable, setSendEnable] = useState(false);
  const onChangeText = (text: string) => {
    setMessage(text);
    setSendEnable(true);
  };
  const __onSend = () => {
    setMessage("");
    setSendEnable(false);
    Alert.alert("Message Send !")
  };
  return (
    <View>
      <ChatHeader
        name="Kunta Yannick"
        onGoBack={() => navigation.goBack()}
        onCall={() => "#"}
        onCamera={() => "#"}
        onDotVertical={() => "#"}
      />
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
      <Text>ChatScreen</Text>
    </View>
  );
};

export default ChatScreen;

const styles = StyleSheet.create({});
