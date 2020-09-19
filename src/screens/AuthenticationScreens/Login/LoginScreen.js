import React, { useState, useContext } from "react";
import { View, Text, Dimensions, TouchableOpacity } from "react-native";
import { Colors } from "../../../Constant";
import { TextInput, Button, Header } from "../../../Components/Index";
import styles from "./LoginScreenstyle";
import { Context as AuthContext } from "../../../Contexts/AuthContext";
const SCREEN_WIDTH = Dimensions.get("window").width;
const Login = ({ navigation }) => {
  const [userName, setUserName] = useState("");
  const [password, setPassword] = useState("");
  const { SignIn } = useContext(AuthContext);
  return (
    <View style={styles.container}>
      <Header name="تسجيل الدخول" />
      <View style={styles.formContainer}>
        <TextInput
          value={userName}
          setValue={setUserName}
          password={false}
          placeholder="البريد الإلكتروني"
          keyboardType="email-address"
          marginVertical="5%"
        />
        <TextInput
          value={password}
          setValue={setPassword}
          password={true}
          placeholder="كلمة المرور"
          keyboardType="default"
          marginVertical="5%"
        />
        <Text style={styles.text}>كلمة المرور يجب ان لا تتجاوز 8 أحرف</Text>
        <View style={{ marginTop: "10%" }}>
          <Button
            onPress={() => SignIn("ahmad")}
            title="تسجيل الدخول"
            TextColor={Colors.white}
            backgroundColor={Colors.primary}
          />
          <View style={styles.orContainer}>
            <View style={styles.line} />
            <Text style={styles.or}>أو</Text>
            <View style={styles.line} />
          </View>
          <Button
            onPress={() => navigation.navigate("SignUp")}
            title="تسجيل حساب جديد"
            TextColor={Colors.primary}
            borderColor={Colors.primary}
            borderWidth={1}
          />
        </View>
        <TouchableOpacity style={styles.forgetPasswordContainer}>
          <Text style={styles.forgetPasswordText}>هل نسيت كلمة المرور ؟</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};
export default Login;
