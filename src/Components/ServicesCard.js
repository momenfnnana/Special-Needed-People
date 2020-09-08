import React from 'react';
import { View, Text, ImageBackground, Dimensions, Image } from 'react-native';
import { Colors } from '../Constant';
const SCREEN_WIDTH = Dimensions.get('window').width;
const SCREEN_HEIGHT = Dimensions.get('window').height;
const ServicesCard = ({ data }) => {
    return (
        <View style={{ flex: 1, alignItems: "center", marginVertical: 10 }}>
            <Image style={{
                width: SCREEN_WIDTH / 2.2,
                borderRadius: 20,
                height: SCREEN_HEIGHT / 3,
            }} source={data.item.img} />
            <Text style={{
                position: "absolute",
                bottom: "5%",
                alignSelf: "center",
                color: Colors.white,
                fontSize: 9,
                fontFamily: "ArbFONTS-Montserrat-Arabic-Medium",
                width: "70%",
                textAlign: "center"
            }}>{data.item.title}</Text>
            {/* <ImageBackground source={data.item.img} style={{
            width: SCREEN_WIDTH / 2.3,
            marginHorizontal: 10,
            height: "100%",
            marginVertical: 10,
            borderRadius: 50
        }}>
        </ImageBackground> */}
        </View>
    )
}
export default ServicesCard;