import React, { useState } from "react";
import { View, Text, Image, TextInput, ScrollView } from "react-native";
import { Button, FormButton, HeaderTitle } from "../../Components/Index";
import { Colors } from "../../Constant";
import styles from "./ResetPasswordScreen.style";
import Modal from "react-native-modal";
import DefaultText from "../../Components/DefaultText";

const ResetPasswordScreen = ({ navigation }) => {
  const [data, setData] = useState({
    oldPassword: null,
    newPassword: null,
    confirmPassword: null,
  });
  const [modalVisible, setIsModalVisible] = useState(false);

  return (
    <View style={styles.container}>
      <HeaderTitle
        title="تعديل كلمة المرور"
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
            <DefaultText textStyle={styles.label}>
              كلمة السر القديمة
            </DefaultText>
            <View style={styles.containInput}>
              <TextInput
                secureTextEntry
                placeholder={"*********"}
                placeholderTextColor={Colors.borderGray}
                value={data.oldPassword}
                onChange={(val) => setData({ ...data, oldPassword: val })}
                style={styles.input}
              />
            </View>
          </View>
          <View style={{ marginVertical: 15 }}>
            <DefaultText textStyle={styles.label}>
              كلمة المرور الجديدة
            </DefaultText>
            <View style={styles.containInput}>
              <TextInput
                secureTextEntry
                placeholder={"*********"}
                placeholderTextColor={Colors.borderGray}
                value={data.newPassword}
                onChange={(val) => setData({ ...data, newPassword: val })}
                style={styles.input}
              />
            </View>
          </View>
          <View style={{ marginVertical: 15 }}>
            <DefaultText textStyle={styles.label}>
              تأكيد كلمة المرور الجديدة
            </DefaultText>
            <View style={styles.containInput}>
              <TextInput
                secureTextEntry
                placeholder={"*********"}
                placeholderTextColor={Colors.borderGray}
                value={data.confirmPassword}
                onChange={(val) => setData({ ...data, confirmPassword: val })}
                style={styles.input}
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
export default ResetPasswordScreen;
