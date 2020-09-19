import { StatusBar } from "expo-status-bar";
import React, { useState } from "react";
import { StyleSheet, Text, View } from "react-native";
import {
  Home,
  Splash,
  IntroSlider,
  Login,
  SignUp,
  SonFormData,
  ServiceDetails,
} from "./src/screens/Index";
import { AppLoading } from "expo";
import * as Font from "expo-font";
import Navigator from "./src/navigation/Navigator";
import { Provider as AuthProvider } from "./src/Contexts/AuthContext";
export default function App() {
  const [dataLoaded, setDataLoaded] = useState(false);
  const fetchFonts = () => {
    return Font.loadAsync({
      "ArbFONTS-Montserrat-Arabic-Black": require("./assets/fonts/ArbFONTS-Montserrat-Arabic-Black.ttf"),
      "ArbFONTS-Montserrat-Arabic-Bold": require("./assets/fonts/ArbFONTS-Montserrat-Arabic-Bold.ttf"),
      "ArbFONTS-Montserrat-Arabic-ExtraBold": require("./assets/fonts/ArbFONTS-Montserrat-Arabic-ExtraBold.ttf"),
      "ArbFONTS-Montserrat-Arabic-ExtraLight": require("./assets/fonts/ArbFONTS-Montserrat-Arabic-ExtraLight.ttf"),
      "ArbFONTS-Montserrat-Arabic-Light": require("./assets/fonts/ArbFONTS-Montserrat-Arabic-Light.ttf"),
      "ArbFONTS-Montserrat-Arabic-Medium": require("./assets/fonts/ArbFONTS-Montserrat-Arabic-Medium.ttf"),
      "ArbFONTS-Montserrat-Arabic-Regular": require("./assets/fonts/ArbFONTS-Montserrat-Arabic-Regular.ttf"),
      "ArbFONTS-Montserrat-Arabic-SemiBold": require("./assets/fonts/ArbFONTS-Montserrat-Arabic-SemiBold.ttf"),
      "ArbFONTS-Montserrat-Arabic-Thin": require("./assets/fonts/ArbFONTS-Montserrat-Arabic-Thin.ttf"),
    });
  };

  if (!dataLoaded) {
    return (
      <AppLoading
        startAsync={fetchFonts}
        onFinish={() => setDataLoaded(true)}
        onError={(err) => console.log(err)}
      />
    );
  }

  return (
    <AuthProvider>
      <Navigator />
    </AuthProvider>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
});
