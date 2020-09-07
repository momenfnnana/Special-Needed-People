import React from 'react';
import { View, Text, ScrollView } from 'react-native';
import { HeaderTitle, Centers } from '../../Components/Index';
import styles from './HomeScreen.style';
import { CentersData } from '../../FakeData/Index';
const Home = () => {
    console.log("CentersData", CentersData);
    return (
        <View style={{ flex: 1 }}>
            <HeaderTitle title="الرئيسية" />
            <Text style={styles.centers}>المراكز</Text>
            <ScrollView showsHorizontalScrollIndicator={false} horizontal>
                {
                    CentersData.map((i, index) => {
                        return (
                            <Centers key={index.toString()} data={i} index={index} />
                        )
                    })
                }
            </ScrollView>
            <Text style={styles.centers}>خدماتنا</Text>
            
        </View>
    )
}
export default Home;