import { StyleSheet, Dimensions } from 'react-native';
import { Colors, Constant } from '../../Constant';
const SCREEN_WIDTH = Dimensions.get('window').width;
const SCREEN_HEIGHT = Dimensions.get('window').height;
const styles = StyleSheet.create({
    centers: {
        fontSize: 14,
        color: Colors.secondary,
        fontFamily: "ArbFONTS-Montserrat-Arabic-SemiBold",
        marginRight: "5%"
    }
})
export default styles;