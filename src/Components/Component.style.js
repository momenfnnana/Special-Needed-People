import { StyleSheet, Dimensions } from 'react-native';
import { Colors } from '../Constant';
const SCREEN_WIDTH = Dimensions.get('window').width
const SCREEN_HEIGHT = Dimensions.get('window').height
const styles = StyleSheet.create({
    Headercontainer: {
        top: "-5%",
        position: "relative",
        width: "100%"
    },
    HeaderImageBackground: {
        width: SCREEN_WIDTH,
        height: 150,
        top: "-7%",
        justifyContent: "flex-end"
    },
    Headertitle: {
        color: Colors.white,
        fontSize: 21,
        fontFamily: "ArbFONTS-Montserrat-Arabic-Regular",
        alignSelf: "center",
        marginBottom: "5%"
    },
    HeaderBackButton: {
        position: "absolute",
        right: "5%",
        top: "-15%"
    },
    myStarStyle: {
        color: 'yellow',
        backgroundColor: 'transparent',
        fontSize: 15,
        textShadowColor: Colors.primary,
        textShadowOffset: { width: 1, height: 1 },
        textShadowRadius: 2,
    },
    myEmptyStarStyle: {
        color: 'white',
    },
    centerTitle: {
        color: Colors.primary,
        fontSize: 10,
        fontFamily: "ArbFONTS-Montserrat-Arabic-Medium",
        marginVertical: 3
    },
    footerContainer: {
        flexDirection: "row",
        justifyContent: "space-around",
        backgroundColor: Colors.primary,
        paddingVertical: 20,
    },
    thickHeaderImageContainer: {
        width: SCREEN_WIDTH,
        height: SCREEN_HEIGHT/3
    },
    thickHeaderLeftLogo: {
        position: "absolute",
        right: 0,
        top: "3%"
    },
    ThickHeaderAboveTitle: {
        position: "absolute",
        top: "7%",
        alignSelf: "center",
        fontSize: 21,
        color: Colors.white,
        fontFamily: "ArbFONTS-Montserrat-Arabic-Medium"
    },
    thickHeaderMainImage: {
        position: "absolute",
        top: SCREEN_HEIGHT / 7,
        alignSelf: "center",
        width: 200,
        height: 200,
        resizeMode: "contain"
    },
    ThickHeaderTitle: {
        fontSize: 17,
        color: Colors.primary,
        fontFamily: "ArbFONTS-Montserrat-Arabic-SemiBold",
        marginTop: "13%",
        alignSelf: "center",
        width: "50%",
        textAlign: "center"
    },
    ThickHeaderArrow: {
        position: "absolute",
        top: "7%",
        right: "5%",
        height: 30,
        width: 30,
        alignItems: "flex-end",
        justifyContent: "flex-start"
    },
    ThickHeaderSetting: {
        position: "absolute",
        top: "7%",
        left: "5%",
        height: 30,
        width: 30,
        alignItems: "flex-end",
        justifyContent: "flex-start"
    },
})
export default styles;