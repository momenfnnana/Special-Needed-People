import { StyleSheet, Dimensions } from "react-native";
import { Colors, Constant } from "../../Constant";
const SCREEN_WIDTH = Dimensions.get("window").width;
const SCREEN_HEIGHT = Dimensions.get("window").height;
const styles = StyleSheet.create({
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
  containImage: {
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 4,
    },
    shadowOpacity: 0.3,
    shadowRadius: 4.65,
    elevation: 8,
    borderRadius: 80,
    justifyContent: "center",
    alignItems: "center",
    height: 160,
    width: 160,
    alignSelf: "center",
    marginBottom: -80,
    position: "relative",
    overflow: "hidden",
    backgroundColor: Colors.primary,
  },
  image: {
    position: "absolute",
    width: "100%",
    height: "100%",
  },
  rowText: {
    flexDirection: "row-reverse",
    justifyContent: "space-between",
    alignItems: "center",
    marginHorizontal: 25,
  },
  title: {
    color: Colors.secondary,
    fontSize: 17,
  },
  valueRow: {
    color: Colors.semiGray,
    fontSize: 15,
  },
});
export default styles;
