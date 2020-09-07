import { StyleSheet, Dimensions } from 'react-native';
import { Colors } from '../../Constant';
const SCREEN_WIDTH = Dimensions.get('window').width;
const SCREEN_HEIGHT = Dimensions.get('window').height;
const styles = StyleSheet.create({
    topLogo: {
        position: "absolute",
        top: "-5%",
        right: "-5%",
        zIndex: 10
    },
    contentContainer: {
        position: "absolute",
        alignSelf: "center",
        top: SCREEN_HEIGHT / 2.7,
        zIndex: 10
    },
    mainSplashImg: {
        width: SCREEN_WIDTH,
        resizeMode: "cover"
    },
    title: {
        color: Colors.secondary,
        fontSize: 20,
        fontFamily: "ArbFONTS-Montserrat-Arabic-Bold",
        alignSelf: "center",
        marginVertical: "3%"
    },
    stillForYou: {
        fontSize: 16,
        color: Colors.secondary,
        fontFamily: "ArbFONTS-Montserrat-Arabic-SemiBold"
    },
    bottomLogo: {
        position: "absolute",
        bottom: "-2%",
        left: "2%",
        zIndex: 10
    },
    placeholderStyle: {
        fontSize: 20,
        fontFamily: "ArbFONTS-Montserrat-Arabic-SemiBold"
    }
})
export default styles;