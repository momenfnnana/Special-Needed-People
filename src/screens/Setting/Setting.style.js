import { StyleSheet } from "react-native";
import { Colors } from "../../Constant";
const styles = StyleSheet.create({
  containImage: {
    borderWidth: 5,
    borderColor: Colors.primary,
    borderRadius: 80,
    justifyContent: "center",
    alignItems: "center",
    height: 160,
    width: 160,
    alignSelf: "center",
    marginBottom: -70,
    position: "relative",
    overflow: "hidden",
    backgroundColor: Colors.white,
  },
  containItem: {
    borderBottomColor: Colors.borderGray,
    borderBottomWidth: 1.5,
    // marginBottom: 25,
  },
  row: {
    flexDirection: "row-reverse",
    justifyContent: "space-between",
    alignItems: "center",
    // marginBottom: 10,
    marginVertical: 22,
  },
  containTextItem: {
    flexDirection: "row-reverse",
    alignItems: "center",
  },
  icon: {
    color: "#616161",
    fontSize: 24,
    marginLeft: 7,
  },
  text: {
    fontSize: 15,
    color: "#616161",
  },
  backIcon: {
    color: "#616161",
    fontSize: 27,
  },
});
export default styles;
