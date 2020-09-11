import React, { useState } from 'react';
import { View, Text, Image, TouchableOpacity } from 'react-native';
import { Colors } from '../Constant';
import styles from './Component.style';
const ModalSpecialistsCards = ({ data, onPress }) => {
    const [backgroundColor, setBackgroundColor] = useState(Colors.white)
    const [nameColor, setNameColor] = useState(Colors.primary)
    const [jobColor, setJobColor] = useState(Colors.semiGray)
    const selectDoctor = () => {
        backgroundColor === Colors.white ? (setBackgroundColor(Colors.primary),
            setNameColor(Colors.secondary),
            setJobColor(Colors.white),
            onPress()
        ) : (
                setBackgroundColor(Colors.white),
                setNameColor(Colors.primary),
                setJobColor(Colors.semiGray)
            )
    }
    return (
        <TouchableOpacity onPress={selectDoctor} style={[styles.specialistsModalContainer, { backgroundColor: backgroundColor }]}>
            <Image source={data.img === null ? require('../../assets/images/UserImage.png') : data.img} />
            <View style={{ marginRight: "3%" }}>
                <View style={{ flexDirection: "row-reverse" }}>
                    <Text style={[styles.specialistsName, { color: nameColor }]}>{data.name}</Text>
                    <View style={styles.specialistsStatusContainer}>
                        <Text style={[styles.speicalistsStatus, { color: data.status === "نشط الآن" ? Colors.green : Colors.red }]}>{data.status}</Text>
                        <View style={[styles.specialistsStatusColor, { backgroundColor: data.status === "نشط الآن" ? Colors.green : Colors.red }]} />
                    </View>
                </View>
                <Text style={[styles.specialistsJob, { marginVertical: "3%", color: jobColor }]}>{data.job}</Text>
            </View>
        </TouchableOpacity>
    )
}
export default ModalSpecialistsCards;