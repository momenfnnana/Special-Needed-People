import React from 'react';
import { View, Text, TouchableOpacity, Dimensions } from 'react-native';
import { Colors } from '../Constant';
const SCREEN_WIDTH = Dimensions.get('window').width;
const FormButton = ({ borderColor, TextColor, title, onPress }) => {
    return (
        <View>
            <TouchableOpacity style={{
                width: SCREEN_WIDTH / 3.5,
                backgroundColor: Colors.white,
                paddingVertical: "3%",
                alignItems: "center",
                justifyContent: "center",
                borderRadius: 5,
                marginVertical: "2%",
                borderColor: borderColor,
                borderWidth: 1.5,
                marginHorizontal: "1%"
            }}
                onPress={onPress}
            >
                <Text style={{ color: TextColor, fontSize: 15, fontFamily: "ArbFONTS-Montserrat-Arabic-Regular" }}>{title}</Text>
            </TouchableOpacity>
        </View>
    )
}
export default FormButton;