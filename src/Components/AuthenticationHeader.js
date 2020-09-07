import React from 'react';
import { View, Text, Dimensions, Image, SafeAreaView } from 'react-native';
import { Colors } from '../Constant';
import { LinearGradient } from 'expo-linear-gradient';
import { StatusBar } from 'expo-status-bar';

const SCREEN_HEIGHT = Dimensions.get('window').height;
const SCREEN_WIDTH = Dimensions.get('window').width;
const Header = ({ name }) => {
    return (
        <SafeAreaView style={{ position: "absolute", top: 0, alignSelf: "center" }}>
            <StatusBar style="light" />
            <LinearGradient
                colors={[Colors.primary, Colors.white]}
                style={{ alignItems: 'center', width: SCREEN_WIDTH }}>
                <Text style={{
                    color: Colors.white,
                    fontSize: 18,
                    fontFamily: "ArbFONTS-Montserrat-Arabic-SemiBold",
                    position: "absolute",
                    top: "10%"
                }}>{name}</Text>
                <Image style={{ marginTop: SCREEN_HEIGHT / 10 }} source={require('../../assets/images/LightLogo2.png')} />
            </LinearGradient>
        </SafeAreaView>
    )
}
export default Header;