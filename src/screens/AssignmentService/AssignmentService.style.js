import { StyleSheet, Dimensions } from "react-native";
import { Colors, Constant } from "../../Constant";
const SCREEN_WIDTH = Dimensions.get("window").width;
const SCREEN_HEIGHT = Dimensions.get("window").height;
const styles = StyleSheet.create({
  title: {
    right: "5%",
    fontFamily: "ArbFONTS-Montserrat-Arabic-SemiBold",
    color: Colors.secondary,
  },
  time: {
    marginTop: 2,
    fontSize: 13,
    color: Colors.semiGray,
    fontFamily: "ArbFONTS-Montserrat-Arabic-Regular",
    lineHeight: 20,
    textAlign: "right",
    right: "5%",
  },
  sallaryContainer: {
    flexDirection: "row-reverse",
    right: "37%",
    marginTop: "2%",
  },
  salary: {
    color: Colors.primary,
    fontFamily: "ArbFONTS-Montserrat-Arabic-Medium",
    marginRight: "2%",
  },
  modalTitle: {
    color: Colors.primary,
    fontSize: 12,
    fontFamily: "ArbFONTS-Montserrat-Arabic-Medium",
    marginTop: "5%",
  },
  containHeaderImage: {
    borderRadius: 30,
    justifyContent: "center",
    alignItems: "center",
    height: 200,
    width: 200,
    alignSelf: "center",
    marginBottom: -90,
    position: "relative",
    overflow: "hidden",
  },
  imageHeader: {
    position: "absolute",
    width: "100%",
    height: "100%",
    zIndex: -1,
  },
  logoHeader: {
    position: "absolute",
    bottom: "-32%",
    left: "2%",
    width: "55%",
    resizeMode: "contain",
    zIndex: 1000,
  },
  overlay: {
    position: "absolute",
    width: "100%",
    height: "100%",
    zIndex: 0,
    backgroundColor: Colors.secondary + 43,
  },
  myStarStyle: {
    color: "#FFC107",
    backgroundColor: "transparent",
    fontSize: 35,
  },
  myEmptyStarStyle: {
    color: Colors.semiGray + 50,
  },
});
export default styles;
