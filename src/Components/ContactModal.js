import React, { useState } from "react";
import { View, TouchableOpacity, StyleSheet } from "react-native";
import DefaultText from "./DefaultText";
import Modal from "react-native-modal";
import { FontAwesome5, FontAwesome } from "@expo/vector-icons";
import { Colors } from "../Constant";

const ContactModal = ({ cancelModal, modalVisible }) => {
  const [contactType, setContactType] = useState("");

  return (
    <Modal
      isVisible={modalVisible}
      onBackdropPress={cancelModal}
      onSwipeComplete={cancelModal}
      swipeDirection="down"
    >
      <View style={styles.containModal}>
        <DefaultText textStyle={styles.modalTitle}>
          اختر طريقى التواصل
        </DefaultText>
        <TouchableOpacity
          onPress={() => setContactType("email")}
          style={StyleSheet.flatten([
            styles.itemModal,
            contactType !== "email"
              ? {
                  borderWidth: 1.5,
                  borderColor: Colors.borderGray,
                }
              : { backgroundColor: Colors.primary },
          ])}
        >
          <FontAwesome
            name="envelope"
            style={{
              color: contactType !== "email" ? Colors.primary : Colors.white,
              fontSize: 22,
              marginLeft: 8,
            }}
          />
          <DefaultText
            textStyle={{
              color: contactType !== "email" ? Colors.primary : Colors.white,
              fontSize: 17,
            }}
          >
            البريد الإلكتروني
          </DefaultText>
        </TouchableOpacity>
        <TouchableOpacity
          onPress={() => setContactType("whatsapp")}
          style={StyleSheet.flatten([
            styles.itemModal,
            contactType !== "whatsapp"
              ? {
                  borderWidth: 1.5,
                  borderColor: Colors.borderGray,
                }
              : { backgroundColor: Colors.primary },
          ])}
        >
          <FontAwesome
            name="comment"
            style={{
              color: contactType !== "whatsapp" ? Colors.primary : Colors.white,
              fontSize: 22,
              marginLeft: 8,
            }}
          />
          <DefaultText
            textStyle={{
              color: contactType !== "whatsapp" ? Colors.primary : Colors.white,
              fontSize: 17,
            }}
          >
            محادثة واتساب فورية
          </DefaultText>
        </TouchableOpacity>
        <TouchableOpacity
          onPress={() => setContactType("twitter")}
          style={StyleSheet.flatten([
            styles.itemModal,
            contactType !== "twitter"
              ? {
                  borderWidth: 1.5,
                  borderColor: Colors.borderGray,
                }
              : { backgroundColor: Colors.primary },
          ])}
        >
          <FontAwesome5
            name="twitter"
            style={{
              color: contactType !== "twitter" ? Colors.primary : Colors.white,
              fontSize: 22,
              marginLeft: 8,
            }}
          />

          <DefaultText
            textStyle={{
              color: contactType !== "twitter" ? Colors.primary : Colors.white,
              fontSize: 17,
            }}
          >
            تويتر
          </DefaultText>
        </TouchableOpacity>
        <TouchableOpacity
          onPress={() => setContactType("snapchat")}
          style={StyleSheet.flatten([
            styles.itemModal,
            contactType !== "snapchat"
              ? {
                  borderWidth: 1.5,
                  borderColor: Colors.borderGray,
                }
              : { backgroundColor: Colors.primary },
          ])}
        >
          <FontAwesome5
            name="snapchat-ghost"
            style={{
              color: contactType !== "snapchat" ? Colors.primary : Colors.white,
              fontSize: 22,
              marginLeft: 8,
            }}
          />
          <DefaultText
            textStyle={{
              color: contactType !== "snapchat" ? Colors.primary : Colors.white,
              fontSize: 17,
            }}
          >
            سناب شات
          </DefaultText>
        </TouchableOpacity>
        <TouchableOpacity
          onPress={() => setContactType("instagram")}
          style={StyleSheet.flatten([
            styles.itemModal,
            contactType !== "instagram"
              ? {
                  borderWidth: 1.5,
                  borderColor: Colors.borderGray,
                }
              : { backgroundColor: Colors.primary },
          ])}
        >
          <FontAwesome5
            name="instagram"
            style={{
              color:
                contactType !== "instagram" ? Colors.primary : Colors.white,
              fontSize: 22,
              marginLeft: 8,
            }}
          />
          <DefaultText
            textStyle={{
              color:
                contactType !== "instagram" ? Colors.primary : Colors.white,
              fontSize: 17,
            }}
          >
            إنستقرام
          </DefaultText>
        </TouchableOpacity>
      </View>
    </Modal>
  );
};

const styles = StyleSheet.create({
  containModal: {
    backgroundColor: "#fff",
    alignItems: "center",
    borderRadius: 15,
    paddingBottom: "7%",
    paddingTop: 20,
    paddingHorizontal: 15,
  },
  modalTitle: {
    textAlign: "center",
    color: Colors.primary,
    fontSize: 18,
    marginBottom: 20,
  },
  itemModal: {
    flexDirection: "row-reverse",
    paddingHorizontal: 15,
    paddingVertical: 14,
    alignItems: "center",
    marginBottom: 15,
    width: "100%",
    borderRadius: 20,
  },
});

export default ContactModal;
