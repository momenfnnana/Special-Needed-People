import React, { useState } from 'react';
import { View, Text, Dimensions } from 'react-native';
import { Header, TextInput, Button } from '../../../Components/Index';
import styles from './SignUpScreen.style';
import { Colors } from '../../../Constant';
const SCREEN_WIDTH = Dimensions.get('window').width;

const SignUp = () => {
    const [userName, setUserName] = useState('');
    const [email, setEmail] = useState('');
    const [mobileNumber, setMobileNumber] = useState('');
    const [password, setPassword] = useState('');
    return (
        <View style={{ flex: 1 }}>
            <Header name="تسجيل حساب جديد" />
            <View style={{ flex: 1, justifyContent: "center", marginTop: "50%" }}>
                <TextInput value={userName} setValue={setUserName} password={false} placeholder="اسم ولي الامر" keyboardType="default" marginVertical="3%" />
                <TextInput value={email} setValue={setEmail} password={false} placeholder="البريد الإلكتروني" keyboardType="email-address" marginVertical="3%" />
                <TextInput value={mobileNumber} setValue={setMobileNumber} password={false} placeholder="رقم الجوال" keyboardType="numeric" marginVertical="3%" />
                <TextInput value={password} setValue={setPassword} password={true} placeholder="كلمة المرور" keyboardType="default" marginVertical="3%" />
                <Text style={styles.text}>كلمة المرور يجب ان لا تتجاوز 8 أحرف</Text>
                <View style={{ flexDirection: "row-reverse", marginTop: "3%", alignItems: "center" }}>
                    <View style={{
                        height: 15,
                        width: 15,
                        backgroundColor: Colors.white,
                        borderRadius: 10,
                        justifyContent: "center",
                        alignItems: "center",
                        borderColor: Colors.primary,
                        borderWidth: 1
                    }}>
                        <View style={{
                            height: 10,
                            width: 10,
                            backgroundColor: Colors.primary,
                            borderRadius: 10
                        }} />
                    </View>
                    <Text style={styles.agree}>أوافق على كافة الشروط والأحكام</Text>
                </View>
                <Button title="تسجيل حساب جديد" TextColor={Colors.white} backgroundColor={Colors.primary} />
                <View style={{ flexDirection: "row", justifyContent: "center", alignItems: "center", marginVertical: "3%" }}>
                    <View style={{ height: 1, width: SCREEN_WIDTH / 2.5, backgroundColor: Colors.primary + 50 }} />
                    <Text style={{ marginHorizontal: "4%", color: Colors.primary, fontFamily: "ArbFONTS-Montserrat-Arabic-Regular" }}>أو</Text>
                    <View style={{ height: 1, width: SCREEN_WIDTH / 2.5, backgroundColor: Colors.primary + 50 }} />
                </View>
                <Button title="تسجيل الدخول" TextColor={Colors.primary} backgroundColor={Colors.white} borderColor={Colors.primary} borderWidth={1} />
            </View>
        </View>
    )
}
export default SignUp;