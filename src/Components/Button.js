import React from "react";
import { View, Text, TouchableOpacity } from "react-native";
import styles from "./Component.style";
const Button = ({
  backgroundColor,
  borderColor,
  borderWidth,
  TextColor,
  title,
  onPress,
  alignSelf,
  containButton,
  styleButton,
  styleText,
}) => {
  return (
    <View style={containButton}>
      <TouchableOpacity
        style={[
          styles.ButtonContainer,
          {
            backgroundColor: backgroundColor,
            borderColor: borderColor,
            borderWidth: borderWidth,
            alignSelf: alignSelf,
            ...styleButton,
          },
        ]}
        onPress={onPress}
      >
        <Text style={[styles.ButtonTitle, { color: TextColor, ...styleText }]}>
          {title}
        </Text>
      </TouchableOpacity>
    </View>
  );
};
export default Button;
