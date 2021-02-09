import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';
import HomeTab from './BottomTabStack';
import InfoCharacter from '../screen/Home/InfoCharacter';
import colors from '../config/colors';
import Login from '../screen/Login/Login';
import {useContext} from 'react/cjs/react.development';
import {LoginContext} from '../context/AuthContext';
import {ImageBackground, StyleSheet, Text, View} from 'react-native';
import PhotoScreen from '../screen/Camera/PhotoScreen';

const styles = StyleSheet.create({
  container: {
    width: '100%',
    height: 50,
  },
  imgBack: {
    width: '100%',
    height: '100%',
  },
});

const Stack = createStackNavigator();
const RootNavigation = () => {
  const {isLogin} = useContext(LoginContext);
  console.log(isLogin);
  return (
    <NavigationContainer>
      <Stack.Navigator>
        {isLogin == false ? (
          <Stack.Screen
            name="Login"
            component={Login}
            options={{headerShown: false}}
          />
        ) : (
          <>
            <Stack.Screen
              name="Marvel"
              component={HomeTab}
              options={{
                header: () => (
                  <View style={styles.container}>
                    <ImageBackground
                      source={require('../assets/logo/headermarvel.jpg')}
                      style={styles.imgBack}>
                      <Text></Text>
                    </ImageBackground>
                  </View>
                ),
              }}
            />
            <Stack.Screen
              name="InfoCharacter"
              component={InfoCharacter}
              options={{title: 'Character Information'}}
            />
            <Stack.Screen
            name="Photo"
            component={PhotoScreen}
            options={{headerShown: false}}
            />
          </>
        )}
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default RootNavigation;
