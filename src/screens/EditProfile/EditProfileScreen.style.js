import { StyleSheet, Dimensions } from "react-native";
import { Colors } from "../../Constant";
const styles = StyleSheet.create({
  containUploadImage: {
    marginTop: "30%",
    justifyContent: "center",
    alignItems: "center",
    marginBottom: 20,
  },
  uploadImageBtn: {
    justifyContent: "center",
    alignItems: "center",
    width: 120,
    height: 120,
    borderRadius: 60,
    position: "relative",
    overflow: "hidden",
    zIndex: 1,
    marginBottom: 5,
  },
  containImage: {
    position: "absolute",
    zIndex: 0,
    width: "100%",
    height: "100%",
    backgroundColor: "#00000060",
  },
  image: {
    position: "absolute",
    zIndex: -1,
    width: "100%",
    height: "100%",
  },
  imageIcon: {
    position: "absolute",
    bottom: 8,
    zIndex: 1,
    color: Colors.white,
    fontSize: 22,
  },
  label: {
    color: "#616161",
    fontSize: 16,
    marginBottom: 8,
  },
  containInput: {
    paddingHorizontal: 10,
    paddingVertical: 15,
    borderRadius: 30,
    borderWidth: 1.5,
    borderColor: Colors.borderGray,
    justifyContent: "center",
    alignItems: "center",
  },
  input: {
    width: "100%",
    fontFamily: "ArbFONTS-Montserrat-Arabic-SemiBold",
    color: Colors.primary,
  },
  saveButton: {
    position: "absolute",
    bottom: "3%",
    alignSelf: "center",
  },
  container: {
    flex: 1,
    backgroundColor: Colors.white,
  },
  formContainer: {
    flex: 1,
    paddingHorizontal: 20,
    marginTop: 15,
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
