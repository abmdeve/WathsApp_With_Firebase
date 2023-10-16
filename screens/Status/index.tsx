import { ScrollView, StyleSheet, Text, View } from "react-native";
import React from "react";
import MyStatus from "../../components/Status/MyStatus";
import RecentStatus from "../../components/Status/RecentStatus";
import ViewedStatus from "../../components/Status/ViewedStatus";
import { COLORS } from "../../configs/Colors";

const Status = () => {
  return (
    <ScrollView
      contentContainerStyle={styles.container}
      showsVerticalScrollIndicator={false}
    >
      <MyStatus />
      <RecentStatus />
      <ViewedStatus />
    </ScrollView>
  );
};

export default Status;

const styles = StyleSheet.create({
  container: {
    backgroundColor: COLORS.background,
    padding: 16,
  },
});
