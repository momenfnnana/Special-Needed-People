import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { Splash, Login, SignUp, SonFormData, Home, ServiceDetails, Map } from '../screens/Index';
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
                <Stack.Screen name="Map" component={Map} />
            </Stack.Navigator>
        </NavigationContainer>
    )
}
export default Navigator;