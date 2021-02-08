import React, {useContext, useState} from 'react';
import {Alert, ImageBackground, StyleSheet, Text, View} from 'react-native';
import {TextInput} from 'react-native-gesture-handler';
import colors from '../../config/colors';
import AwesomeButtonProgress from 'react-native-really-awesome-button/src/themes/rick';
import {LoginContext} from '../../context/AuthContext';

const styles = StyleSheet.create({
  container: {
    height: '100%',
  },
  imgBackground: {
    width: '100%',
    height: '100%',
    justifyContent: 'center',
    alignItems: 'center',
  },
  login: {
    fontSize: 40,
    margin: 10,
    color: colors.clouds,
  },
  containerInput: {
    width: '80%',
  },
  textInput: {
    borderWidth: 1,
    margin: 10,
    backgroundColor: 'white',
    borderRadius: 20,
    fontSize: 16,
    textAlign: 'center',
  },
  containerButton: {
    margin: 10,
    borderWidth: 1,
  },
  button: {
    fontSize: 24,
    color: colors.electromagnetic,
  },
});

const Login = () => {
  const [username, setUser] = useState('');
  const [password, setPassword] = useState('');
  //const submitData = () =>console.log(username,password);
  const {signIn} = React.useContext(LoginContext);
  return (
    <View style={styles.container}>
      <ImageBackground
        source={require('../../assets/logo/loginbackground.jpg')}
        style={styles.imgBackground}>
        <Text style={styles.login}>Login</Text>
        <View style={styles.containerInput}>
          <TextInput
            style={styles.textInput}
            placeholder={'User'}
            autoCapitalize={'none'}
            value={username}
            onChangeText={(newText) => setUser(newText)}
          />
          <TextInput
            style={styles.textInput}
            placeholder={'Password'}
            autoCapitalize={'none'}
            secureTextEntry
            value={password}
            onChangeText={(newText) => setPassword(newText)}
          />
        </View>
        <AwesomeButtonProgress
          style={styles.containerButton}
          type={'secundary'}
          size={'medium'}
          onPress={() => {
            signIn(username, password);
          }}>
          <Text style={styles.button}>Enter</Text>
        </AwesomeButtonProgress>
      </ImageBackground>
    </View>
  );
};

export default Login;
