import { StyleSheet, Text, View } from "react-native";
import React from "react";

export const HomeScreen = () => {
  return (
    <View>
      <Text>HomeScreen</Text>
    </View>
  );
};

export default HomeScreen;

const styles = StyleSheet.create({
  flex: 1,
  container: {
    justifyContent: "center",
    alignItems: "center",
  },
});
