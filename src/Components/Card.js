import React from "react";
import { View, StyleSheet } from "react-native";

const Card = ({ children, backgroundColor, styleCard }) => {
  return (
    <View
      style={StyleSheet.flatten([
        styles.card,
        styleCard,
        { backgroundColor: backgroundColor ? backgroundColor : "#fff" },
      ])}
    >
      {children}
    </View>
  );
};

const styles = StyleSheet.create({
  card: {
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 1,
    },
    shadowOpacity: 0.22,
    shadowRadius: 2.22,
    elevation: 3,
    borderRadius: 20,
    overflow: "hidden",
  },
});
export default Card;
