import React, { Component } from 'react';
import {StyleSheet, View} from 'react-native';
import {GoogleSignin,GoogleSigninButton,statusCodes} from '@react-native-google-signin/google-signin';

const styles = StyleSheet.create({
  container:{
    alignItems: 'center',
    margin: 10,
  },
})

export default class Google extends Component {
    componentDidMount=()=>{
        GoogleSignin.configure();
    }

    signIn = async () => {
        try {
          await GoogleSignin.hasPlayServices();
          const userInfo = await GoogleSignin.signIn();
          this.setState({ userInfo });
        } catch (error) {
          if (error.code === statusCodes.SIGN_IN_CANCELLED) {
            // user cancelled the login flow
          } else if (error.code === statusCodes.IN_PROGRESS) {
            // operation (e.g. sign in) is in progress already
          } else if (error.code === statusCodes.PLAY_SERVICES_NOT_AVAILABLE) {
            // play services not available or outdated
          } else {
            // some other error happened
          }
        }
      };
    render(){
        return(
          <View style={styles.container}>
            <GoogleSigninButton
                style={{width: 192,height: 48}}
                size={GoogleSigninButton.Size.Wide}
                color={GoogleSigninButton.Color.Dark}
                onPress={this.signIn}
            />
            </View>
        )
    }
}

