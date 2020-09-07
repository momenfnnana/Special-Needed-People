import React from 'react';
import { View, Text, Image } from 'react-native';
import Stars from 'react-native-stars';
import { FontAwesome } from '@expo/vector-icons'
import styles from './Component.style';
const Centers = ({ data, index }) => {
    return (
        <View style={{
            marginHorizontal: 10,
            justifyContent: "center",
            alignItems: "center"
        }}>
            <Image source={data.img} />
            <Text>{data.name}</Text>
            <Stars
                default={data.value}
                count={5}
                half={true}
                starSize={30}
                fullStar={<FontAwesome name="star" style={[styles.myStarStyle]} />}
                emptyStar={<FontAwesome name="star" style={[styles.myStarStyle, styles.myEmptyStarStyle]} />}
                halfStar={<FontAwesome name="star" style={[styles.myStarStyle]} />}
            />
        </View>
    )
}
export default Centers;
//