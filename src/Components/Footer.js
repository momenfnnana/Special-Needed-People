import React from 'react';
import { View, TouchableOpacity, Image } from 'react-native';
import styles from './Component.style';
const Footer = ({
    HomeVisible,
    personVisible,
    NotificationVisible,
    togglePersonScreen,
    toggleCalenderScreen,
    toggleHomeScreen,
    styleProps
}) => {
    return (
        <>
            {HomeVisible === true &&
                (
                    <View style={[styles.footerContainer, styleProps]}>
                        <TouchableOpacity onPress={togglePersonScreen}>
                            <Image source={require('../../assets/images/person_light.png')} />
                        </TouchableOpacity>
                        <TouchableOpacity onPress={toggleCalenderScreen}>
                            <Image source={require('../../assets/images/calendar_light.png')} />
                        </TouchableOpacity>
                        <TouchableOpacity onPress={toggleHomeScreen}>
                            <Image source={require('../../assets/images/home_dark.png')} />
                        </TouchableOpacity>
                    </View>

                )
            }
            {personVisible === true &&
                (
                    <View style={[styles.footerContainer, styleProps]}>
                        <TouchableOpacity onPress={togglePersonScreen}>
                            <Image source={require('../../assets/images/person_dark.png')} />
                        </TouchableOpacity>
                        <TouchableOpacity onPress={toggleCalenderScreen}>
                            <Image source={require('../../assets/images/calendar_light.png')} />
                        </TouchableOpacity>
                        <TouchableOpacity onPress={toggleHomeScreen}>
                            <Image source={require('../../assets/images/home_light.png')} />
                        </TouchableOpacity>
                    </View>

                )
            }
            {NotificationVisible === true &&
                (
                    <View style={[styles.footerContainer, styleProps]}>
                        <TouchableOpacity onPress={togglePersonScreen}>
                            <Image source={require('../../assets/images/person_light.png')} />
                        </TouchableOpacity>
                        <TouchableOpacity onPress={toggleCalenderScreen}>
                            <Image source={require('../../assets/images/calendar_dark.png')} />
                        </TouchableOpacity>
                        <TouchableOpacity onPress={toggleHomeScreen}>
                            <Image source={require('../../assets/images/home_light.png')} />
                        </TouchableOpacity>
                    </View>
                )
            }
        </>
    )
}
export default Footer;