import React from 'react';
import { View, Text } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { Splash, Login, SignUp, SonFormData, Home, ServiceDetails } from '../screens/Index';
const Stack = createStackNavigator();

const Navigator = () => {
    return (
        <NavigationContainer>
            <Stack.Navigator screenOptions={{ headerShown: false }}>
                <Stack.Screen name="Splash" component={Splash} />
                <Stack.Screen name="Login" component={Login} />
                <Stack.Screen name="SignUp" component={SignUp} />
                <Stack.Screen name="SonFormData" component={SonFormData} />
                <Stack.Screen name="Home" component={Home} />
                <Stack.Screen name="ServiceDetails" component={ServiceDetails} />
            </Stack.Navigator>
        </NavigationContainer>
    )
}
export default Navigator;