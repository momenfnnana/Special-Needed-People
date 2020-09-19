import { StyleSheet, Dimensions } from "react-native";
import { Colors } from "../../Constant";
const SCREEN_HEIGHT = Dimensions.get("window").height;
const SCREEN_WIDTH = Dimensions.get("window").width;
const styles = StyleSheet.create({
  headerStyle: {
    position: "absolute",
    top: "-6.5%",
    zIndex: 10,
  },
  modalContainer: {
    backgroundColor: Colors.primary,
    alignItems: "center",
    justifyContent: "center",
    borderRadius: 15,
    paddingBottom: "7%",
    height: SCREEN_HEIGHT,
  },
  modalTitle: {
    color: Colors.primary,
    fontSize: 12,
    fontFamily: "ArbFONTS-Montserrat-Arabic-Medium",
    marginTop: "5%",
  },
  savedOrderTitle: {
    color: Colors.white,
    fontFamily: "ArbFONTS-Montserrat-Arabic-Medium",
    fontSize: 26,
  },
  thanksMumDad: {
    color: Colors.white,
    fontFamily: "ArbFONTS-Montserrat-Arabic-Medium",
    fontSize: 22,
  },
  checkOutMsg: {
    color: Colors.white,
    fontFamily: "ArbFONTS-Montserrat-Arabic-Regular",
    fontSize: 13,
  },
  expiryDate: {
    borderBottomColor: Colors.primary + 33,
    borderBottomWidth: 1,
    width: SCREEN_WIDTH / 3,
    textAlign: "right",
    fontFamily: "ArbFONTS-Montserrat-Arabic-Medium",
    fontSize: 11,
    color: Colors.primary,
  },
});
export default styles;
