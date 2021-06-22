import React, { Component } from 'react';
import { StyleSheet, View } from 'react-native';
import { LoginButton, AccessToken } from 'react-native-fbsdk-next';

const styles = StyleSheet.create({
  container:{
    alignItems: 'center',
    margin: 10,
  },
})

export default class Login extends Component {
  render() {
    return (
      <View style={styles.container}>
      <LoginButton 
        onLoginFinished={
          (error, result) => {
            if (error) {
              console.log("login has error: " + result.error);
            } else if (result.isCancelled) {
              console.log("login is cancelled.");
            } else {
              AccessToken.getCurrentAccessToken().then(
                (data) => {
                  console.log(data.accessToken.toString())
                }
              )
            }
          }
        }
        onLogoutFinished={() => console.log("logout.")}/>
        </View>
    );
  }
};