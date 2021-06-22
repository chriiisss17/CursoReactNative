import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';
import CameraScreen from '../screens/camera/CameraScreen';
import LoginScreen from '../screens/logo/LogoScreen';
import Socket from '../socket/Socket';

const RootNavigation = () => {
    const Stack = createStackNavigator();
    return(
        <NavigationContainer>
            <Stack.Navigator initialRouteName="Socket">
                <Stack.Screen name="LoginScreen" component={LoginScreen} options={{headerShown: false}}/>
                <Stack.Screen name="CameraScreen" component={CameraScreen} options={{headerShown: false}}/>
                <Stack.Screen name="Socket" component={Socket} options={{headerShown: false}}/>
            </Stack.Navigator>
        </NavigationContainer>
    )
}

export default RootNavigation;