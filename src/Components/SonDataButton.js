import React from 'react';
import { View, Text, TouchableOpacity } from 'react-native';
import styles from './Component.style';

const FormButton = ({ borderColor, TextColor, title, onPress }) => {
    return (
        <View>
            <TouchableOpacity style={[styles.addSonButton, { borderColor: borderColor }]} onPress={onPress}>
                <Text style={[styles.addSonButtonTitle, { color: TextColor }]}>{title}</Text>
            </TouchableOpacity>
        </View>
    )
}
export default FormButton;