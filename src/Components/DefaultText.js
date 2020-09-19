import React from "react";
import { Text, StyleSheet } from "react-native";

const DefaultText = ({ textType = "regular", textStyle, children }) => {
  return (
    <Text
      style={StyleSheet.flatten([
        textStyle,
        textType === "regular" && styles.regular,
        textType === "bold" && styles.bold,
        textType === "light" && styles.light,
        textType === "semiBold" && styles.semiBold,
      ])}
    >
      {children}
    </Text>
  );
};

const styles = StyleSheet.create({
  bold: {
    fontFamily: "ArbFONTS-Montserrat-Arabic-Bold",
  },
  regular: {
    fontFamily: "ArbFONTS-Montserrat-Arabic-Regular",
  },
  light: {
    fontFamily: "ArbFONTS-Montserrat-Arabic-Light",
  },
  semiBold: {
    fontFamily: "ArbFONTS-Montserrat-Arabic-SemiBold",
  },
});
export default DefaultText;
