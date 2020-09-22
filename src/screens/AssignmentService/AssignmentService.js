import React, { useState } from "react";
import {
  View,
  Text,
  ScrollView,
  Dimensions,
  Image,
  TextInput,
} from "react-native";
import {
  ThickHeader,
  SpecialistsCard,
  RateCard,
  Button,
  ModalSpecialistsCards,
} from "../../Components/Index";
import { Colors } from "../../Constant";
import { FontAwesome5 } from "@expo/vector-icons";
import {
  Specialists,
  Rates,
  OurService,
  ServicesOrder,
} from "../../FakeData/Index";
import styles from "./AssignmentService.style";
import Modal from "react-native-modal";
const SCREEN_WIDTH = Dimensions.get("window").width;
import DateTimePickerModal from "react-native-modal-datetime-picker";
import Card from "../../Components/Card";
import DefaultText from "../../Components/DefaultText";
import ReportState from "../../Components/ReportState";
import Stars from "react-native-stars";
import { FontAwesome } from "@expo/vector-icons";

const ServiceDetails = ({ navigation, route }) => {
  const [isDatePickerVisible, setDatePickerVisibility] = useState(false);
  const [selectedDate, setSelectedDate] = useState(null);
  const [modalVisible, setModalVisible] = useState(false);
  const [rate, setRate] = useState(0);
  const [message, setMessage] = useState("");
  const { _id } = route.params;
  const data = OurService.find((item) => item.id === _id);
  const dataa = ServicesOrder.find((item) => item.id === _id);

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
  return (
    <ScrollView style={{ flex: 1, backgroundColor: Colors.white }}>
      <ThickHeader
        mainTitle={dataa.title}
        img={dataa.img}
        viewImage={
          <View style={styles.containHeaderImage}>
            <Image style={styles.imageHeader} source={dataa.img} />
            <Image style={styles.logoHeader} source={dataa.logo} />
            <View style={styles.overlay} />
          </View>
        }
        goBackVisible={true}
        goBack={() => navigation.goBack()}
      />
      <Button
        alignSelf="center"
        TextColor={Colors.white}
        backgroundColor={Colors.primary}
        containButton={{ marginTop: 5, paddingVertical: 10 }}
        title="تأكيد إنتهاء المهمة"
        styleText={{ fontSize: 18 }}
        styleButton={{ paddingVertical: 13 }}
      />
      <Text style={[styles.title, { marginTop: 5 }]}>تاريخ الطلب</Text>
      <Text style={styles.time}>{dataa.time}</Text>

      <Text style={[styles.title, { marginTop: 20 }]}>الأخصائي</Text>

      <SpecialistsCard
        enableStatus={false}
        data={Specialists[0]}
        textStyle={{ fontSize: 14 }}
        jobStyle={{ fontSize: 12 }}
      />
      <View style={{ marginTop: 20, paddingHorizontal: 20 }}>
        <Text style={[styles.title, {right: 0}]}>تقرير الحالة</Text>
        <ReportState item={Specialists[0]} />
      </View>
      <Text style={[styles.title, { marginTop: 20 }]}>التقييم</Text>
      <View
        style={{
          marginVertical: 10,
          alignSelf: "flex-end",
          paddingHorizontal: 25,
        }}
      >
        <Stars
          default={rate}
          spacing={5}
          update={(val) => setRate(val)}
          count={5}
          half={true}
          fullStar={<FontAwesome name="star" style={[styles.myStarStyle]} />}
          emptyStar={
            <FontAwesome
              name="star"
              style={[styles.myStarStyle, styles.myEmptyStarStyle]}
            />
          }
          halfStar={
            <FontAwesome name="star-half-empty" style={[styles.myStarStyle]} />
          }
        />
      </View>
      <View
        style={{
          marginTop: 8,
          padding: 10,
          borderWidth: 2,
          borderColor: "#DADADA",
          borderRadius: 30,
          flexDirection: "row-reverse",
          marginHorizontal: 20,
          marginBottom: 5,
        }}
      >
        <TextInput
          placeholder="أخبرني عن تجربتك هنا"
          placeholderTextColor={Colors.semiGray}
          multiline={true}
          numberOfLines={7}
          onChangeText={(text) => setMessage(text)}
          value={message}
          style={{
            width: "100%",
            height: "100%",
            fontFamily: "ArbFONTS-Montserrat-Arabic-SemiBold",
          }}
        />
      </View>
      <View style={{ alignItems: "center", marginBottom: "2%" }}>
        <Button
          onPress={() => setModalVisible(true)}
          title="إرسال"
          TextColor={Colors.white}
          backgroundColor={Colors.primary}
          styleButton={{ width: 80, paddingVertical: 10 }}
          containButton={{ alignSelf: "flex-start", paddingHorizontal: 20 }}
        />
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
