import React from 'react';
import { View, Text, Image } from 'react-native';
import styles from './Component.style';

const ServicesCard = ({ data }) => {
    return (
        <View style={styles.serviceCardContainer}>
            <Image style={styles.serviceCardImage} source={data.item.img} />
            <Text style={styles.serviceCardTitle}>{data.item.title}</Text>
        </View>
    )
}
export default ServicesCard;