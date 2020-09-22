import React, { useState } from "react";
import { View, Text, ScrollView, Dimensions } from "react-native";
import {
  ThickHeader,
  SpecialistsCard,
  RateCard,
  Button,
  ModalSpecialistsCards,
} from "../../Components/Index";
import { Colors } from "../../Constant";
import { FontAwesome5 } from "@expo/vector-icons";
import { Specialists, Rates, OurService } from "../../FakeData/Index";
import styles from "./ServiceDetails.style";
import Modal from "react-native-modal";
const SCREEN_WIDTH = Dimensions.get("window").width;
import DateTimePickerModal from "react-native-modal-datetime-picker";
import { StatusBar } from "expo-status-bar";

const ServiceDetails = ({ navigation, route }) => {
  const [isDatePickerVisible, setDatePickerVisibility] = useState(false);
  const [selectedDate, setSelectedDate] = useState(null);
  const [modalVisible, setModalVisible] = useState(false);
  const { _id } = route.params;
  const data = OurService.find((item) => item.id === _id);
  const sDetailsNavigation = navigation;
  const showDatePicker = () => {
    setDatePickerVisibility(true);
  };

  const hideDatePicker = () => {
    setDatePickerVisibility(false);
  };

  const handleConfirm = (date) => {
    console.log("A date has been picked: ", date);
    setSelectedDate(date);
    hideDatePicker();
    navigation.navigate("Map");
  };
  console.log("selectedDate", selectedDate);
  return (
    <ScrollView style={{ flex: 1, backgroundColor: Colors.white }}>
      <StatusBar backgroundColor={Colors.primary} style="light" />
      <ThickHeader
        mainTitle={data.title}
        img={data.img}
        goBackVisible={true}
        goBack={() => navigation.goBack()}
      />
      <Text style={styles.title}>التفاصيل</Text>
      <Text style={styles.detailsText}>{data.description}</Text>
      <View style={{ marginTop: "5%" }}>
        <Text style={styles.title}>سعر الحجز</Text>
        <View style={styles.sallaryContainer}>
          <FontAwesome5
            name="money-bill-wave"
            size={24}
            color={Colors.primary}
          />
          <Text style={styles.salary}>
            {data.salary}
            <Text>ريال</Text>
          </Text>
        </View>
      </View>
      <View style={{ marginTop: "5%" }}>
        <Text style={styles.title}>الأخصائيين</Text>
        {Specialists.map((i, index) => {
          return (
            <SpecialistsCard
              myNavigation={sDetailsNavigation}
              key={index.toString()}
              data={i}
              onPress={showDatePicker}
            />
          );
        })}
        <Text style={[styles.title, { marginTop: 15 }]}>التقيمات</Text>
        <ScrollView
          style={{ transform: [{ scaleX: -1 }] }}
          contentContainerStyle={{
            marginTop: 10,
            paddingVertical: 30,
            paddingHorizontal: 5,
          }}
          horizontal
          showsHorizontalScrollIndicator={false}
        >
          {Rates.map((i, index) => {
            return <RateCard key={index.toString()} data={i} />;
          })}
        </ScrollView>

        <View style={{ alignItems: "center", marginBottom: "5%" }}>
          <Button
            onPress={() => setModalVisible(true)}
            title="طلب الخدمة"
            TextColor={Colors.white}
            backgroundColor={Colors.primary}
          />
        </View>
      </View>
      <Modal
        isVisible={modalVisible}
        onBackdropPress={() => setModalVisible(false)}
        onSwipeComplete={() => setModalVisible(false)}
        swipeDirection="down"
        style={{ width: SCREEN_WIDTH / 1.3, alignSelf: "center" }}
        // backdropColor="transparent"
      >
        <View
          style={{
            backgroundColor: "#fff",
            alignItems: "center",
            borderRadius: 15,
            paddingBottom: "7%",
          }}
        >
          <Text style={styles.modalTitle}>اختر الأخصائي</Text>
          {Specialists.map((i, index) => {
            return (
              <ModalSpecialistsCards
                key={index.toString()}
                data={i}
                onPress={showDatePicker}
              />
            );
          })}
        </View>
      </Modal>
      <DateTimePickerModal
        isVisible={isDatePickerVisible}
        mode="datetime"
        onConfirm={handleConfirm}
        onCancel={hideDatePicker}
      />
    </ScrollView>
  );
};
export default ServiceDetails;
