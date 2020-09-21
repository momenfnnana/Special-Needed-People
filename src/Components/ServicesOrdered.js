import React from "react";
import { View, StyleSheet, Image } from "react-native";
import { Colors } from "../Constant";
import Button from "./Button";
import DefaultText from "./DefaultText";
import ServicesOrder from "../FakeData/ServicesOrdered";

const ServicesOrdered = ({ myNavigation }) => {
  const navigation = myNavigation;
  return (
    <View style={{ paddingHorizontal: 15, marginBottom: "20%" }}>
      {ServicesOrder.map((item, index) => {
        return (
          <View key={index.toString()} style={styles.card}>
            <View style={styles.containCard}>
              <View style={styles.containImage}>
                <Image source={item.img} style={styles.image} />
                <Image source={item.logo} style={styles.logo} />
                <View style={styles.overlay} />
              </View>
              <View style={styles.bodyCard}>
                <DefaultText textStyle={styles.titleCard}>
                  {item.title}
                </DefaultText>
                <View style={styles.containTime}>
                  <DefaultText textStyle={styles.titleTime}>
                    تاريخ الطلب
                  </DefaultText>
                  <DefaultText textStyle={styles.time}>{item.time}</DefaultText>
                </View>
                <Button
                  TextColor={Colors.white}
                  backgroundColor={Colors.primary}
                  title="تقييم"
                  styleButton={styles.assignmentBt}
                  alignSelf="flex-start"
                  onPress={() =>
                    navigation.navigate("AssignmentService", { _id: item.id })
                  }
                />
              </View>
            </View>
          </View>
        );
      })}
    </View>
  );
};

const styles = StyleSheet.create({
  card: {
    backgroundColor: Colors.semiGray + 22,
    borderRadius: 20,
    overflow: "hidden",
    marginBottom: 15,
  },
  containCard: {
    flexDirection: "row-reverse",
  },
  containImage: {
    borderRadius: 20,
    overflow: "hidden",
    width: 140,
    position: "relative",
  },
  overlay: {
    position: "absolute",
    width: "100%",
    height: "100%",
    zIndex: 0,
    backgroundColor: Colors.secondary + 43,
  },
  image: {
    position: "absolute",
    zIndex: -1,
    width: "100%",
    height: "100%",
  },
  logo: {
    position: "absolute",
    zIndex: 1,
    bottom: "-25%",
    left: "1%",
    width: 85,
    height: 170,
    resizeMode: "contain",
  },
  bodyCard: {
    paddingVertical: 10,
    paddingRight: 10,
    paddingLeft: 15,
    flex: 1,
  },
  titleCard: {
    color: Colors.secondary,
    flex: 0.5,
    fontSize: 17,
    marginTop: 5,
  },
  containTime: {
    marginVertical: 5,
    alignItems: "flex-end",
  },
  titleTime: {
    color: Colors.primary,
    fontSize: 14,
  },
  time: {
    color: Colors.semiGray,
    fontSize: 13,
  },
  assignmentBt: {
    width: 85,
    height: 40,
    justifyContent: "center",
    alignItems: "center",
  },
});
export default ServicesOrdered;
