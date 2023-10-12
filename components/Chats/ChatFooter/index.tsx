import { StyleSheet, Text, View, TextInput } from "react-native";
import React, { Dispatch, SetStateAction } from "react";
import VectorIcon from "../../VectorIcon";
import { COLORS } from "../../../configs/Colors";

export interface ChatFooterProps {
  value: string;
  onChange: (value: string) => void;
  sendEnable: boolean;
  setSendEnable: Dispatch<SetStateAction<boolean>>;
  onMicrophone: () => void;
  onSend: () => void;
  onCamera: () => void;
  onAttachment: () => void;
  onRupee: () => void;
  onEmoji: () => void;
}

const ChatFooter = ({
  value,
  onChange,
  sendEnable,
  setSendEnable,
  onMicrophone,
  onSend,
  onAttachment,
  onCamera,
  onRupee,
  onEmoji,
}: ChatFooterProps) => {
  return (
    <View style={styles.container}>
      <View style={styles.leftContainer}>
        <View style={styles.row}>
          <VectorIcon
            name={"emoji-emotions"}
            size={24}
            color={COLORS.white}
            type="MaterialIcons"
            onPress={onEmoji}
          />
          <TextInput
            value={value}
            onChangeText={onChange}
            placeholder="Message..."
            style={styles.input}
            placeholderTextColor={COLORS.textGrey}
          />
        </View>
        <View style={styles.row}>
          <VectorIcon
            style={styles.icon}
            name={"attachment"}
            size={18}
            color={COLORS.white}
            type="Entypo"
            onPress={onAttachment}
          />
          {!sendEnable && (
            <>
              <VectorIcon
                style={styles.icon}
                name={"rupee"}
                size={20}
                color={COLORS.white}
                type="FontAwesome"
                onPress={onRupee}
              />
              <VectorIcon
                style={styles.icon}
                name={"camera"}
                size={18}
                color={COLORS.white}
                type="FontAwesome"
                onPress={onCamera}
              />
            </>
          )}
        </View>
      </View>
      <View style={styles.rigthContainer}>
        {sendEnable ? (
          <VectorIcon
            style={styles.icon}
            name={"send"}
            size={25}
            color={COLORS.white}
            type="MaterialCommunityIcons"
            onPress={onSend}
          />
        ) : (
          <VectorIcon
            style={styles.icon}
            name={"microphone"}
            size={25}
            color={COLORS.white}
            type="MaterialCommunityIcons"
            onPress={onMicrophone}
          />
        )}
      </View>
    </View>
  );
};

export default ChatFooter;

const styles = StyleSheet.create({
  container: {
    backgroundColor: COLORS.black,
    paddingVertical: 12,
    paddingHorizontal: 10,
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
  },
  leftContainer: {
    width: "85%",
    flexDirection: "row",
    backgroundColor: COLORS.primaryColor,
    borderRadius: 30,
    padding: 15,
    justifyContent: "space-between",
    alignItems: "center",
  },
  rigthContainer: {
    backgroundColor: COLORS.teal,
    // padding: 5,
    width: 50,
    height: 50,
    borderRadius: 25,
    justifyContent: "center",
    alignItems: "center",
  },
  icon: {
    marginHorizontal: 8,
  },
  row: {
    flexDirection: "row",
    alignItems: "center",
  },
  input: {
    // borderWidth: 1,
    fontSize: 17,
    color: COLORS.white,
    marginLeft: 5,
  },
});
