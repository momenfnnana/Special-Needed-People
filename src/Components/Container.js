import React from "react";
import { StatusBar } from "expo-status-bar";
import { Text, View, StyleSheet } from "react-native";
import Constants from "expo-constants";

const Container = ({ children, containerStyle, paddingTop = true }) => (
  <View
    style={StyleSheet.flatten([
      {
        flex: 1,
        backgroundColor: "#fff",
        paddingTop: paddingTop ? Constants.statusBarHeight + 10 : 0,
      },
      containerStyle,
    ])}
  >
    <StatusBar style="light" />
    {children}
  </View>
);

export default Container;
