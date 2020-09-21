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
const ThickHeader = ({
  goBack,
  goBackVisible,
  goSetting,
  settingVisible,
  aboveTitle,
  aboveTitleVisible,
  mainTitle,
  img,
  viewImage,
}) => {
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
      {aboveTitleVisible && (
        <Text style={styles.ThickHeaderAboveTitle}>{aboveTitle}</Text>
      )}

      <Text
        style={[styles.ThickHeaderTitle, { marginTop: viewImage ? 105 : 90 }]}
      >
        {mainTitle}
      </Text>
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
