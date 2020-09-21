import React from "react";
import { View, Text, Image } from "react-native";
import styles from "./Component.style";
import Stars from "react-native-stars";
import { FontAwesome } from "@expo/vector-icons";
const Centers = ({ data, index }) => {
  return (
    <View style={styles.centerContainer}>
      <Image source={data.img} />
      <Text style={styles.centerTitle}>{data.name}</Text>
      <Stars
        default={3}
        count={5}
        half={true}
        starSize={50}
        fullStar={<FontAwesome name="star" style={[styles.myStarStyle]} />}
        emptyStar={
          <FontAwesome
            name="star"
            style={[styles.myStarStyle, styles.myEmptyStarStyle]}
          />
        }
        halfStar={<FontAwesome name="star" style={[styles.myStarStyle]} />}
      />
    </View>
  );
};
export default Centers;
