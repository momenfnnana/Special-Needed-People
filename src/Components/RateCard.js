import React from 'react';
import { View, Text, Image } from 'react-native';
import Stars from 'react-native-stars';
import { FontAwesome } from '@expo/vector-icons';
import styles from './Component.style';
const RateCard = ({ data }) => {
    return (
        <View style={styles.RateContainer}>
            <Image style={styles.rateImg} source={data.img === null ? require('../../assets/images/UserImage.png') : data.img} />
            <View style={styles.starsSpace}>
                <Stars
                    default={3}
                    count={5}
                    half={true}
                    starSize={50}
                    fullStar={<FontAwesome name="star" style={[styles.serviceStar]} />}
                    emptyStar={<FontAwesome name="star" style={[styles.serviceStar, styles.emptyServiceStar]} />}
                    halfStar={<FontAwesome name="star" style={[styles.serviceStar]} />}
                />
            </View>
            <Text style={styles.RateDescription}>{data.description}</Text>
        </View>
    )
}
export default RateCard;