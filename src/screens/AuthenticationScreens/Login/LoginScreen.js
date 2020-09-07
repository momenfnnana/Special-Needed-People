import React, { useState } from 'react';
import { View, Text, Dimensions, TouchableOpacity } from 'react-native';
import { Colors } from '../../../Constant';
import { TextInput, Button, Header } from '../../../Components/Index';
import styles from './LoginScreenstyle';

const SCREEN_WIDTH = Dimensions.get('window').width;
const Login = () => {
    const [userName, setUserName] = useState('')
    const [password, setPassword] = useState('')
    return (
        <View style={{ flex: 1, justifyContent: "center" }}>
            <Header name="تسجيل الدخول" />
            <View style={{ flex: 1, justifyContent: "center", marginTop: "50%" }}>
                <TextInput value={userName} setValue={setUserName} password={false} placeholder="البريد الإلكتروني" keyboardType="email-address" marginVertical="5%" />
                <TextInput value={password} setValue={setPassword} password={true} placeholder="كلمة المرور" keyboardType="default" marginVertical="5%" />
                <Text style={styles.text}>كلمة المرور يجب ان لا تتجاوز 8 أحرف</Text>
                <View style={{ marginTop: "10%" }}>
                    <Button title="تسجيل الدخول" TextColor={Colors.white} backgroundColor={Colors.primary} />
                    <View style={{ flexDirection: "row", justifyContent: "center", alignItems: "center", marginVertical: "3%" }}>
                        <View style={{ height: 1, width: SCREEN_WIDTH / 2.5, backgroundColor: Colors.primary + 50 }} />
                        <Text style={{ marginHorizontal: "4%", color: Colors.primary, fontFamily: "ArbFONTS-Montserrat-Arabic-Regular" }}>أو</Text>
                        <View style={{ height: 1, width: SCREEN_WIDTH / 2.5, backgroundColor: Colors.primary + 50 }} />
                    </View>
                    <Button title="تسجيل حساب جديد" TextColor={Colors.primary} borderColor={Colors.primary} borderWidth={1} />
                </View>
                <TouchableOpacity style={{ position: "absolute", bottom: 10, alignSelf: "center" }}>
                    <Text style={{ color: Colors.primary, fontFamily: "ArbFONTS-Montserrat-Arabic-Regular" }}>هل نسيت كلمة المرور ؟</Text>
                </TouchableOpacity>
            </View>
        </View>
    )
}
export default Login;