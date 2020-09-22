import React, { useState } from "react";
import { View, Text, TouchableOpacity, Image, Dimensions } from "react-native";
import {
  Header,
  TextInput,
  Button,
  FormButton,
  HeaderTitle,
} from "../../Components/Index";
import { Colors } from "../../Constant";
import styles from "./EditChildInfo.style";
import Modal from "react-native-modal";
import * as DocumentPicker from "expo-document-picker";
import { FontAwesome } from "@expo/vector-icons";
import DefaultText from "../../Components/DefaultText";
import * as Permissions from "expo-permissions";
import * as ImagePicker from "expo-image-picker";

const SCREEN_WIDTH = Dimensions.get("window").width;

const EditChildInfo = ({ navigation, route }) => {
  const [data, setData] = useState({ image: null });
  const { _id } = route.params;
  const [userName, setUserName] = useState("");
  const [age, setAge] = useState("");
  const [status, setStatus] = useState("");
  const [isModalVisible, setIsModalVisible] = useState(false);
  const { pdf, changePdf } = useState(null);
  const [path, setPath] = useState(null);

  const addFile = async () => {
    const file = await DocumentPicker.getDocumentAsync({ type: "*/*" });
    changePdf(file);
    const { uri } = file;
    setPath(uri);
    console.log("uri", uri);
  };

  const formData = new FormData();
  const fileType = "*/*";
  formData.append("*/*", {
    uri: path,
    name: `*/*.${fileType}`,
    type: `*/*/${fileType}`,
  });
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
        title="تعديل بيانات الطفل"
        goBack={() => navigation.pop()}
        backButtonVisible={true}
        propsStyle={{
          position: "absolute",
          top: "-5%",
          zIndex: 10,
        }}
      />
      <View
        style={{
          marginTop: "30%",
          justifyContent: "center",
          alignItems: "center",
          marginBottom: 20,
        }}
      >
        <TouchableOpacity
          style={{
            justifyContent: "center",
            alignItems: "center",
            width: 120,
            height: 120,
            borderRadius: 60,
            position: "relative",
            overflow: "hidden",
            zIndex: 1,
            marginBottom: 5,
          }}
          onPress={useLibraryHandler}
        >
          <View
            style={{
              position: "absolute",
              zIndex: 0,
              width: "100%",
              height: "100%",
              backgroundColor: "#00000060",
            }}
          />
          <Image
            source={
              data.image
                ? { uri: data.image.localUri }
                : require("../../../assets/images/babyImage.png")
            }
            style={{
              position: "absolute",
              zIndex: -1,
              width: "100%",
              height: "100%",
            }}
          />
          <FontAwesome
            name="camera"
            style={{
              position: "absolute",
              bottom: 8,
              zIndex: 1,
              color: Colors.white,
              fontSize: 22,
            }}
          />
        </TouchableOpacity>
        <DefaultText textStyle={{ fontSize: 17, color: "#616161" }}>
          تعديل الصورة الشخصية
        </DefaultText>
      </View>
      <View style={styles.formContainer}>
        <Text style={styles.sonData}>بيانات الطفل</Text>
        <TextInput
          value={userName}
          setValue={setUserName}
          password={false}
          placeholder="اسم الطفل"
          keyboardType="default"
          marginVertical="3%"
        />
        <TextInput
          value={age}
          setValue={setAge}
          password={false}
          placeholder="العمر"
          keyboardType="default"
          marginVertical="3%"
        />
        <TextInput
          value={status}
          setValue={setStatus}
          password={false}
          placeholder="الحالة"
          keyboardType="default"
          marginVertical="3%"
        />
        <View style={styles.uploadFile}>
          <View>
            <Text style={styles.pushFile}>إرفاق تقرير لحالة الطفل</Text>
            <Text style={styles.fileExtension}>
              الصيغ المسموح بها :pdf / docs / doc / jpeg
            </Text>
          </View>
          <TouchableOpacity onPress={addFile} style={styles.buttonContainer}>
            <Text style={styles.buttonText}>رفع الملف</Text>
          </TouchableOpacity>
        </View>
        <View style={{ position: "absolute", bottom: "3%" }}>
          <Button
            onPress={() => setIsModalVisible(true)}
            title="حفظ البيانات"
            backgroundColor={Colors.primary}
            TextColor={Colors.white}
          />
        </View>
      </View>
      <Modal
        isVisible={isModalVisible}
        onBackdropPress={() => setIsModalVisible(false)}
        onSwipeComplete={() => setIsModalVisible(false)}
        swipeDirection="down"
        style={{ width: SCREEN_WIDTH / 1.3, alignSelf: "center" }}
      >
        <View style={styles.modalContentContainer}>
          <Image
            style={{ marginTop: "10%" }}
            source={require("../../../assets/images/success.png")}
          />
          <Text style={styles.modalTitle}>تم تسجيل بيانات الطفل بنجاح</Text>
          <Text style={styles.modalQuestion}>هل تريد تسجيل طفل آخر ؟</Text>
          <View style={{ flexDirection: "row-reverse", marginTop: "7%" }}>
            <FormButton
              onPress={() => {
                setUserName(""),
                  setAge(""),
                  setStatus(""),
                  setIsModalVisible(false);
              }}
              title="نعم"
              TextColor={Colors.secondary}
              borderColor={Colors.secondary}
            />
            <FormButton
              onPress={() => {
                setIsModalVisible(false), navigation.navigate("Home");
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
export default EditChildInfo;
