import React, { useState } from "react";
import { Text, ScrollView, View, Dimensions } from "react-native";
import {
  ThickHeader,
  Container,
  RateCard,
  ServicesCard,
} from "../../Components/Index";
import { Colors } from "../../Constant";
import { CentersData, Rates, OurService } from "../../FakeData/Index";
import styles from "./CenterDetailsScreen.style";
const { height, width } = Dimensions.get("window");
const CenterDetailsScreen = ({ navigation, route }) => {
  const { _id } = route.params;
  const data = CentersData.find((item) => item.id === _id);
  const centerDetailsNavigation = navigation;
  return (
    <ScrollView style={{ flex: 1, backgroundColor: Colors.white }}>
      <ThickHeader
        mainTitle={data.title}
        img={data.logoDetail}
        goBackVisible={true}
        goBack={() => navigation.pop()}
      />
      <Text style={styles.title}>وصف المركز</Text>
      <Text style={styles.detailsText}>{data.description}</Text>
      <Text style={styles.title}>التقيمات</Text>
      <ScrollView
        contentContainerStyle={{
          marginTop: 10,
          paddingVertical: 30,
          paddingHorizontal: 5,
        }}
        horizontal
        showsHorizontalScrollIndicator={false}
      >
        {Rates.map((i, index) => {
          return <RateCard key={index.toString()} data={i} />;
        })}
      </ScrollView>

      <View>
        <Text style={[styles.title]}>خدماتنا</Text>
        <View
          style={{
            flexDirection: "row",
            flexWrap: "wrap",
            marginTop: 20,
          }}
        >
          {OurService.map((item, index) => (
            <View style={{ width: width / 2 - 10, marginHorizontal: 5 }}>
              <ServicesCard
                key={index.toString()}
                data={item}
                onPress={() =>
                  navigation.navigate("ServiceDetails", { _id: item.id })
                }
              />
            </View>
          ))}
        </View>
      </View>
    </ScrollView>
  );
};
export default CenterDetailsScreen;
