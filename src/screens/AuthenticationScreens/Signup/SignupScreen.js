import React, { useState } from "react";
import { View, Text, TouchableOpacity } from "react-native";
import { Header, TextInput, Button } from "../../../Components/Index";
import styles from "./SignUpScreen.style";
import { Colors } from "../../../Constant";

const SignUp = ({ navigation }) => {
  const [userName, setUserName] = useState("");
  const [email, setEmail] = useState("");
  const [mobileNumber, setMobileNumber] = useState("");
  const [password, setPassword] = useState("");
  const [agreeButton, setAgreeButton] = useState(Colors.white);

  const toggleAgreeButton = () => {
    agreeButton === Colors.white
      ? setAgreeButton(Colors.primary)
      : setAgreeButton(Colors.white);
  };

  return (
    <View style={styles.container}>
      <Header name="تسجيل حساب جديد" />
      <View style={styles.formContainer}>
        <TextInput
          value={userName}
          setValue={setUserName}
          password={false}
          placeholder="اسم ولي الامر"
          keyboardType="default"
          marginVertical="3%"
        />
        <TextInput
          value={email}
          setValue={setEmail}
          password={false}
          placeholder="البريد الإلكتروني"
          keyboardType="email-address"
          marginVertical="3%"
        />
        <TextInput
          value={mobileNumber}
          setValue={setMobileNumber}
          password={false}
          placeholder="رقم الجوال"
          keyboardType="numeric"
          marginVertical="3%"
        />
        <TextInput
          value={password}
          setValue={setPassword}
          password={true}
          placeholder="كلمة المرور"
          keyboardType="default"
          marginVertical="3%"
        />
        <Text style={styles.text}>كلمة المرور يجب ان لا تتجاوز 8 أحرف</Text>
        <TouchableOpacity
          onPress={toggleAgreeButton}
          style={styles.agreeContainer}
        >
          <View style={styles.agreeCircleContainer}>
            <View
              style={[styles.agreeCircle, { backgroundColor: agreeButton }]}
            />
          </View>
          <Text style={styles.agree}>أوافق على كافة الشروط والأحكام</Text>
        </TouchableOpacity>
        <Button
          onPress={() => navigation.navigate("SonFormData")}
          title="تسجيل حساب جديد"
          TextColor={Colors.white}
          backgroundColor={Colors.primary}
        />
        <View style={styles.orContainer}>
          <View style={styles.line} />
          <Text style={styles.orText}>أو</Text>
          <View style={styles.line} />
        </View>
        <Button
          onPress={() => navigation.pop()}
          title="تسجيل الدخول"
          TextColor={Colors.primary}
          backgroundColor={Colors.white}
          borderColor={Colors.primary}
          borderWidth={1}
        />
      </View>
    </View>
  );
};
export default SignUp;
