import React from 'react';
import * as Animatable from 'react-native-animatable';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import { StyleSheet, Text, View } from 'react-native';

const styles = StyleSheet.create({
    container:{
        alignItems: 'center',
        justifyContent: 'center',
        flex: 1,
    },
    icon:{
    },
    title:{
        fontSize: 24,
    },
})

const LogoScreen = ({navigation}) =>{
    setTimeout(()=>{
        navigation.navigate('CameraScreen')
    },4500)
    return(
        <View style={styles.container}>
            <Animatable.View animation={'bounceOut'} duration={2000} iterationCount={2} direction={'reverse'}>
                <MaterialCommunityIcons style={styles.icon} name="webcam" size={140} color={'green'}/>
            </Animatable.View>
            <Animatable.Text animation={'bounceInRight'} duration={2500} iterationCount={2} style={styles.title}> Phone WebCam</Animatable.Text>
        </View>
    )
}

export default LogoScreen;