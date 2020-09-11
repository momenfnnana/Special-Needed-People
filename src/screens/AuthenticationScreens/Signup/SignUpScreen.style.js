import { StyleSheet, Dimensions } from 'react-native';
import { Colors } from '../../../Constant';
const SCREEN_WIDTH = Dimensions.get('window').width;
const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: Colors.white
    },
    formContainer: {
        flex: 1,
        justifyContent: "center",
        marginTop: "50%",
        alignItems: "center"
    },
    agreeContainer: {
        flexDirection: "row-reverse",
        marginTop: "3%",
        alignItems: "center",
        alignSelf: "flex-end",
        right: "3%"
    },
    agreeCircle: {
        height: 10,
        width: 10,
        borderRadius: 10
    },
    agreeCircleContainer: {
        height: 15,
        width: 15,
        backgroundColor: Colors.white,
        borderRadius: 10,
        justifyContent: "center",
        alignItems: "center",
        borderColor: Colors.primary,
        borderWidth: 1
    },
    orContainer: {
        flexDirection: "row",
        justifyContent: "center",
        alignItems: "center",
        marginVertical: "3%"
    },
    line: {
        height: 1,
        width: SCREEN_WIDTH / 2.5,
        backgroundColor: Colors.primary + 50
    },
    orText: {
        marginHorizontal: "4%",
        color: Colors.primary,
        fontFamily: "ArbFONTS-Montserrat-Arabic-Regular"
    },
    text: {
        fontSize: 10,
        color: Colors.primary,
        fontFamily: "ArbFONTS-Montserrat-Arabic-Regular",
        alignSelf: "flex-end",
        marginRight: "5%"
    },
    agree: {
        color: Colors.primary,
        fontFamily: "ArbFONTS-Montserrat-Arabic-Regular",
        marginRight: "2%"
    }
})
export default styles;