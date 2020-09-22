import React from "react";
import { View, Text, Image } from "react-native";
import { Colors } from "../Constant";
import Card from "./Card";
import DefaultText from "./DefaultText";

const ReportState = ({ item }) => {
  return (
    <View style={{ marginTop: 15, }}>
      <Card
        styleCard={{
          paddingHorizontal: 15,
          paddingTop: 7,
          paddingBottom: 15,
        }}
      >
        <View style={{ flexDirection: "row-reverse" }}>
          <Image source={item.img} style={{ marginLeft: "1%" }} />
          <View style={{ flex: 1, paddingHorizontal: 5 }}>
            <DefaultText textStyle={{ color: Colors.primary, fontSize: 14 }}>
              {item.name}
            </DefaultText>
            <DefaultText
              textStyle={{
                color: Colors.semiGray,
                fontSize: 12,
                marginTop: 10,
              }}
            >
              {item.details}
            </DefaultText>
          </View>
        </View>
      </Card>
    </View>
  );
};

export default ReportState;
