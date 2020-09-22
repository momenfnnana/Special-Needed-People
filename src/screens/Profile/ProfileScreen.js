import { StatusBar } from "expo-status-bar";
import React, { useState } from "react";
import { Text, ScrollView, View, Dimensions, Image } from "react-native";
import {
  ThickHeader,
  Container,
  Footer,
  Button,
  ServicesOrdered,
  BabyCard,
} from "../../Components/Index";
import { Colors } from "../../Constant";
import styles from "./ProfileScreen.style";

const ProfileScreen = ({ navigation }) => {
  const profileNavigation = navigation;
  const ImageProfile = () => {
    return (
      <View
        style={{
          shadowColor: "#000",
          shadowOffset: {
            width: 0,
            height: 4,
          },
          shadowOpacity: 0.3,
          shadowRadius: 4.65,
          elevation: 8,
          borderRadius: 90,
          justifyContent: "center",
          alignItems: "center",
          height: 180,
          width: 180,
          alignSelf: "center",
          backgroundColor: Colors.primary,
          marginBottom: -90,
        }}
      >
        <Image
          style={{ height: 130, width: 130, resizeMode: "contain" }}
          source={require("../../../assets/images/Userprofile.png")}
        />
      </View>
    );
  };

  return (
    <Container paddingTop={false}>
      <StatusBar style="auto" backgroundColor={Colors.primary} />
      <ScrollView style={{ flex: 1, backgroundColor: Colors.white }}>
        <ThickHeader
          mainTitle={"ريهام أحمد"}
          img={require("../../../assets/images/UserImage.png")}
          settingVisible={true}
          goSetting={() => navigation.navigate("Setting")}
          viewImage={ImageProfile()}
        />
        <Button
          alignSelf="center"
          TextColor={Colors.white}
          backgroundColor={Colors.primary}
          containButton={{ marginTop: 5, paddingVertical: 10 }}
          title="تعديل الملف الشخصي"
          styleText={{ fontSize: 18 }}
          styleButton={{ paddingVertical: 13 }}
          onPress={() => navigation.navigate("EditProfile")}
        />
        <Text style={styles.title}>أطفالي</Text>
        <BabyCard myNavigation={profileNavigation} />
        <Text style={styles.title}>الخدمات الي طلبتها</Text>
        <ServicesOrdered myNavigation={profileNavigation} />
      </ScrollView>
      <Footer myNavigation={profileNavigation} screenName="profile" />
    </Container>
  );
};
export default ProfileScreen;
