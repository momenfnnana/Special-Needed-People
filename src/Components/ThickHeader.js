import React from 'react';
import { Text, Image, SafeAreaView, TouchableOpacity } from 'react-native';
import styles from './Component.style';
import { Feather, MaterialCommunityIcons } from '@expo/vector-icons';
import { Colors } from '../Constant';
const ThickHeader = ({ goBack, goBackVisible, goSetting, settingVisible, aboveTitle, aboveTitleVisible, mainTitle, img }) => {
    return (
        <SafeAreaView>
            <Image style={styles.thickHeaderImageContainer} source={require('../../assets/images/thickHeader.png')} />
            <Image style={styles.thickHeaderLeftLogo} source={require('../../assets/images/Logo.png')} />
            {
                aboveTitleVisible === true ? <Text style={styles.ThickHeaderAboveTitle}>{aboveTitle}</Text> : null
            }
            <Image style={styles.thickHeaderMainImage} source={img} />
            <Text style={styles.ThickHeaderTitle}>{mainTitle}</Text>
            {
                goBackVisible === true ? <TouchableOpacity onPress={goBack} style={styles.ThickHeaderArrow}>
                    <Feather name="arrow-right" size={24} color={Colors.white} />
                </TouchableOpacity> : null
            }
            {
                settingVisible === true ? <TouchableOpacity onPress={goSetting} style={styles.ThickHeaderSetting}>
                    <MaterialCommunityIcons name="settings" size={24} color={Colors.white} />
                </TouchableOpacity> : null
            }
        </SafeAreaView>
    )
}
export default ThickHeader;