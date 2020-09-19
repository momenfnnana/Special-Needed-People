import React, { useState } from "react";
import { View, Text, Dimensions } from "react-native";
import { Button, Container } from "../../Components/Index";
import IntroCard from "../../Components/IntroCard";
import { Colors } from "../../Constant";
const { height } = Dimensions.get("window");
const IntroSlider = ({ navigation }) => {
  return (
    <Container containerStyle={{ flex: 1, backgroundColor: Colors.primary }}>
      <IntroCard />
      <Button
        containButton={{
          position: "absolute",
          alignSelf: "center",
          marginTop: (height * 2.65) / 3,
        }}
        onPress={() => navigation.navigate("Main")}
        title="تسجيل حساب جديد"
        TextColor={Colors.primary}
        backgroundColor={Colors.white}
        alignSelf="center"
      />
    </Container>
  );
};
export default IntroSlider;
