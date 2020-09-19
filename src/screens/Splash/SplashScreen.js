import React, { useEffect } from "react";
import { View, Text, Image } from "react-native";
import styles from "./SplashScreen.style";
import { StatusBar } from "expo-status-bar";

const Splash = ({ navigation }) => {
  useEffect(() => {
    setTimeout(() => {
      navigation.navigate("IntroSlider");
    }, 3000);
  }, []);
  return (
    <View style={{ flex: 1, justifyContent: "center", alignItems: "center" }}>
      <StatusBar style="light" />
      <Image
        style={styles.topLogo}
        source={require("../../../assets/images/lightLogo.png")}
      />
      <Image
        style={styles.mainSplashImg}
        source={require("../../../assets/images/Splash.png")}
      />
      <View style={styles.contentContainer}>
        <Image
          style={styles.mainLogo}
          source={require("../../../assets/images/MainLogo.png")}
        />
        <Text style={styles.title}>ظل</Text>
        <Text style={styles.stillForYou}>لكم سنظل</Text>
      </View>
      <Image
        style={styles.bottomLogo}
        source={require("../../../assets/images/lightLogo.png")}
      />
    </View>
  );
};
export default Splash;
