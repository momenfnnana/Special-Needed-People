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
  const [home, setHome] = useState(true);
  const [person, setPerson] = useState(false);
  const [calender, setCalender] = useState(false);
  const homeNavigation = navigation;
  const togglePersonScreen = () => {
    setPerson(true);
    setHome(false);
    setCalender(false);
  };
  const toggleCalenderScreen = () => {
    setPerson(false);
    setHome(false);
    setCalender(true);
  };
  const toggleHomeScreen = () => {
    setPerson(false);
    setHome(true);
    setCalender(false);
  };
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
          style={{ marginVertical: "5%" }}
        >
          {CentersData.map((i, index) => {
            return <Centers key={index.toString()} data={i} index={index} />;
          })}
        </ScrollView>
        <View>
          <Text style={[styles.centers]}>خدماتنا</Text>
          <FlatList
            data={OurService}
            keyExtractor={(i, index) => index.toString()}
            renderItem={(item) => (
              <ServicesCard
                data={item}
                onPress={() =>
                  navigation.navigate("ServiceDetails", { _id: item.item.id })
                }
              />
            )}
            numColumns={2}
            style={{
              width: SCREEN_WIDTH,
              alignSelf: "center",
              marginBottom: "40%",
            }}
          />
        </View>
      </ScrollView>
      <Footer myNavigation={homeNavigation} screenName="home" />
    </Container>
  );
};
export default Home;
