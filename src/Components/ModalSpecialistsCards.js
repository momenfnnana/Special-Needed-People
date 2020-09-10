import React from 'react';
import { View, Text, Image, TouchableOpacity, Dimensions } from 'react-native';
import { Colors } from '../Constant';
import styles from './Component.style';
const ModalSpecialistsCards = ({ data }) => {
    return (
        <TouchableOpacity style={styles.specialistsModalContainer}>
            <Image source={data.img === null ? require('../../assets/images/UserImage.png') : data.img} />
            <View style={{ marginRight: "3%" }}>
                <View style={{ flexDirection: "row-reverse" }}>
                    <Text style={styles.specialistsName}>{data.name}</Text>
                    <View style={styles.specialistsStatusContainer}>
                        <Text style={[styles.speicalistsStatus, { color: data.status === "نشط الآن" ? Colors.green : Colors.red }]}>{data.status}</Text>
                        <View style={[styles.specialistsStatusColor, { backgroundColor: data.status === "نشط الآن" ? Colors.green : Colors.red }]} />
                    </View>
                </View>
                <Text style={[styles.specialistsJob, { marginVertical: "3%" }]}>{data.job}</Text>
            </View>
        </TouchableOpacity>
    )
}
export default ModalSpecialistsCards;