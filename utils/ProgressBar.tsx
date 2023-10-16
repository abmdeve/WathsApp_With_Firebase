import { Animated, StyleSheet, Text, View } from "react-native";
import React, { useEffect, useRef } from "react";
import { COLORS } from "../configs/Colors";

export interface ProgressBarProps {
  setTimeUp: () => void;
}
const ProgressBar = ({ setTimeUp }: ProgressBarProps) => {
  const progressAnimation = useRef(new Animated.Value(0)).current;

  const animatedProgress = () => {
    Animated.timing(progressAnimation, {
      toValue: 100,
      duration: 10000,
      useNativeDriver: false,
    }).start(({ finished }) => {
      if (finished) {
        setTimeUp()
        console.log("ANIMATION STOPPED AND PROGRESS BAR IS FULL", finished);
      }
    });
  };
  useEffect(() => {
    animatedProgress();
  }, []);

  return (
    <View style={styles.container}>
      <View style={styles.progressBg}>
        <Animated.View
          style={[
            styles.progess,
            {
              width: progressAnimation.interpolate({
                inputRange: [0, 100],
                outputRange: ["0%", "100%"],
              }),
            },
          ]}
        />
      </View>
    </View>
  );
};

export default ProgressBar;

const styles = StyleSheet.create({
  container: {
    marginTop: 10,
  },
  progressBg: {
    width: "100%",
    height: 5,
    backgroundColor: "#708090",
    borderRadius: 5,
  },
  progess: {
    width: "100%",
    height: 5,
    backgroundColor: COLORS.white,
    borderRadius: 5,
  },
});
