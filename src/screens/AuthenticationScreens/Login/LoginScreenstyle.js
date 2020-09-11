import { StyleSheet, Dimensions } from 'react-native';
import { Colors } from '../../../Constant';
const SCREEN_WIDTH = Dimensions.get('window').width;

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: "center",
        backgroundColor: Colors.white,
        alignSelf: "center"
    },
    formContainer: {
        flex: 1,
        justifyContent: "center",
        marginTop: "50%",
        width: SCREEN_WIDTH,
        alignItems: "center"
    },
    orContainer: {
        flexDirection: "row",
        justifyContent: "center",
        alignItems: "center",
        marginVertical: "3%"
    },
    or: {
        marginHorizontal: "4%",
        color: Colors.primary,
        fontFamily: "ArbFONTS-Montserrat-Arabic-Regular"
    },
    line: {
        height: 1,
        width: SCREEN_WIDTH / 2.5,
        backgroundColor: Colors.primary + 50
    },
    text: {
        fontSize: 10,
        color: Colors.primary,
        fontFamily: "ArbFONTS-Montserrat-Arabic-Regular",
        width: SCREEN_WIDTH / 1.1
    },
    forgetPasswordContainer: {
        position: "absolute",
        bottom: 10,
        alignSelf: "center"
    },
    forgetPasswordText: {
        color: Colors.primary,
        fontFamily: "ArbFONTS-Montserrat-Arabic-Regular"
    }
})
export default styles;