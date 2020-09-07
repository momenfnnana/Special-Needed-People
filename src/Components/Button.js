import React from 'react';
import { View, Text, TouchableOpacity, Dimensions } from 'react-native';
import { Colors } from '../Constant';
const SCREEN_WIDTH = Dimensions.get('window').width;
const Button = ({ backgroundColor, borderColor, borderWidth, TextColor, title, onPress }) => {
    return (
        <View>
            <TouchableOpacity style={{
                width: SCREEN_WIDTH / 1.1,
                backgroundColor: backgroundColor,
                paddingVertical: "5%",
                alignItems: "center",
                borderRadius: 10,
                marginVertical: "2%",
                borderColor: borderColor,
                borderWidth: borderWidth
            }}
                onPress={onPress}
            >
                <Text style={{ color: TextColor, fontSize: 15, fontFamily: "ArbFONTS-Montserrat-Arabic-Regular" }}>{title}</Text>
            </TouchableOpacity>
        </View>
    )
}
export default Button;