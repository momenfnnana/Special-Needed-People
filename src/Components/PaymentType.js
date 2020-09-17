import React, { useState } from 'react';
import { Text, View, Image, TouchableOpacity } from 'react-native';
import { Colors } from '../Constant';
import styles from './Component.style';

const PaymentType = ({ data, index }) => {
    const [backgroundColor, setBackgroundColor] = useState(Colors.white);
    const toggleButton = () => {
        backgroundColor === Colors.white ? setBackgroundColor(Colors.primary) : setBackgroundColor(Colors.white)
    }
    return (
        <TouchableOpacity onPress={toggleButton} style={[styles.modalPaymentContainer, {
            borderBottomColor: index === 0 ? Colors.primary + 50 : Colors.white
        }]}>
            <View style={[styles.modalInsideContainer, {
                borderColor: backgroundColor === Colors.white ?
                    Colors.white : Colors.primary
            }]}>
                <Text style={styles.modalPaymentCardTitle}>{data.title}</Text>
                <View style={[styles.modalImageContainer, { backgroundColor }]}>
                    <Image source={data.img} />
                </View>
            </View>
        </TouchableOpacity >
    )
}
export default PaymentType;