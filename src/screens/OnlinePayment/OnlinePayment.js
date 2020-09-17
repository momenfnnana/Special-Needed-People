import React, { useState } from 'react';
import { Text, View, TouchableOpacity, Dimensions, Image } from 'react-native';
import { Container, HeaderTitle, SpecialPaymentInput, TextInput, Button } from '../../Components/Index';
import { FontAwesome } from '@expo/vector-icons';
import { Colors } from '../../Constant';
import DateTimePickerModal from "react-native-modal-datetime-picker";
import Modal from 'react-native-modal';
import styles from './OnlinePayment.style';
const SCREEN_WIDTH = Dimensions.get('window').width;
const SCREEN_HEIGHT = Dimensions.get('window').height;
const OnlinePayment = ({ navigation }) => {
    const [isDatePickerVisible, setDatePickerVisibility] = useState(false);
    const [successModal, setSuccessModal] = useState(false);
    const [selectedDate, setSelectedDate] = useState(null)

    const hideDatePicker = () => {
        setDatePickerVisibility(false);
    };

    const handleConfirm = (date) => {
        console.log("A date has been picked: ", date);
        setSelectedDate(date)
        hideDatePicker();
    };

    return (
        <Container>
            <HeaderTitle title="الدفع الالكتروني"
                goBack={() => navigation.goBack()}
                backButtonVisible={true}
                propsStyle={styles.headerStyle} />
            <View style={{ paddingTop: "30%", alignSelf: "center" }}>
                <View>
                    <TextInput placeholder="رقم البطاقة" marginVertical={20} />
                    <FontAwesome name="cc-visa" size={20} color={Colors.primary} style={{ position: "absolute", top: "35%" }} />
                </View>
                <TextInput placeholder="اسم حامل البطاقة" marginVertical={20} />
                <View style={{ flexDirection: "row", justifyContent: "space-between" }}>
                    <TouchableOpacity style={{ marginVertical: 10 }} onPress={() => setDatePickerVisibility(true)}>
                        <Text style={styles.expiryDate}>تاريخ الإنتهاء</Text>
                    </TouchableOpacity>
                    <SpecialPaymentInput placeholder="الرمز السري" password={true} />
                </View>
                <DateTimePickerModal
                    isVisible={isDatePickerVisible}
                    mode="date"
                    onConfirm={handleConfirm}
                    onCancel={hideDatePicker}
                />
            </View>
            <View style={{ marginTop: "10%" }}>
                <Button title="دفع وتأكيد" TextColor={Colors.white} backgroundColor={Colors.primary} onPress={() => setSuccessModal(true)} alignSelf="center" />
            </View>
            <Modal
                isVisible={successModal}
                onBackdropPress={() => setSuccessModal(false)}
                onSwipeComplete={() => setSuccessModal(false)}
                swipeDirection="down"
                style={{ width: SCREEN_WIDTH, height: SCREEN_HEIGHT, alignSelf: "center" }}
            // backdropColor="transparent"
            >
                <View style={styles.modalContainer}>
                    <View style={{ justifyContent: "center", alignItems: "center", marginTop: "-10%" }}>
                        <Image source={require('../../../assets/images/SuccessFullScreen.png')} />
                        <Text style={styles.savedOrderTitle}>تم حجز الطلب بنجاح</Text>
                        <Text style={styles.thanksMumDad}>شكراً ماما-بابا على اهتمامكم بي</Text>
                        <Text style={styles.checkOutMsg}>تفقد الرسائل النصية لتأكيد الطلب</Text>
                    </View>
                    <View style={{ position: "absolute", bottom: 40 }}>
                        <Button title="تم" TextColor={Colors.primary} backgroundColor={Colors.white} />
                        <TouchableOpacity style={{ marginTop: "3%" }} onPress={() => setSuccessModal(false)}>
                            <Text style={{ color: Colors.white, alignSelf: "center", fontSize: 12, fontFamily: "ArbFONTS-Montserrat-Arabic-Regular" }}>تراجع عن الحجز</Text>
                        </TouchableOpacity>
                    </View>
                </View>
            </Modal>
        </Container>
    )
}
export default OnlinePayment;