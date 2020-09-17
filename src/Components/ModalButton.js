import React from 'react';
import { TouchableOpacity, Text, Dimensions } from 'react-native';
import { Colors } from '../Constant';
const SCREEN_WIDTH = Dimensions.get('window').width;
const ModalButton = ({ title, onPress }) => (
    <TouchableOpacity onPress={onPress} style={{ backgroundColor: Colors.primary, width: SCREEN_WIDTH / 1.5, paddingVertical: 18, borderRadius: 10, justifyContent: "center", alignItems: "center" }}>
        <Text style={{ color: Colors.white, fontSize: 15, fontFamily: "ArbFONTS-Montserrat-Arabic-Regular" }}>{title}</Text>
    </TouchableOpacity>
);

export default ModalButton;
