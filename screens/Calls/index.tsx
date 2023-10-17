import { StyleSheet, Text, View, ScrollView } from "react-native";
import React from "react";
import CallLink from "../../components/Calls/CallLink";
import RecentCalls from "../../components/Calls/RecentCalls";
import { COLORS } from "../../configs/Colors";
import { RECENT_CALL_DATA } from "../../data/recentCallData";

const Calls = () => {
  return (
    <View style={styles.container}>
    <ScrollView
      showsVerticalScrollIndicator={false}
      // contentContainerStyle={styles.container}
    >
      <CallLink />
      <Text style={styles.recent}>Recent</Text>
      {RECENT_CALL_DATA.map((item) => {
        return (
          <RecentCalls
            key={item.id}
            image={item.image}
            name={item.name}
            dateTime={item.time}
            incoming={item.incoming}
            outgoing={item.outgoing}
            video={item.video}
            audio={item.audio}
          />
        );
      })}
    </ScrollView>
    </View>
  );
};

export default Calls;

const styles = StyleSheet.create({
  container: {
    backgroundColor: COLORS.background,
    padding: 16,
  },
  recent: {
    fontSize: 14,
    color: COLORS.textGrey,
    marginTop: 20,
    paddingBottom: 10,
  },
});
