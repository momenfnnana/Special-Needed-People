import React, { useState, useEffect } from "react";
import {
  View,
  StyleSheet,
  Dimensions,
  TouchableOpacity,
  Image,
  Linking,
} from "react-native";
import Carousel from "react-native-snap-carousel";
import { Colors } from "../Constant";
// import { ActivityIndicator } from "react-native-paper";
import IntroCardData from "../FakeData/IntroCard";
import DefaultText from "./DefaultText";

const { width: viewportWidth, height: viewportHeight } = Dimensions.get(
  "window"
);

const HomeSliderSection = ({ arrayAdv, Loading }) => {
  const [active, setActive] = useState(0);

  const renderItem = ({ item }) => {
    return (
      <View
        // onPress={() => Linking.openURL(item.link)}
        style={styles.slide}
      >
        <View style={styles.containImages}>
          <Image
            style={styles.logoImage}
            source={require("../../assets/images/lightLogo.png")}
          />
          <View style={styles.overlay} />
          <Image source={item.img} style={styles.slideImage} />
        </View>

        <View
          style={{
            backgroundColor: Colors.white,
            paddingHorizontal: 10,
            paddingVertical: 15,
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          <DefaultText textType="semiBold" textStyle={styles.titleCard}>
            {item.title}
          </DefaultText>
          <DefaultText textType="regular" textStyle={styles.details}>
            {item.description}
          </DefaultText>
        </View>
      </View>
    );
  };

  const ReloadRenderItem = ({ item }) => {
    return (
      <View style={styles.slideLoading}>
        <ActivityIndicator size="large" color="#fff" />
      </View>
    );
  };

  //   if (Loading) {
  return (
    <View style={styles.containAdSlider}>
      <Carousel
        // snapToEnd={true}
        // pagingEnabled={true}
        layout={"tinder"}
        onSnapToItem={(i) => setActive(i)}
        autoplay={false}
        data={IntroCardData}
        renderItem={renderItem}
        sliderWidth={viewportWidth}
        sliderHeight={viewportHeight}
        itemWidth={(viewportWidth * 2.7) / 3}
        directionalLockEnabled={true}
        style={{ flexDirection: "row-reverse" }}
        contentContainerStyle={{ flexDirection: "column-reverse" }}
      />
      <View style={styles.paginationDots}>
        {IntroCardData.length > 1 &&
          IntroCardData.map((_, i) => (
            <TouchableOpacity
              key={i}
              style={[
                styles.dot,
                i === active
                  ? {
                      backgroundColor: "#fff",
                    }
                  : { backgroundColor: "#ffffff52" },
              ]}
              disabled={true}
            />
          ))}
      </View>
    </View>
  );
  //   }

  //   return arrayAdv && arrayAdv.length > 0 ? (
  //     <View style={styles.containAdSlider}>
  //       <Carousel
  //         layout={"default"}
  //         onSnapToItem={(i) => setActive(i)}
  //         autoplay={true}
  //         data={arrayAdv}
  //         renderItem={renderItem}
  //         sliderWidth={viewportWidth}
  //         itemWidth={(viewportWidth * 2) / 3}
  //       />
  //       <View style={styles.paginationDots}>
  //         {arrayAdv.length > 1 &&
  //           arrayAdv.map((_, i) => (
  //             <TouchableOpacity
  //               key={i}
  //               style={[
  //                 styles.dot,
  //                 i === active
  //                   ? {
  //                       backgroundColor: "#634BBF",
  //                       transform: [{ scale: 1.5 }],
  //                     }
  //                   : { backgroundColor: "#634BBF52" },
  //               ]}
  //               disabled={true}
  //             />
  //           ))}
  //       </View>
  //     </View>
  //   ) : (
  //     <View></View>
  //   );
};

const styles = StyleSheet.create({
  containAdSlider: {
    marginVertical: 20,
    width: viewportWidth,
    height: viewportHeight,
    // justifyContent: "center",
    // alignItems: "center",
  },
  slide: {
    marginTop: 20,
    borderRadius: 15,
    overflow: "hidden",
    backgroundColor: Colors.white,
    // height: (viewportHeight *1.7) / 3,
  },
  slideImage: {
    height: (viewportHeight * 1.5) / 3,
    width: (viewportWidth * 2.7) / 3,
  },
  containImages: {
    position: "relative",
  },
  logoImage: {
    zIndex: 11,
    position: "absolute",
    bottom: "-5%",
    left: 4,
  },
  overlay: {
    position: "absolute",
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
    backgroundColor: Colors.secondary + 43,
    zIndex: 10,
  },
  titleCard: {
    color: Colors.secondary,
    fontSize: 20,
    textAlign: "center",
  },
  details: {
    marginTop: 10,
    color: Colors.semiGray,
    fontSize: 14,
    textAlign: "center",
  },
  dot: {
    width: 35,
    height: 2,
    borderRadius: 5,
    marginHorizontal: 4,
  },
  paginationDots: {
    position: "absolute",
    alignSelf: "center",
    marginTop: (viewportHeight * 2.1) / 3,
    height: 16,
    marginBottom: "0%",
    flexDirection: "row-reverse",
    justifyContent: "center",
    alignItems: "center",
  },
  slideLoading: {
    borderRadius: 15,
    height: viewportHeight / 4,
    width: (viewportWidth * 2) / 3,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#B10C9050",
    // opacity: 0.5,
  },
});
export default HomeSliderSection;
