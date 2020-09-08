import React from 'react';
import { View, Text, ScrollView } from 'react-native';
import { ThickHeader, SpecialistsCard } from '../../Components/Index';
import { Colors, Constant } from '../../Constant';
import { FontAwesome5 } from '@expo/vector-icons';
import { Specialists } from '../../FakeData/Index';
const ServiceDetails = () => {
    console.log("Specialists", Specialists);
    return (
        <ScrollView style={{}}>
            <ThickHeader />
            <Text style={{
                right: "5%",
                fontFamily: "ArbFONTS-Montserrat-Arabic-SemiBold",
                color: Colors.secondary
            }}>التفاصيل</Text>
            <Text style={{
                fontSize: 10,
                color: Colors.semiGray,
                fontFamily: "ArbFONTS-Montserrat-Arabic-Regular",
                paddingHorizontal: 20,
                lineHeight: 20
            }}>هذا النص هو مثال لنص يمكن أن يستبدل في نفس المساحة، لقد تم توليد هذا النص من مولد النص العربى، حيث يمكنك أن تولد مثل هذا النص أو العديد من النصوص الأخرى إضافة إلى زيادة عدد الحروف التى يولدها التطبيق.
إذا كنت تحتاج إلى عدد أكبر من الفقرات يتيح لك مولد النص العربى زيادة عدد الفقرات كما تريد، النص</Text>
            <View style={{ marginTop: "5%" }}>
                <Text style={{
                    right: "5%",
                    fontFamily: "ArbFONTS-Montserrat-Arabic-SemiBold",
                    color: Colors.secondary
                }}>سعر الحجز</Text>
                <View style={{ flexDirection: "row-reverse", right: "37%", marginTop: "2%" }}>
                    <FontAwesome5 name="money-bill-wave" size={24} color={Colors.primary} />
                    <Text style={{
                        color: Colors.primary,
                        fontFamily: "ArbFONTS-Montserrat-Arabic-Medium",
                        marginRight: "2%"
                    }}>120<Text>ريال</Text></Text>
                </View>
            </View>
            <View style={{ marginTop: "5%" }}>
                <Text style={{
                    right: "5%",
                    fontFamily: "ArbFONTS-Montserrat-Arabic-SemiBold",
                    color: Colors.secondary
                }}>الأخصائيين</Text>
                {
                    Specialists.map((i, index) => {
                        return (
                            <View key={index.toString()}>
                                <SpecialistsCard key={index.toString()} data={i} />
                            </View>
                        )
                    })
                }
            </View>
        </ScrollView>
    )
}
export default ServiceDetails;