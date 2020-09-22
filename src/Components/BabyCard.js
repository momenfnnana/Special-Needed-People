import React from "react";
import { View, StyleSheet, Image, TouchableOpacity } from "react-native";
import { Colors } from "../Constant";
import Button from "./Button";
import DefaultText from "./DefaultText";
import Baby from "../FakeData/Baby";

const BabyCard = ({ myNavigation }) => {
  const navigation = myNavigation;
  return (
    <View style={{ paddingHorizontal: 15 }}>
      {Baby.map((item, index) => (
        <TouchableOpacity
          onPress={() => navigation.navigate("BabyProfile", { _id: item.id })}
          key={index.toString()}
          style={styles.card}
        >
          <View style={[styles.row, { justifyContent: "flex-start" }]}>
            <Image source={item.img} style={styles.image} />
            <View>
              <DefaultText textStyle={{ fontSize: 19, color: Colors.primary }}>
                {item.childName}
              </DefaultText>
              <DefaultText textStyle={styles.text}>{item.status}</DefaultText>
              <DefaultText textStyle={styles.text}>{item.age}</DefaultText>
            </View>
          </View>
          <View style={[styles.row, { marginTop: 10 }]}>
            <Button
              containButton={{ flex: 0.48 }}
              TextColor={Colors.primary}
              borderColor={Colors.primary}
              title="تعديل"
              styleButton={styles.button}
              onPress={() =>
                navigation.navigate("EditChildInfo", { _id: item.id })
              }
            />
            <Button
              containButton={{ flex: 0.48 }}
              styleButton={styles.button}
              TextColor={Colors.red}
              borderColor={Colors.red}
              title="حدف"
            />
          </View>
        </TouchableOpacity>
      ))}
    </View>
  );
};

const styles = StyleSheet.create({
  card: {
    backgroundColor: Colors.white,
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 1,
    },
    shadowOpacity: 0.22,
    shadowRadius: 2.22,
    elevation: 3,
    borderRadius: 20,
    overflow: "hidden",
    marginBottom: 20,
    paddingVertical: 15,
    paddingHorizontal: 15,
  },
  row: {
    flexDirection: "row-reverse",
    justifyContent: "space-between",
    flex: 1,
  },
  keyText: {
    color: Colors.semiGray,
    fontSize: 16,
  },
  text: {
    color: Colors.semiGray,
    fontSize: 15,
  },
  button: {
    borderWidth: 1,
    width: "100%",
  },
  image: {
    width: 70,
    height: 70,
    marginLeft: 10,
  },
});
export default BabyCard;
