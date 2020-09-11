import React, { useState } from 'react';
import { View, Text, TouchableOpacity, Image, Dimensions } from 'react-native';
import { Header, TextInput, Button, FormButton } from '../../../Components/Index';
import { Colors } from '../../../Constant';
import styles from './SonFormData.style';
import Modal from 'react-native-modal';
const SCREEN_WIDTH = Dimensions.get('window').width;
const SonFormData = ({ navigation }) => {
    const [userName, setUserName] = useState('');
    const [age, setAge] = useState('');
    const [status, setStatus] = useState('');
    const [isModalVisible, setIsModalVisible] = useState(false);
    return (
        <View style={styles.container}>
            <Header name="تسجيل بيانات الطفل" />
            <View style={styles.formContainer}>
                <Text style={styles.sonData}>بيانات الطفل</Text>
                <TextInput value={userName} setValue={setUserName} password={false} placeholder="اسم الطفل" keyboardType="default" marginVertical="3%" />
                <TextInput value={age} setValue={setAge} password={false} placeholder="العمر" keyboardType="default" marginVertical="3%" />
                <TextInput value={status} setValue={setStatus} password={false} placeholder="الحالة" keyboardType="default" marginVertical="3%" />
                <View style={styles.uploadFile}>
                    <View>
                        <Text style={styles.pushFile}>إرفاق تقرير لحالة الطفل</Text>
                        <Text style={styles.fileExtension}>الصيغ المسموح بها :pdf / docs / doc / jpeg </Text>
                    </View>
                    <TouchableOpacity style={styles.buttonContainer}>
                        <Text style={styles.buttonText}>رفع الملف</Text>
                    </TouchableOpacity>
                </View>
                <View style={{ position: "absolute", bottom: "3%" }}>
                    <Button onPress={() => setIsModalVisible(true)} title="حفظ البيانات" backgroundColor={Colors.primary} TextColor={Colors.white} />
                </View>
            </View>
            <Modal
                isVisible={isModalVisible}
                onBackdropPress={() => setIsModalVisible(false)}
                onSwipeComplete={() => setIsModalVisible(false)}
                swipeDirection="down"
                style={{ width: SCREEN_WIDTH / 1.3, alignSelf: "center" }}
            >
                <View style={{
                    backgroundColor: "#fff",
                    alignItems: "center",
                    borderRadius: 20,
                    paddingBottom: "7%"
                }}>
                    <Image style={{ marginTop: "10%" }} source={require('../../../../assets/images/success.png')} />
                    <Text style={styles.modalTitle}>تم تسجيل بيانات الطفل بنجاح</Text>
                    <Text style={styles.modalQuestion}>هل تريد تسجيل طفل آخر ؟</Text>
                    <View style={{ flexDirection: "row-reverse", marginTop: "7%" }}>
                        <FormButton onPress={() => {
                            setUserName(''),
                                setAge(''),
                                setStatus(''),
                                setIsModalVisible(false)
                        }} title="نعم" TextColor={Colors.secondary} borderColor={Colors.secondary} />
                        <FormButton onPress={() => {
                            setIsModalVisible(false),
                            navigation.navigate('Home')
                        }} title="لا" TextColor={Colors.primary} borderColor={Colors.primary} />
                    </View>
                </View>
            </Modal>
        </View>
    )
}
export default SonFormData;