import { StatusBar } from "expo-status-bar";
import React, { useState } from "react";
import {
  Text,
  ScrollView,
  View,
  TouchableOpacity,
  Image,
  TextInput,
} from "react-native";
import DefaultText from "../../Components/DefaultText";
import {
  ThickHeader,
  Container,
  Footer,
  Button,
  ServicesOrdered,
  BabyCard,
} from "../../Components/Index";
import { Colors } from "../../Constant";
import styles from "./specialistProfileScreen.style";
import { FontAwesome5, FontAwesome } from "@expo/vector-icons";
import Card from "../../Components/Card";
import Stars from "react-native-stars";
import ContactModal from "../../Components/ContactModal";
import Modal from 'react-native-modal';

const specialistProfileScreen = ({ navigation, route }) => {
  const sprofileNavigation = navigation;
  const [message, setMessage] = useState(null);
  const [modalVisible, setModalVisible] = useState({ contact: false });
  const [modalVisibleOptions, setModalVisibleOptions] = useState(false);
  const [rate, setRate] = useState(2.5);
  const { _id } = route.params;
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
          borderRadius: 80,
          justifyContent: "center",
          alignItems: "center",
          height: 160,
          width: 160,
          alignSelf: "center",
          backgroundColor: Colors.primary,
          marginBottom: -80,
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
          goBackVisible={true}
          goBack={() => navigation.pop()}
          mainTitle={"أحمد حسن"}
          viewImage={ImageProfile()}
        />
        <View
          style={{
            flexDirection: "row-reverse",
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          <View
            style={{
              backgroundColor: Colors.green,
              width: 10,
              height: 10,
              borderRadius: 5,
              marginLeft: 5,
            }}
          />
          <DefaultText textStyle={{ color: Colors.semiGray, fontSize: 12 }}>
            نشط الآن
          </DefaultText>
        </View>
        <View
          style={{
            flexDirection: "row-reverse",
            justifyContent: "space-between",
            marginHorizontal: 10,
            marginTop: 18,
          }}
        >
          <TouchableOpacity
            onPress={() => setModalVisible({ ...modalVisible, contact: true })}
            style={{
              flexDirection: "row-reverse",
              justifyContent: "center",
              alignItems: "center",
              paddingVertical: 8,
              borderRadius: 10,
              backgroundColor: Colors.primary,
              flex: 0.81,
            }}
          >
            <FontAwesome
              name="comment"
              style={{ fontSize: 24, color: Colors.white, marginLeft: 10 }}
            />
            <DefaultText textStyle={{ color: Colors.white, fontSize: 18 }}>
              تواصل
            </DefaultText>
          </TouchableOpacity>
          <TouchableOpacity
            onPress={() => setModalVisibleOptions(!modalVisibleOptions)}
            style={{
              paddingVertical: 8,
              flex: 0.17,
              borderRadius: 10,
              borderWidth: 1.5,
              borderColor: Colors.semiGray,
              justifyContent: "center",
              alignItems: "center",
            }}
          >
            <FontAwesome5
              name="ellipsis-h"
              style={{ color: Colors.semiGray, fontSize: 29 }}
            />
          </TouchableOpacity>
        </View>
        <View style={{ paddingHorizontal: 20 }}>
          <Text style={styles.title}>نبذة قصيرة</Text>
          <DefaultText textStyle={{ color: Colors.semiGray, fontSize: 15 }}>
            هذا النص هو مثال لنص يمكن أن يستبدل في نفس المساحة، لقد تم توليد هذا
            النص من مولد النص العربى، حيث يمكنك أن تولد مثل هذا النص أو العديد
            من النصوص الأخرى إضافة إلى زيادة عدد الحروف التى يولدها
          </DefaultText>
          <Text style={styles.title}>الشهادات</Text>
          <DefaultText textStyle={{ color: Colors.semiGray, fontSize: 15 }}>
            - شهادة بكالوريوس تأهيل مجتمعي - جامعة الرياض
          </DefaultText>
          <DefaultText textStyle={{ color: Colors.semiGray, fontSize: 15 }}>
            - شهادة دبلوم في علاج النطق
          </DefaultText>
          <Text style={styles.title}>الخبرات</Text>
          <DefaultText textStyle={{ color: Colors.semiGray, fontSize: 15 }}>
            - مدرب في مركز السلام
          </DefaultText>
          <DefaultText textStyle={{ color: Colors.semiGray, fontSize: 15 }}>
            - حاصل على شهادة تميز من مركز ريادة للتأهيل
          </DefaultText>
          <DefaultText textStyle={{ color: Colors.semiGray, fontSize: 15 }}>
            - مدرب سابق في مؤسسة اليونسيف
          </DefaultText>
          <Text style={styles.title}>المركز</Text>
          <View style={{ marginVertical: 10 }}>
            <Card
              styleCard={{
                flexDirection: "row-reverse",
                paddingVertical: 15,
                paddingHorizontal: 10,
              }}
            >
              <Image
                style={{ marginLeft: 15 }}
                source={require("../../../assets/images/centerImg.png")}
              />
              <View style={{ flex: 1 }}>
                <DefaultText
                  textStyle={{ color: Colors.secondary, fontSize: 18 }}
                >
                  مركز السلام للتأهيل
                </DefaultText>
                <DefaultText
                  textStyle={{
                    color: Colors.semiGray,
                    fontSize: 12,
                    marginTop: 5,
                  }}
                >
                  هذا النص هو مثال لنص يمكن أن يستبدل في نفس المساحة، لقد تم
                  توليد هذا النص من مولد النص العربى، حيث يمكنك أن تولد مثل هذا
                  النص أو العديد من النصوص الأخرى إضافة إلى زيادة عدد الحروف
                  التى يولدها التطبيق.
                </DefaultText>
              </View>
            </Card>
          </View>
          <Text style={styles.title}>التقييم</Text>
          <View
            style={{
              marginVertical: 10,
              alignSelf: "flex-end",
            }}
          >
            <Stars
              default={rate}
              spacing={5}
              update={(val) => setRate(val)}
              count={5}
              half={true}
              fullStar={
                <FontAwesome name="star" style={[styles.myStarStyle]} />
              }
              emptyStar={
                <FontAwesome
                  name="star"
                  style={[styles.myStarStyle, styles.myEmptyStarStyle]}
                />
              }
              halfStar={
                <FontAwesome
                  name="star-half-empty"
                  style={[styles.myStarStyle]}
                />
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
              // onPress={() => setModalVisible(true)}
              title="إرسال"
              TextColor={Colors.white}
              backgroundColor={Colors.primary}
              styleButton={{ width: 80, paddingVertical: 10 }}
              containButton={{ alignSelf: "flex-start" }}
            />
          </View>
        </View>
      </ScrollView>
      <ContactModal
        modalVisible={modalVisible.contact}
        cancelModal={() => setModalVisible({ ...modalVisible, contact: false })}
      />
      <Modal
        isVisible={isModalVisible}
        onBackdropPress={() => setModalVisible(false)}
        onSwipeComplete={() => setModalVisible(false)}
        swipeDirection="down"
      >
        <View style={{
          backgroundColor: "#fff",
          position: "absolute",
          bottom: "-3%",
          left: "-5%",
          right: "-5%",
          borderTopRightRadius: 20,
          borderTopLeftRadius: 20,
          paddingBottom: Platform.OS === "android" ? "5%" : "10%"
        }}>
          
        </View>
      </Modal>
    </Container>
  );
};
export default specialistProfileScreen;
