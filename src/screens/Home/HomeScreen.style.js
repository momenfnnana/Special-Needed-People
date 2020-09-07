import { StyleSheet, Dimensions } from 'react-native';
import { Colors, Constant } from '../../Constant';
const SCREEN_WIDTH = Dimensions.get('window').width;
const SCREEN_HEIGHT = Dimensions.get('window').height;
const styles = StyleSheet.create({
    centers: {
        fontSize: 14,
        color: Colors.secondary,
        fontFamily: "ArbFONTS-Montserrat-Arabic-SemiBold",
        marginRight: "5%",
        top: Constant.space
    },
    myStarStyle: {
        color: 'yellow',
        backgroundColor: 'transparent',
        fontSize:50,
        textShadowColor: Colors.primary,
        textShadowOffset: { width: 1, height: 1 },
        textShadowRadius: 2,
    },
    myEmptyStarStyle: {
        color: 'white',
    }
})
export default styles;