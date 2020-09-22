import React, { useState } from "react";
import { View, Text, TouchableOpacity, Image, TextInput } from "react-native";
import {
  Header,
  Button,
  FormButton,
  HeaderTitle,
} from "../../Components/Index";
import { Colors } from "../../Constant";
import styles from "./EditProfileScreen.style";
import Modal from "react-native-modal";
import { FontAwesome } from "@expo/vector-icons";
import DefaultText from "../../Components/DefaultText";
import * as Permissions from "expo-permissions";
import * as ImagePicker from "expo-image-picker";

const EditProfileScreen = ({ navigation }) => {
  const [data, setData] = useState({
    image: null,
    username: null,
    email: null,
  });
  const [modalVisible, setIsModalVisible] = useState(false);
  const useLibraryHandler = async () => {
    await Permissions.askAsync(Permissions.CAMERA_ROLL);
    await ImagePicker.launchImageLibraryAsync({
      mediaTypes: "Images",
      quality: 0.9,
      allowsEditing: true,
    }).then((result) => {
      if (!result.cancelled) {
        let localUri = result.uri;
        let filename = localUri.split("/").pop();
        // Infer the type of the image
        let match = /\.(\w+)$/.exec(filename);
        let type = match ? `image/${match[1]}` : `image`;
        setData({
          ...data,
          image: {
            localUri: localUri,
            filename: filename,
            type: type,
          },
        });
      }
    });
  };

  return (
    <View style={styles.container}>
      <HeaderTitle
        title="تعديل الملف الشخصي"
        goBack={() => navigation.pop()}
        backButtonVisible={true}
        propsStyle={{
          position: "absolute",
          top: "-5%",
          zIndex: 10,
        }}
      />
      <View style={styles.containUploadImage}>
        <TouchableOpacity
          style={styles.uploadImageBtn}
          onPress={useLibraryHandler}
        >
          <View style={styles.containImage} />
          <Image
            source={
              data.image
                ? { uri: data.image.localUri }
                : require("../../../assets/images/UserImage.png")
            }
            style={styles.image}
          />
          <FontAwesome name="camera" style={styles.imageIcon} />
        </TouchableOpacity>
        <DefaultText textStyle={{ fontSize: 17, color: "#616161" }}>
          تعديل الصورة الشخصية
        </DefaultText>
      </View>
      <View style={styles.formContainer}>
        <View style={{ marginVertical: 15 }}>
          <DefaultText textStyle={styles.label}>الاسم</DefaultText>
          <View style={styles.containInput}>
            <TextInput
              placeholder={"محمد أحمد"}
              placeholderTextColor={Colors.borderGray}
              value={data.username}
              onChange={(val) => setData({ ...data, username: val })}
              style={styles.input}
            />
          </View>
        </View>
        <View style={{ marginVertical: 15 }}>
          <DefaultText textStyle={styles.label}>الايميل</DefaultText>
          <View style={styles.containInput}>
            <TextInput
              placeholder={"mkk@gmail.com"}
              placeholderTextColor={Colors.borderGray}
              value={data.username}
              onChange={(val) => setData({ ...data, username: val })}
              style={styles.input}
            />
          </View>
        </View>
        <View style={styles.saveButton}>
          <Button
            onPress={() => setIsModalVisible(true)}
            title="حفظ"
            backgroundColor={Colors.primary}
            TextColor={Colors.white}
          />
        </View>
      </View>
      <Modal
        isVisible={modalVisible}
        onBackdropPress={() => setIsModalVisible(false)}
        onSwipeComplete={() => setIsModalVisible(false)}
        swipeDirection="down"
      >
        <View style={styles.modalContentContainer}>
          <Image
            style={{ marginTop: "10%" }}
            source={require("../../../assets/images/success.png")}
          />
          <Text style={styles.modalTitle}>هل تريد حفظ التعديلات؟</Text>
          <View style={{ flexDirection: "row-reverse", marginTop: "7%" }}>
            <FormButton
              onPress={() => {
                setIsModalVisible(false);
                setTimeout(() => {
                  navigation.navigate("Profile");
                }, 500);
              }}
              title="نعم"
              TextColor={Colors.secondary}
              borderColor={Colors.secondary}
            />
            <FormButton
              onPress={() => {
                setIsModalVisible(false);
              }}
              title="لا"
              TextColor={Colors.primary}
              borderColor={Colors.primary}
            />
          </View>
        </View>
      </Modal>
    </View>
  );
};
export default EditProfileScreen;
