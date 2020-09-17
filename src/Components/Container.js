import React from 'react';
import { Text, View } from 'react-native';

const Container = ({
    children
}) => (
        <View style={{ flex: 1, backgroundColor: "#fff" }}>
            {children}
        </View>
    );

export default Container;
