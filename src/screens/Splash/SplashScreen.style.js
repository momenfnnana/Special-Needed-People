import { StyleSheet, Dimensions } from "react-native";
import { Colors } from "../../Constant";
const SCREEN_WIDTH = Dimensions.get("window").width;
const SCREEN_HEIGHT = Dimensions.get("window").height;
import Constants from "expo-constants";

const styles = StyleSheet.create({
  topLogo: {
    position: "absolute",
    // top: Constants.statusBarHeight,
    right: "-5%",
    top: "-10%",
    zIndex: 10,
    width: "35%",
    height: "35%",
    resizeMode: "contain",
  },
  contentContainer: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  mainSplashImg: {
    width: SCREEN_WIDTH,
    height: SCREEN_HEIGHT,
    resizeMode: "cover",
    position: "absolute",
  },
  mainLogo: {
    // position: "absolute",
    height: 210,
    width: 270,
    resizeMode: "contain",
  },
  title: {
    color: Colors.secondary,
    fontSize: 20,
    fontFamily: "ArbFONTS-Montserrat-Arabic-Bold",
    // marginVertical: "3%",
  },
  stillForYou: {
    fontSize: 16,
    color: Colors.secondary,
    fontFamily: "ArbFONTS-Montserrat-Arabic-SemiBold",
  },
  bottomLogo: {
    position: "absolute",
    bottom: "-5%",
    left: "-5%",
    zIndex: 10,
    width: "35%",
    height: "35%",
    resizeMode: "contain",
  },
  placeholderStyle: {
    fontSize: 20,
    fontFamily: "ArbFONTS-Montserrat-Arabic-SemiBold",
  },
});
export default styles;
