import React, { useContext } from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import {
  Splash,
  Login,
  SignUp,
  SonFormData,
  Home,
  ServiceDetails,
  Map,
  OnlinePayment,
  IntroSlider,
  CentersScreen,
  CenterDetailsScreen,
  ProfileScreen,
  EditChildInfo,
  AssignmentService,
  BabyProfileScreen,
  SettingScreen,
  EditProfileScreen,
  ReportsScreen,
  ResetPasswordScreen,
  specialistProfileScreen,
} from "../screens/Index";
import { Context as AuthContext } from "../Contexts/AuthContext";
const Stack = createStackNavigator();
const AuthStack = createStackNavigator();
const HomeStack = createStackNavigator();

const AuthNavigation = () => {
  return (
    <AuthStack.Navigator screenOptions={{ headerShown: false }}>
      <AuthStack.Screen name="Login" component={Login} />
      <AuthStack.Screen name="SignUp" component={SignUp} />
      <AuthStack.Screen name="SonFormData" component={SonFormData} />
    </AuthStack.Navigator>
  );
};

const HomeNavigation = () => {
  return (
    <HomeStack.Navigator screenOptions={{ headerShown: false }}>
      <Stack.Screen name="Home" component={Home} />
      <Stack.Screen name="ServiceDetails" component={ServiceDetails} />
      <Stack.Screen name="Map" component={Map} />
      <Stack.Screen name="OnlinePayment" component={OnlinePayment} />
      <Stack.Screen name="Centers" component={CentersScreen} />
      <Stack.Screen name="CenterDetails" component={CenterDetailsScreen} />
      <Stack.Screen name="EditChildInfo" component={EditChildInfo} />
      <Stack.Screen name="Profile" component={ProfileScreen} />
      <Stack.Screen name="AssignmentService" component={AssignmentService} />
      <Stack.Screen name="BabyProfile" component={BabyProfileScreen} />
      <Stack.Screen name="Setting" component={SettingScreen} />
      <Stack.Screen name="EditProfile" component={EditProfileScreen} />
      <Stack.Screen name="Reports" component={ReportsScreen} />
      <Stack.Screen name="ResetPassword" component={ResetPasswordScreen} />
      <Stack.Screen name="specialistProfile" component={specialistProfileScreen} />
    </HomeStack.Navigator>
  );
};

const Navigator = () => {
  const { state } = useContext(AuthContext);
  console.log("state", state.token);
  return (
    <NavigationContainer>
      <Stack.Navigator screenOptions={{ headerShown: false }}>
        <Stack.Screen name="Splash" component={Splash} />
        <Stack.Screen name="IntroSlider" component={IntroSlider} />
        <Stack.Screen
          name="Main"
          component={!state.token ? AuthNavigation : HomeNavigation}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
};
export default Navigator;
