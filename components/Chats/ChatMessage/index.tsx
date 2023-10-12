import { ScrollView, StyleSheet, View } from "react-native";
import React, { useRef } from "react";
import { COLORS } from "../../../configs/Colors";
import UserMessageView from "./UserMessage";
import OtherMessageView from "./OtherMessage";
import { MESSAGE_DATA_TYPE } from "../../../utils/types";
import VectorIcon from "../../VectorIcon";

export interface ChatMessageProps {
  userId: number;
  data: Array<MESSAGE_DATA_TYPE>;
}

const ChatMessage = ({ data, userId }: ChatMessageProps) => {
  const scrollViewRef = useRef(null);
  // const userId = "1"
  // const UserMessageView = () => {
  //   return (
  //     <View style={styles.userContainer}>
  //       <View style={styles.userInnerContainer}>
  //         <Text style={styles.message}>Hiiii</Text>
  //         <Text style={styles.time}>09:42 PM</Text>
  //         <VectorIcon
  //           style={styles.checkDouble}
  //           name={"check-double"}
  //           size={12}
  //           color={COLORS.blue}
  //           type="FontAwesome5"
  //         />
  //       </View>
  //     </View>
  //   );
  // };
  // const OtherMessageView = () => {
  //   return (
  //     <View style={styles.otherUserContainer}>
  //       <View style={styles.otherUserInnerContainer}>
  //         <Text style={styles.message}>Hiiii</Text>
  //         <Text style={styles.time}>09:42 PM</Text>
  //       </View>
  //     </View>
  //   );
  // };

  const scrollToBottom = () => {
    scrollViewRef.current.scrollToEnd({ animated: true });
  };

  return (
    <>
      <ScrollView
        ref={scrollViewRef}
        onContentSizeChange={scrollToBottom}
        showsVerticalScrollIndicator={false}
      >
        {data.map((item) => (
          <>
            {item.id === userId.toString() ? (
              <UserMessageView key={item.id} message={item.message} time={item.time} />
            ) : (
              <OtherMessageView key={item.id} message={item.message} time={item.time} />
            )}
          </>
        ))}
      </ScrollView>
      <View style={styles.scrollIcon}>
        <View style={styles.scrollDownArrow}>
          <VectorIcon
            name={"angle-dobule-down"}
            size={12}
            color={COLORS.white}
            type="Fontisto"
            onPress={scrollToBottom}
          />
        </View>
      </View>
    </>
  );
};

export default ChatMessage;

const styles = StyleSheet.create({
  scrollDownArrow: {
    backgroundColor: COLORS.primaryColor,
    borderRadius: 50,
    height: 30,
    width: 30,
    alignItems: "center",
    justifyContent: "center",
  },
  scrollIcon: {
    flexDirection: "row",
    justifyContent: "flex-end",
    // backgroundColor: "transparent",
  },
});
