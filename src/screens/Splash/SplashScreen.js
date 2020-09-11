import React, { useEffect } from 'react';
import { View, Text, Image } from 'react-native';
import styles from './SplashScreen.style';
const Splash = ({ navigation }) => {
    useEffect(() => {
        setTimeout(() => {
            navigation.navigate('Login')
        }, 3000);
    }, [])
    return (
        <View>
            <Image style={styles.topLogo} source={require('../../../assets/images/lightLogo.png')} />
            <Image style={styles.mainSplashImg} source={require('../../../assets/images/Splash.png')} />
            <View style={styles.contentContainer}>
                <Image source={require('../../../assets/images/MainLogo.png')} />
                <Text style={styles.title}>ظل</Text>
                <Text style={styles.stillForYou}>لكم سنظل</Text>
            </View>
            <Image style={styles.bottomLogo} source={require('../../../assets/images/lightLogo.png')} />
        </View>
    )
}
export default Splash;