import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';
import ScreenHome from '../screens/home/ScreenHome';
import ScreenLogin from '../screens/login/ScreenLogin';
import ScreenJoin from '../screens/joinRaffle/ScreenJoin';
import ScreenGenerate from '../screens/generateRaffle/ScreenGenerate';


const Stack = createStackNavigator();

const RootNavigation = () =>{
    return(
        <NavigationContainer>
            <Stack.Navigator initialRouteName="HomeScreen">
                <Stack.Screen name="LoginScreen" component={ScreenLogin} options={{headerShown: false}}/>
                <Stack.Screen name="HomeScreen" component={ScreenHome} options={{headerShown: false}}/>
                <Stack.Screen name="GenerateScreen" component={ScreenGenerate} options={{headerShown: false}}/>
                <Stack.Screen name="JoinScreen" component={ScreenJoin} options={{headerShown: false}}/>
            </Stack.Navigator>
        </NavigationContainer>
    )
}
export default RootNavigation;