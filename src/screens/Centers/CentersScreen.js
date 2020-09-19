import React, { useState } from "react";
import { View, Text, ScrollView, FlatList, Dimensions } from "react-native";
import { HeaderTitle, Footer, Container } from "../../Components/Index";
import styles from "./CentersScreen.style";
import { CentersData } from "../../FakeData/Index";
import { Colors } from "../../Constant";
import CentersSection from "../../Components/CentersSection";
const SCREEN_WIDTH = Dimensions.get("window").width;
const CentersScreen = ({ navigation }) => {
  const centersNavigation = navigation;
  return (
    <Container style={{ flex: 1, backgroundColor: Colors.white }}>
      <HeaderTitle
        title="المراكز"
        propsStyle={{
          position: "absolute",
          top: "-5.5%",
          zIndex: 10,
        }}
      />
      <ScrollView
        style={{ flex: 1, paddingTop: "15%" }}
        contentContainerStyle={{ paddingBottom: "35%" }}
      >
        {CentersData.map((item, index) => (
          <View key={index.toString()} style={{ marginTop: 10 }}>
            <CentersSection Item={item} />
            <CentersSection Item={item} />
            <CentersSection Item={item} />
          </View>
        ))}
      </ScrollView>
      <Footer myNavigation={centersNavigation} screenName="centers" />
    </Container>
  );
};
export default CentersScreen;
