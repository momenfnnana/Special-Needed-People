import React from 'react';
import { View, Text, Image } from 'react-native';
import { Colors } from '../Constant';

const SpecialistsCard = ({ data }) => {
    return (
        <View style={{
            flexDirection: "row-reverse",
            alignItems: "center",
            right: "30%",
            marginVertical: "2%"
        }}>
            <Image source={data.img === null ? require('../../assets/images/UserImage.png') : data.img} />
            <View style={{
                marginRight: "2%"
            }}>
                <View style={{ flexDirection: "row-reverse", justifyContent: "space-between" }}>
                    <Text style={{
                        fontSize: 10,
                        color: Colors.primary,
                        fontFamily: "ArbFONTS-Montserrat-Arabic-Medium"
                    }}>{data.name}</Text>
                    <View style={{
                        flexDirection: "row-reverse",
                        alignItems: "center",
                    }}>
                        <Text style={{
                            marginRight: "25%",
                            color: data.status === "نشط الآن" ? Colors.green : Colors.red,
                            fontFamily: "ArbFONTS-Montserrat-Arabic-Regular",
                            fontSize: 9
                        }}>{data.status}</Text>
                        <View style={{
                            marginRight: "2%",
                            height: 10,
                            width: 10,
                            borderRadius: 10,
                            backgroundColor: data.status === "نشط الآن" ? Colors.green : Colors.red,

                        }} />
                    </View>
                </View>
                <Text style={{
                    fontSize: 8,
                    color: Colors.semiGray,
                    fontFamily: "ArbFONTS-Montserrat-Arabic-Regular"
                }}>{data.job}</Text>
            </View>
        </View>
    )
}
export default SpecialistsCard;