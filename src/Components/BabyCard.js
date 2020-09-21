import React from "react";
import { View, StyleSheet } from "react-native";
import { Colors } from "../Constant";
import Button from "./Button";
import DefaultText from "./DefaultText";
import Baby from "../FakeData/Baby";

const BabyCard = ({ myNavigation }) => {
  const navigation = myNavigation;
  return (
    <View style={{ paddingHorizontal: 15 }}>
      {Baby.map((item, index) => (
        <View key={index.toString()} style={styles.card}>
          <View style={styles.row}>
            <DefaultText textStyle={styles.keyText}>اسم الطفل</DefaultText>
            <DefaultText textStyle={styles.text}>{item.childName}</DefaultText>
          </View>
          <View style={[styles.row, { marginVertical: 10 }]}>
            <DefaultText textStyle={styles.keyText}>حالته</DefaultText>
            <DefaultText textStyle={styles.text}>{item.status}</DefaultText>
          </View>
          <View style={styles.row}>
            <DefaultText textStyle={styles.keyText}>عمره</DefaultText>
            <DefaultText textStyle={styles.text}>{item.age}</DefaultText>
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
        </View>
      ))}
    </View>
  );
};

const styles = StyleSheet.create({
  card: {
    borderRadius: 20,
    overflow: "hidden",
    backgroundColor: "#E9E9E9",
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
    color: Colors.primary,
    fontSize: 16,
  },
  button: {
    borderWidth: 1,
    width: "100%",
  },
});
export default BabyCard;
