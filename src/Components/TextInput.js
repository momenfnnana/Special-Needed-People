import React from 'react';
import { View, Text, TextInput as Input, Dimensions } from 'react-native';
import { Colors } from '../Constant';
import styles from '../screens/Splash/SplashScreen.style';
const SCREEN_WIDTH = Dimensions.get('window').width;
const TextInput = ({ value, setValue, placeholder, password, keyboardType, marginVertical }) => {
    return (
        <View>
            <Input
                value={value}
                onChangeText={setValue}
                placeholder={placeholder}
                style={{
                    borderBottomColor: Colors.primary + 33,
                    borderBottomWidth: 1,
                    width: SCREEN_WIDTH / 1.1,
                    textAlign: "right",
                    marginVertical: marginVertical,
                    fontFamily: "ArbFONTS-Montserrat-Arabic-Medium",
                    fontSize:11
                }}
                placeholderTextColor={Colors.primary}
                secureTextEntry={password}
                keyboardType={keyboardType}
            />
        </View>
    )
}
export default TextInput;