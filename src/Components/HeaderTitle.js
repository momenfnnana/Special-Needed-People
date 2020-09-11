import React from 'react'
import {
    SafeAreaView,
    View,
    Text,
    ImageBackground,
    TouchableOpacity
} from 'react-native';
import styles from './Component.style';
import { AntDesign } from '@expo/vector-icons';
import { Colors } from 'react-native/Libraries/NewAppScreen';
const HeaderTitle = ({ title, backButtonVisible, goBack, propsStyle }) => {
    return (
        <SafeAreaView style={[styles.Headercontainer, propsStyle]}>
            <ImageBackground style={styles.HeaderImageBackground} source={require('../../assets/images/HeaderTitle.png')}>
                <View>
                    <Text style={styles.Headertitle}>{title}</Text>
                    {backButtonVisible === true ?
                        (<TouchableOpacity onPress={goBack} style={styles.HeaderBackButton}>
                            <AntDesign name="arrowright" size={24} color={Colors.white} />
                        </TouchableOpacity>) :
                        null
                    }
                </View>
            </ImageBackground>
        </SafeAreaView>
    )
}
export default HeaderTitle;