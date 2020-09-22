import { StatusBar } from "expo-status-bar";
import React, { useState } from "react";
import {
  ScrollView,
  View,
  Image,
  TouchableOpacity,
  StyleSheet,
} from "react-native";
import DefaultText from "../../Components/DefaultText";
import { ThickHeader, Container } from "../../Components/Index";
import { Colors } from "../../Constant";
import styles from "./Setting.style";
import {
  FontAwesome5,
  FontAwesome,
  MaterialIcons,
  Entypo,
  Foundation,
  MaterialCommunityIcons,
  Octicons,
} from "@expo/vector-icons";
import ContactModal from "../../Components/ContactModal";

const SettingScreen = ({ navigation }) => {
  const profileNavigation = navigation;
  const [modalVisible, setModalVisible] = useState(false);

  const ImageProfile = () => {
    return (
      <View style={styles.containImage}>
        <FontAwesome5
          name="cog"
          style={{ fontSize: 100, color: Colors.primary }}
        />
      </View>
    );
  };

  return (
    <Container paddingTop={false}>
      <StatusBar style="auto" backgroundColor={Colors.primary} />
      <ScrollView style={{ flex: 1, backgroundColor: Colors.white }}>
        <ThickHeader
          aboveTitle="الاعدادت"
          viewImage={ImageProfile()}
          goBack={() => navigation.pop()}
          goBackVisible={true}
        />
        <View style={{ paddingHorizontal: 20 }}>
          <View style={styles.containItem}>
            <TouchableOpacity style={styles.row}>
              <View style={styles.containTextItem}>
                <FontAwesome5 name="question" style={styles.icon} />
                <DefaultText textStyle={styles.text}>كيف تعمل ظل</DefaultText>
              </View>
              <MaterialIcons
                name="keyboard-arrow-left"
                style={styles.backIcon}
              />
            </TouchableOpacity>
          </View>
          <View style={styles.containItem}>
            <TouchableOpacity
              style={styles.row}
              onPress={() => navigation.navigate("Reports")}
            >
              <View style={styles.containTextItem}>
                <Entypo name="clipboard" style={styles.icon} />
                <DefaultText textStyle={styles.text}>
                  شكاوى وإقتراحات
                </DefaultText>
              </View>
              <MaterialIcons
                name="keyboard-arrow-left"
                style={styles.backIcon}
              />
            </TouchableOpacity>
          </View>
          <View style={styles.containItem}>
            <TouchableOpacity
              style={styles.row}
              onPress={() => navigation.navigate("EditProfile")}
            >
              <View style={styles.containTextItem}>
                <Foundation
                  name="page-edit"
                  style={[styles.icon, { fontSize: 28 }]}
                />
                <DefaultText textStyle={styles.text}>
                  تعديل الملف الشخصي
                </DefaultText>
              </View>
              <MaterialIcons
                name="keyboard-arrow-left"
                style={styles.backIcon}
              />
            </TouchableOpacity>
          </View>
          <View style={styles.containItem}>
            <TouchableOpacity
              style={styles.row}
              onPress={() => navigation.navigate("ResetPassword")}
            >
              <View style={styles.containTextItem}>
                <FontAwesome5 name="lock" style={styles.icon} />
                <DefaultText textStyle={styles.text}>
                  تعديل كلمة المرور
                </DefaultText>
              </View>
              <MaterialIcons
                name="keyboard-arrow-left"
                style={styles.backIcon}
              />
            </TouchableOpacity>
          </View>
          <View style={styles.containItem}>
            <TouchableOpacity
              onPress={() => setModalVisible(true)}
              style={styles.row}
            >
              <View style={styles.containTextItem}>
                <FontAwesome5 name="headset" style={styles.icon} />
                <DefaultText textStyle={styles.text}>تواصل معنا</DefaultText>
              </View>
              <MaterialIcons
                name="keyboard-arrow-left"
                style={styles.backIcon}
              />
            </TouchableOpacity>
          </View>
          <View style={styles.containItem}>
            <TouchableOpacity style={styles.row}>
              <View style={styles.containTextItem}>
                <MaterialCommunityIcons
                  name="security"
                  style={[styles.icon, { fontSize: 27 }]}
                />
                <DefaultText textStyle={styles.text}>
                  سياسة الخصوصية
                </DefaultText>
              </View>
              <MaterialIcons
                name="keyboard-arrow-left"
                style={styles.backIcon}
              />
            </TouchableOpacity>
          </View>
          <View style={styles.containItem}>
            <TouchableOpacity style={styles.row}>
              <View style={styles.containTextItem}>
                <FontAwesome5 name="share-alt" style={styles.icon} />
                <DefaultText textStyle={styles.text}>شارك التطبيق</DefaultText>
              </View>
              <MaterialIcons
                name="keyboard-arrow-left"
                style={styles.backIcon}
              />
            </TouchableOpacity>
          </View>
          <View style={styles.containItem}>
            <TouchableOpacity style={styles.row}>
              <View style={styles.containTextItem}>
                <FontAwesome5 name="star-half-alt" style={styles.icon} />
                <DefaultText textStyle={styles.text}>قيم التطبيق</DefaultText>
              </View>
              <MaterialIcons
                name="keyboard-arrow-left"
                style={styles.backIcon}
              />
            </TouchableOpacity>
          </View>
          <View style={styles.containItem}>
            <TouchableOpacity style={styles.row}>
              <View style={styles.containTextItem}>
                <Octicons name="sign-out" style={styles.icon} />
                <DefaultText textStyle={styles.text}>خروج</DefaultText>
              </View>
              <MaterialIcons
                name="keyboard-arrow-left"
                style={styles.backIcon}
              />
            </TouchableOpacity>
          </View>
        </View>
      </ScrollView>
      <ContactModal
        modalVisible={modalVisible}
        cancelModal={() => setModalVisible(false)}
      />
    </Container>
  );
};
export default SettingScreen;
