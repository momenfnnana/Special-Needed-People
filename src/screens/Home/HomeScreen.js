import React, { useState } from 'react';
import { View, Text, ScrollView, FlatList, Dimensions } from 'react-native';
import { HeaderTitle, Centers, ServicesCard, Footer } from '../../Components/Index';
import styles from './HomeScreen.style';
import { Constant } from '../../Constant';
import { CentersData, OurService } from '../../FakeData/Index';
const SCREEN_WIDTH = Dimensions.get('window').width;
const SCREEN_HEIGHT = Dimensions.get('window').height;
const Home = () => {
    const [home, setHome] = useState(true);
    const [person, setPerson] = useState(false);
    const [calender, setCalender] = useState(false);

    const togglePersonScreen = () => {
        setPerson(true)
        setHome(false)
        setCalender(false)
    }
    const toggleCalenderScreen = () => {
        setPerson(false)
        setHome(false)
        setCalender(true)
    }
    const toggleHomeScreen = () => {
        setPerson(false)
        setHome(true)
        setCalender(false)
    }
    return (
        <View style={{ flex: 1 }}>
            <HeaderTitle title="الرئيسية" />
            <Text style={[styles.centers, { top: Constant.space }]}>المراكز</Text>
            <ScrollView showsHorizontalScrollIndicator={false} horizontal style={{ marginTop: "-10%" }}>
                {
                    CentersData.map((i, index) => {
                        return (
                            <Centers key={index.toString()} data={i} index={index} />
                        )
                    })
                }
            </ScrollView>
            <Text style={[styles.centers, { top: Constant.space }]}>خدماتنا</Text>
            <FlatList
                data={OurService}
                keyExtractor={(i, index) => index.toString()}
                renderItem={(item) => <ServicesCard data={item} />}
                numColumns={2}
                style={{ width: SCREEN_WIDTH, alignSelf: "center", marginTop: "-8%" }}
            />
            <Footer
                styleProps={{ borderRadius: 50, position: "absolute", bottom: "2%", right: "3%", left: "3%" }}
                HomeVisible={home}
                personVisible={person}
                NotificationVisible={calender}
                togglePersonScreen={togglePersonScreen}
                toggleCalenderScreen={toggleCalenderScreen}
                toggleHomeScreen={toggleHomeScreen}
            />
        </View>
    )
}
export default Home;