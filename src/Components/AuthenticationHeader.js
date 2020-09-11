import React from 'react';
import { Text, Dimensions, Image, SafeAreaView } from 'react-native';
import { Colors } from '../Constant';
import { LinearGradient } from 'expo-linear-gradient';
import { StatusBar } from 'expo-status-bar';
import styles from './Component.style';

const SCREEN_HEIGHT = Dimensions.get('window').height;
const SCREEN_WIDTH = Dimensions.get('window').width;
const Header = ({ name }) => {
    return (
        <SafeAreaView style={styles.AuthenticationHeaderContainer}>
            <StatusBar style="light" />
            <LinearGradient
                colors={[Colors.primary, Colors.white]}
                style={styles.LinearGradient}>
                <Text style={styles.AuthenticationHeaderTitle}>{name}</Text>
                <Image style={styles.AuthenticationHeaderImage} source={require('../../assets/images/LightLogo2.png')} />
            </LinearGradient>
        </SafeAreaView>
    )
}
export default Header;