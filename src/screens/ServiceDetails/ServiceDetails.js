import React, { useState } from 'react';
import { View, Text, ScrollView, Dimensions } from 'react-native';
import { ThickHeader, SpecialistsCard, RateCard, Button, ModalSpecialistsCards } from '../../Components/Index';
import { Colors, Constant } from '../../Constant';
import { FontAwesome5 } from '@expo/vector-icons';
import { Specialists, Rates } from '../../FakeData/Index';
import styles from './ServiceDetails.style';
import Modal from 'react-native-modal';
const SCREEN_WIDTH = Dimensions.get('window').width;
const ServiceDetails = ({ navigation }) => {
    const [modalVisible, setModalVisible] = useState(false);
    return (
        <ScrollView style={{}}>
            <ThickHeader goBackVisible={true} goBack={() => navigation.goBack()} />
            <Text style={styles.title}>التفاصيل</Text>
            <Text style={styles.detailsText}>هذا النص هو مثال لنص يمكن أن يستبدل في نفس المساحة، لقد تم توليد هذا النص من مولد النص العربى، حيث يمكنك أن تولد مثل هذا النص أو العديد من النصوص الأخرى إضافة إلى زيادة عدد الحروف التى يولدها التطبيق.
إذا كنت تحتاج إلى عدد أكبر من الفقرات يتيح لك مولد النص العربى زيادة عدد الفقرات كما تريد، النص</Text>
            <View style={{ marginTop: "5%" }}>
                <Text style={styles.title}>سعر الحجز</Text>
                <View style={styles.sallaryContainer}>
                    <FontAwesome5 name="money-bill-wave" size={24} color={Colors.primary} />
                    <Text style={styles.salary}>120<Text>ريال</Text></Text>
                </View>
            </View>
            <View style={{ marginTop: "5%" }}>
                <Text style={styles.title}>الأخصائيين</Text>
                {
                    Specialists.map((i, index) => {
                        return (
                            <SpecialistsCard key={index.toString()} data={i} />
                        )
                    })
                }
                <Text style={styles.title}>التقييمات</Text>
                <ScrollView horizontal>
                    {
                        Rates.map((i, index) => {
                            return (
                                <RateCard key={index.toString()} data={i} />
                            )
                        })
                    }
                </ScrollView>
                <View style={{ alignItems: "center", marginBottom: "5%" }}>
                    <Button
                        onPress={() => setModalVisible(true)}
                        title="طلب الخدمة"
                        TextColor={Colors.white}
                        backgroundColor={Colors.primary} />
                </View>
            </View>
            <Modal
                isVisible={modalVisible}
                onBackdropPress={() => setModalVisible(false)}
                onSwipeComplete={() => setModalVisible(false)}
                swipeDirection="down"
                style={{ width: SCREEN_WIDTH / 1.3, alignSelf: "center" }}
            // backdropColor="transparent"
            >
                <View style={{
                    backgroundColor: "#fff",
                    alignItems: "center",
                    borderRadius: 15,
                    paddingBottom: "7%"
                }}>
                    <Text style={styles.modalTitle}>اختر الأخصائي</Text>
                    {
                        Specialists.map((i, index) => {
                            return (
                                <ModalSpecialistsCards key={index.toString()} data={i} onPress={() => console.log("asd")} />
                            )
                        })
                    }
                </View>
            </Modal>
        </ScrollView>
    )
}
export default ServiceDetails;