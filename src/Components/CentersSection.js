import React from "react";
import { TouchableOpacity, Image, StyleSheet } from "react-native";
import { Colors } from "../Constant";
// import styles from "./Component.style";
import Card from "./Card";
import DefaultText from "./DefaultText";
const CentersSection = ({ Item, myNavigation }) => {
  const navigation = myNavigation;
  return (
    <Card styleCard={{ marginHorizontal: 15, marginBottom: 20 }}>
      <TouchableOpacity
        style={styles.containCard}
        onPress={() => navigation.navigate("CenterDetails", { _id: Item.id })}
      >
        <Image source={Item.img} style={styles.imageCard} />
        <DefaultText textStyle={styles.textCard}>{Item.title}</DefaultText>
      </TouchableOpacity>
    </Card>
  );
};

const styles = StyleSheet.create({
  containCard: {
    flexDirection: "row-reverse",
    alignItems: "center",
    paddingVertical: 10,
    paddingHorizontal: 7,
    flex: 1,
  },
  imageCard: {
    width: 70,
    height: 70,
    borderRadius: 35,
    borderColor: Colors.borderGray,
    borderWidth: 2,
    marginLeft: 15,
  },
  textCard: {
    flex: 1,
    color: Colors.secondary,
    fontSize: 14,
  },
});
export default CentersSection;
