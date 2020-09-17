import React, { useState, useEffect } from 'react';
import { View, Text, Image, Dimensions } from 'react-native';
import styles from './Map.style';
import MapView, { Marker } from 'react-native-maps';
import * as Location from 'expo-location';
import { HeaderTitle, Button, PaymentType, ModalButton } from '../../Components/Index';
import { Colors } from '../../Constant';
import Modal from 'react-native-modal';
import { PaymentTypeDate } from '../../FakeData/Index';
const SCREEN_WIDTH = Dimensions.get('window').width;

const Map = ({ navigation }) => {
    const [modalVisible, setModalVisible] = useState(false);
    useEffect(() => {
        startWatching()
    }, [])
    const startWatching = async () => {
        try {
            await Location.requestPermissionsAsync();
            await Location.watchPositionAsync({
                accuracy: Location.Accuracy.BestForNavigation,
                timeInterval: 1000,
                distanceInterval: 10
            }, (location) => {
                console.log(location);
                setRegion(location)
            })
        } catch (e) {
            setErr(e)
        }
    }

    const [region, setRegion] = useState({ coords: { latitude: 14.552914630666724, longitude: 121.05091402307153 } });

    const onRegionChange = (region) => {
        console.log("newregion", region);
    }
    console.log("PaymentTypeDate", PaymentTypeDate);
    return (
        <View style={styles.container}>
            <HeaderTitle title="تحديد الموقع"
                goBack={() => navigation.goBack()}
                backButtonVisible={true}
                propsStyle={{
                    position: "absolute",
                    top: "-6.5%",
                    zIndex: 10,
                }} />
            <MapView
                region={{
                    latitude: region.coords?.latitude,
                    longitude: region.coords?.longitude,
                    longitudeDelta: 0.01,
                    latitudeDelta: 0.01,
                    zoom: 17
                }}
                onRegionChange={onRegionChange}
                style={styles.MapView}
            >
                <Marker
                    coordinate={{
                        latitude: region.coords.latitude,
                        longitude: region.coords.longitude,
                    }}
                    title={"sdafswerf wef few "}
                >
                    <Image source={require('../../../assets/images/Marker.png')} />
                </Marker>
            </MapView>
            <View style={{ position: "absolute", bottom: 0, zIndex: 10, alignItems: "center", alignSelf: "center" }}>
                <Button
                    title="حفظ الموقع"
                    backgroundColor={Colors.primary}
                    TextColor={Colors.white}
                    onPress={() => setModalVisible(true)}
                />
            </View>
            <Modal
                isVisible={modalVisible}
                onBackdropPress={() => setModalVisible(false)}
                onSwipeComplete={() => setModalVisible(false)}
                swipeDirection="down"
                style={{ width: SCREEN_WIDTH / 1.3, alignSelf: "center" }}
            // backdropColor="transparent"
            >
                <View style={{
                    backgroundColor: "#fff",
                    alignItems: "center",
                    borderRadius: 15,
                    paddingBottom: "7%"
                }}>
                    <Text style={styles.modalTitle}>اختر طريقة الدفع</Text>
                    {
                        PaymentTypeDate.map((i, index) => {
                            return (
                                <PaymentType key={index.toString()} data={i} index={index} />
                            )
                        })
                    }
                    <ModalButton title="إستمرار" onPress={() => {
                        setModalVisible(false),
                            navigation.navigate('OnlinePayment')
                    }} />
                </View>
            </Modal>
        </View>
    )
}
export default Map;