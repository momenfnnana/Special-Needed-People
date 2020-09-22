import React, { useState } from "react";
import { View, Text, Image, TextInput, ScrollView } from "react-native";
import { Button, FormButton, HeaderTitle } from "../../Components/Index";
import { Colors } from "../../Constant";
import styles from "./ReportsScreen.style";
import Modal from "react-native-modal";
import DefaultText from "../../Components/DefaultText";

const ReportsScreen = ({ navigation }) => {
  const [data, setData] = useState({
    image: null,
    username: null,
    email: null,
    report: null,
  });
  const [modalVisible, setIsModalVisible] = useState(false);

  return (
    <View style={styles.container}>
      <HeaderTitle
        title="شكاوى واقتراحات"
        goBack={() => navigation.pop()}
        backButtonVisible={true}
        propsStyle={{
          position: "absolute",
          top: "-5%",
          zIndex: 10,
        }}
      />
      <ScrollView>
        <View style={styles.formContainer}>
          <View style={{ marginVertical: 15 }}>
            <DefaultText textStyle={styles.label}>الاسم</DefaultText>
            <View style={styles.containInput}>
              <TextInput
                placeholder={"محمد أحمد"}
                placeholderTextColor={Colors.borderGray}
                value={data.username}
                onChange={(val) => setData({ ...data, username: val })}
                style={styles.input}
              />
            </View>
          </View>
          <View style={{ marginVertical: 15 }}>
            <DefaultText textStyle={styles.label}>
              البريد الإلكتروني
            </DefaultText>
            <View style={styles.containInput}>
              <TextInput
                placeholder={"mkk@gmail.com"}
                placeholderTextColor={Colors.borderGray}
                value={data.username}
                onChange={(val) => setData({ ...data, username: val })}
                style={styles.input}
              />
            </View>
          </View>
          <View style={{ marginVertical: 15 }}>
            <DefaultText textStyle={styles.label}>
              الشكوى أو اقتراحات
            </DefaultText>
            <View style={styles.containInput}>
              <TextInput
                placeholder={"الشكوى ..."}
                placeholderTextColor={Colors.borderGray}
                value={data.report}
                onChange={(val) => setData({ ...data, report: val })}
                style={styles.input}
                multiline
                numberOfLines={13}
              />
            </View>
          </View>
          <View style={styles.saveButton}>
            <Button
              onPress={() => setIsModalVisible(true)}
              title="حفظ"
              backgroundColor={Colors.primary}
              TextColor={Colors.white}
            />
          </View>
        </View>
      </ScrollView>
      <Modal
        isVisible={modalVisible}
        onBackdropPress={() => setIsModalVisible(false)}
        onSwipeComplete={() => setIsModalVisible(false)}
        swipeDirection="down"
      >
        <View style={styles.modalContentContainer}>
          <Image
            style={{ marginTop: "10%" }}
            source={require("../../../assets/images/success.png")}
          />
          <Text style={styles.modalTitle}>هل تريد إرسال الشكوى؟</Text>
          <View style={{ flexDirection: "row-reverse", marginTop: "7%" }}>
            <FormButton
              onPress={() => {
                setIsModalVisible(false);
                setTimeout(() => {
                  navigation.navigate("Setting");
                }, 500);
              }}
              title="نعم"
              TextColor={Colors.secondary}
              borderColor={Colors.secondary}
            />
            <FormButton
              onPress={() => {
                setIsModalVisible(false);
              }}
              title="لا"
              TextColor={Colors.primary}
              borderColor={Colors.primary}
            />
          </View>
        </View>
      </Modal>
    </View>
  );
};
export default ReportsScreen;
