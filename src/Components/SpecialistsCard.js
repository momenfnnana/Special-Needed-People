import React from 'react';
import { View, Text, Image, TouchableOpacity } from 'react-native';
import { Colors } from '../Constant';
import styles from './Component.style';
const SpecialistsCard = ({ data, onPress }) => {
    return (
        <View style={styles.specialistsContainer}>
            <View style={styles.specialistsContainerAbove}>
                <Image style={{ marginRight: "5%" }} source={data.img === null ? require('../../assets/images/UserImage.png') : data.img} />
                <View style={{ marginRight: 10 }}>
                    <View style={styles.specialistsDetailsContainer}>
                        <Text style={[styles.specialistsName, { color: Colors.primary }]}>{data.name}</Text>
                        <View style={styles.specialistsStatusContainer}>
                            <Text style={[styles.speicalistsStatus, { color: data.status === "نشط الآن" ? Colors.green : Colors.red }]}>{data.status}</Text>
                            <View style={[styles.specialistsStatusColor, { backgroundColor: data.status === "نشط الآن" ? Colors.green : Colors.red }]} />
                        </View>
                    </View>
                    <Text style={[styles.specialistsJob, { color: Colors.semiGray }]}>{data.job}</Text>
                </View>
            </View>
            <TouchableOpacity onPress={onPress} style={styles.specialistsButtonContainer}>
                <Text style={styles.specialistsButtonText}>تواصل</Text>
            </TouchableOpacity>
        </View>
    )
}
export default SpecialistsCard;