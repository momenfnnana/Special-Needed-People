import { StyleSheet, Dimensions } from "react-native";
import { Colors } from "../../Constant";
const SCREEN_WIDTH = Dimensions.get("window").width;
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: Colors.white,
  },
  formContainer: {
    flex: 1,
    // justifyContent: "center",
    alignItems: "center",
  },
  sonData: {
    color: Colors.secondary,
    fontSize: 14,
    fontFamily: "ArbFONTS-Montserrat-Arabic-Medium",
    alignSelf: "flex-end",
    marginRight: "5%",
  },
  uploadFile: {
    flexDirection: "row-reverse",
    justifyContent: "space-between",
    marginTop: "5%",
    width: SCREEN_WIDTH / 1.1,
  },
  pushFile: {
    fontSize: 12,
    color: Colors.primary,
    fontFamily: "ArbFONTS-Montserrat-Arabic-Medium",
    marginTop: "3%",
  },
  fileExtension: {
    fontSize: 9,
    color: Colors.semiGray,
    fontFamily: "ArbFONTS-Montserrat-Arabic-Medium",
    marginTop: "2%",
  },
  buttonContainer: {
    backgroundColor: Colors.primary,
    justifyContent: "center",
    alignItems: "center",
    paddingVertical: "3%",
    paddingHorizontal: "8%",
    borderRadius: 10,
  },
  buttonText: {
    color: Colors.white,
    fontSize: 15,
    fontFamily: "ArbFONTS-Montserrat-Arabic-Regular",
  },
  modalTitle: {
    fontSize: 18,
    color: Colors.secondary,
    fontFamily: "ArbFONTS-Montserrat-Arabic-Medium",
    marginTop: "5%",
    marginBottom: "3%",
  },
  modalQuestion: {
    fontSize: 14,
    color: Colors.primary,
    fontFamily: "ArbFONTS-Montserrat-Arabic-Medium",
  },
  modalContentContainer: {
    backgroundColor: "#fff",
    alignItems: "center",
    borderRadius: 20,
    paddingBottom: "7%",
  },
});
export default styles;
