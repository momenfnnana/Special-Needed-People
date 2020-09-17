import { StyleSheet, Dimensions } from 'react-native';
import { Colors } from '../../Constant';

const SCREEN_WIDTH = Dimensions.get('window').width;
const SCREEN_HEIGHT = Dimensions.get('window').height;
const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: Colors.white
    },
    MapView: {
        height: SCREEN_HEIGHT,
        width: SCREEN_WIDTH
    },
    modalTitle: {
        color: Colors.primary,
        fontSize: 12,
        fontFamily: "ArbFONTS-Montserrat-Arabic-Medium",
        marginTop: "5%"
    }
})
export default styles;