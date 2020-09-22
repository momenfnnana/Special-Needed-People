import { StyleSheet, Dimensions } from "react-native";
import { Colors, Constant } from "../../Constant";
const SCREEN_WIDTH = Dimensions.get("window").width;
const SCREEN_HEIGHT = Dimensions.get("window").height;
const styles = StyleSheet.create({
  title: {
    marginTop: 30,
    marginBottom: 8,
    // right: "5%",
    fontFamily: "ArbFONTS-Montserrat-Arabic-SemiBold",
    color: Colors.secondary,
    fontSize: 15,
  },
  detailsText: {
    fontSize: 10,
    color: Colors.semiGray,
    fontFamily: "ArbFONTS-Montserrat-Arabic-Regular",
    paddingHorizontal: 20,
    lineHeight: 20,
    fontSize: 12,
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
