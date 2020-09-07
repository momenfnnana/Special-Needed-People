import React from 'react';
import { View, Text, ScrollView } from 'react-native';
import { HeaderTitle, Centers } from '../../Components/Index';
import styles from './HomeScreen.style';
import { CentersData } from '../../FakeData/Index';
import Stars from 'react-native-stars';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import { FontAwesome } from '@expo/vector-icons'
import { Colors } from '../../Constant';
const Home = () => {
    console.log("CentersData", CentersData);
    return (
        <View style={{ flex: 1 }}>
            <HeaderTitle title="الرئيسية" />
            <Text style={styles.centers}>المراكز</Text>
            {
                CentersData.map((i, index) => {
                    return (
                        <Centers key={index.toString()} data={i} index={index} />
                    )
                })
            }
            <Stars
                default={3}
                count={5}
                half={true}
                starSize={50}
                fullStar={<FontAwesome name="star" size={24} style={[styles.myStarStyle]} />}
                emptyStar={<FontAwesome name="star" size={24} style={[styles.myStarStyle, styles.myEmptyStarStyle]} />}
                halfStar={<FontAwesome name="star" size={24} style={[styles.myStarStyle]} />}
            />
        </View>
    )
}
export default Home;