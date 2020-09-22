import { StatusBar } from "expo-status-bar";
import React, { useState } from "react";
import { Text, ScrollView, View, Dimensions, Image } from "react-native";
import { TouchableOpacity } from "react-native-gesture-handler";
import DefaultText from "../../Components/DefaultText";
import {
  ThickHeader,
  Container,
  Footer,
  Button,
  ServicesOrdered,
  BabyCard,
  ReportState,
} from "../../Components/Index";
import { Colors } from "../../Constant";
import styles from "./BabyProfile.style";
const { height, width } = Dimensions.get("window");
import Constants from "expo-constants";
import Baby from "../../FakeData/Baby";
import { Specialists } from "../../FakeData/Index";

const BabyProfileScreen = ({ navigation, route }) => {
  const profileNavigation = navigation;
  const { _id } = route.params;
  const data = Baby.find((item) => item.id === _id);
  const ImageProfile = () => {
    return (
      <View style={styles.containImage}>
        <Image style={styles.image} source={data.img} />
      </View>
    );
  };

  return (
    <Container paddingTop={false}>
      <StatusBar style="auto" backgroundColor={Colors.primary} />
      <ScrollView style={{ flex: 1, backgroundColor: Colors.white }}>
        <ThickHeader
          babyProfile={true}
          mainTitle={data.childName}
          viewImage={ImageProfile()}
          goBack={() => navigation.pop()}
          goBackVisible={true}
        />
        <View style={{ marginVertical: 10 }}>
          <View style={styles.rowText}>
            <DefaultText textStyle={styles.title}>العمر</DefaultText>
            <DefaultText textStyle={styles.valueRow}>{data.age}</DefaultText>
          </View>
          <View style={[styles.rowText, { marginVertical: 15 }]}>
            <DefaultText textStyle={styles.title}>الحالة</DefaultText>
            <DefaultText textStyle={styles.valueRow}>{data.status}</DefaultText>
          </View>
          <View style={styles.rowText}>
            <DefaultText textStyle={styles.title}>تقرير حالة الطفل</DefaultText>
            <Button
              TextColor={Colors.white}
              backgroundColor={Colors.primary}
              containButton={{ width: 110 }}
              title="تحميل الملف"
              styleButton={{ width: "100%", paddingVertical: 10 }}
              styleText={{ fontSize: 13 }}
            />
          </View>
        </View>
        <View style={{ marginTop: 10, marginBottom: 20, marginHorizontal: 25 }}>
          <DefaultText textStyle={styles.title}>
            تقارير المختصين لحالة الطفل
          </DefaultText>
          <ReportState item={Specialists[0]} />
          <ReportState item={Specialists[0]} />
        </View>
      </ScrollView>
    </Container>
  );
};
export default BabyProfileScreen;
