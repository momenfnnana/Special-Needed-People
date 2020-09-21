import React, { useState } from "react";
import { View, Text, ScrollView, FlatList, Dimensions } from "react-native";
import {
  HeaderTitle,
  Centers,
  ServicesCard,
  Footer,
  Container,
} from "../../Components/Index";
import styles from "./HomeScreen.style";
import { Constant } from "../../Constant";
import { CentersData, OurService } from "../../FakeData/Index";
import { Colors } from "../../Constant";
const SCREEN_WIDTH = Dimensions.get("window").width;
const Home = ({ navigation }) => {
  const homeNavigation = navigation;
  return (
    <Container style={{ flex: 1, backgroundColor: Colors.white }}>
      <HeaderTitle
        title="الرئيسية"
        propsStyle={{
          position: "absolute",
          top: "-5.5%",
          zIndex: 10,
        }}
      />
      <ScrollView style={{ flex: 1, paddingTop: "17%" }}>
        <Text style={[styles.centers]}>المراكز</Text>
        <ScrollView
          showsHorizontalScrollIndicator={false}
          horizontal
          style={{ marginVertical: "5%", transform: [{ scaleX: -1 }] }}
        >
          {CentersData.map((i, index) => {
            return <Centers key={index.toString()} data={i} index={index} />;
          })}
        </ScrollView>
        <View>
          <Text style={[styles.centers]}>خدماتنا</Text>
          <View
            style={{
              flexDirection: "row",
              flexWrap: "wrap",
              marginTop: 20,
              marginBottom: "40%",
            }}
          >
            {OurService.map((item, index) => (
              <View
                key={index.toString()}
                style={{ width: SCREEN_WIDTH / 2 - 10, marginHorizontal: 5 }}
              >
                <ServicesCard
                  key={index.toString()}
                  data={item}
                  onPress={() =>
                    navigation.navigate("ServiceDetails", { _id: item.id })
                  }
                />
              </View>
            ))}
          </View>
        </View>
      </ScrollView>
      <Footer myNavigation={homeNavigation} screenName="home" />
    </Container>
  );
};
export default Home;
