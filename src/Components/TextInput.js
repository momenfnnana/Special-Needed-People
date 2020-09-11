import React from 'react';
import { View, Text, TextInput as Input } from 'react-native';
import { Colors } from '../Constant';
import styles from './Component.style';
const TextInput = ({ value, setValue, placeholder, password, keyboardType, marginVertical }) => {
    return (
        <View>
            <Input
                value={value}
                onChangeText={setValue}
                placeholder={placeholder}
                style={[styles.textInput, { marginVertical: marginVertical }]}
                placeholderTextColor={Colors.primary}
                secureTextEntry={password}
                keyboardType={keyboardType}
            />
        </View>
    )
}
export default TextInput;