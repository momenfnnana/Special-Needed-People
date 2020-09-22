import React from "react";
import {
  Text,
  Image,
  SafeAreaView,
  TouchableOpacity,
  StyleSheet,
  View,
} from "react-native";
import styles from "./Component.style";
import { Feather, MaterialCommunityIcons } from "@expo/vector-icons";
import { Colors } from "../Constant";
import DefaultText from "./DefaultText";
const ThickHeader = ({
  goBack,
  goBackVisible,
  goSetting,
  settingVisible,
  aboveTitle,
  mainTitle,
  img,
  viewImage,
  babyProfile,
}) => {
  const marginTop = () => {
    if (viewImage && !babyProfile) {
      return 105;
    } else if (babyProfile) {
      return 95;
    } else if (!mainTitle) {
      return 0;
    } else {
      return 90;
    }
  };
  return (
    <SafeAreaView>
      <View style={styles.containThickBg}>
        <Image
          style={styles.thickHeaderImageContainer}
          source={require("../../assets/images/thickHeader.png")}
        />
        {viewImage ? (
          viewImage
        ) : (
          <Image
            style={StyleSheet.flatten([styles.thickHeaderMainImage])}
            source={img}
          />
        )}
      </View>
      <Image
        style={styles.thickHeaderLeftLogo}
        source={require("../../assets/images/Logo.png")}
      />
      {aboveTitle && (
        <Text style={styles.ThickHeaderAboveTitle}>{aboveTitle}</Text>
      )}
      <View style={{ marginTop: marginTop() }}>
        {babyProfile && (
          <DefaultText textType="bold" textStyle={styles.childText}>
            الطفل
          </DefaultText>
        )}
        {mainTitle && <Text style={styles.ThickHeaderTitle}>{mainTitle}</Text>}
      </View>
      {goBackVisible === true ? (
        <TouchableOpacity onPress={goBack} style={styles.ThickHeaderArrow}>
          <Feather name="arrow-right" size={24} color={Colors.white} />
        </TouchableOpacity>
      ) : null}
      {settingVisible === true ? (
        <TouchableOpacity onPress={goSetting} style={styles.ThickHeaderSetting}>
          <MaterialCommunityIcons
            name="settings"
            size={24}
            color={Colors.white}
          />
        </TouchableOpacity>
      ) : null}
    </SafeAreaView>
  );
};
export default ThickHeader;
