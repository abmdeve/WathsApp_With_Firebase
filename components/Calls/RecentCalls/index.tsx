import {
  StyleSheet,
  Text,
  View,
  Image,
  ImageSourcePropType,
} from "react-native";
import React from "react";
import { COLORS } from "../../../configs/Colors";
import VectorIcon from "../../VectorIcon";

export interface RecentCallsProps {
  image: ImageSourcePropType | any;
  name: string;
  dateTime: string;
  incoming: boolean;
  outgoing: boolean;
  video: boolean;
  audio: boolean;
}

const RecentCalls = ({
  image,
  name,
  dateTime,
  incoming,
  outgoing,
  video,
  audio,
}: RecentCallsProps) => {
  return (
    <>
      <View style={styles.container}>
        <View style={styles.row}>
          <Image source={image} style={styles.imgStyle} />
          <View style={styles.linkSection}>
            <Text style={styles.callLink}>{name}</Text>
            <View style={styles.absent}>
              {outgoing && (
                <VectorIcon
                  name={"arrow-down-left"}
                  size={20}
                  color={COLORS.red}
                  type="Feather"
                />
              )}
              {incoming && (
                <VectorIcon
                  name={"arrow-up-left"}
                  size={20}
                  color={COLORS.tertiary}
                  type="Feather"
                />
              )}
              <Text style={styles.shareLink}>{dateTime}</Text>
            </View>
          </View>
        </View>
        {video && (
          <VectorIcon
            name={"videocam"}
            size={24}
            color={COLORS.tertiary}
            type="Ionicons"
          />
        )}
        {audio && (
          <VectorIcon
            name={"phone-alt"}
            size={16}
            color={COLORS.tertiary}
            type="FontAwesome5"
          />
        )}
      </View>
    </>
  );
};

export default RecentCalls;

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    paddingVertical: 10,
  },
  row: {
    flexDirection: "row",
    alignItems: "center",
  },
  absent: {
    flexDirection: "row",
  },

  imgStyle: {
    height: 45,
    width: 45,
    borderRadius: 50,
  },
  callLink: {
    fontSize: 15,
    color: COLORS.white,
    fontWeight: "500",
  },
  shareLink: {
    fontSize: 13,
    color: COLORS.textGrey,
    marginTop: 3,
  },
  linkSection: {
    marginLeft: 15,
  },
  callDetails: {
    flexDirection: "row",
    alignItems: "center",
    marginTop: 5,
  },
});
