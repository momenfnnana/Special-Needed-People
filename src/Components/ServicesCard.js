import React from "react";
import { View, Text, Image, TouchableOpacity } from "react-native";
import styles from "./Component.style";

const ServicesCard = ({ data, onPress }) => {
  return (
    <TouchableOpacity onPress={onPress} style={styles.serviceCardContainer}>
      <Image style={styles.serviceCardImage} source={data.img} />
      <Text style={styles.serviceCardTitle}>{data.title}</Text>
    </TouchableOpacity>
  );
};
export default ServicesCard;
