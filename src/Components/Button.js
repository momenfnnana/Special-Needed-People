import React from 'react';
import { View, Text, TouchableOpacity } from 'react-native';
import styles from './Component.style';
const Button = ({ backgroundColor, borderColor, borderWidth, TextColor, title, onPress }) => {
    return (
        <View>
            <TouchableOpacity style={[styles.ButtonContainer, {
                backgroundColor: backgroundColor,
                borderColor: borderColor,
                borderWidth: borderWidth
            }]} onPress={onPress}>
                <Text style={[styles.ButtonTitle, { color: TextColor }]}>{title}</Text>
            </TouchableOpacity>
        </View>
    )
}
export default Button;