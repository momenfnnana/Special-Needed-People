import React from 'react';
import { View, Text, Image } from 'react-native';
import styles from './Component.style';
import Stars from 'react-native-stars';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import { FontAwesome } from '@expo/vector-icons'
const Centers = ({ data, index }) => {
    return (
        <View style={{ height: "70%", top: -10, marginHorizontal: 20, justifyContent: "center", alignItems: "center" }}>
            <Image source={data.img} />
            <Text style={styles.centerTitle}>{data.title}</Text>
            <Stars
                default={3}
                count={5}
                half={true}
                starSize={50}
                fullStar={<FontAwesome name="star" style={[styles.myStarStyle]} />}
                emptyStar={<FontAwesome name="star" style={[styles.myStarStyle, styles.myEmptyStarStyle]} />}
                halfStar={<FontAwesome name="star" style={[styles.myStarStyle]} />}
            />
        </View>
    )
}
export default Centers;