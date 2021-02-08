import React from 'react';
import { Image, StyleSheet, Text, View } from 'react-native';
import colors from '../../config/colors';

const styles = StyleSheet.create({
    container:{
        height: 100,
        width: 100,
        borderRadius: 50,
        margin: 10,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: colors.midnightblue,
    },
    img:{
        width: '100%',
        height: '100%',
    },
})

const Photo = () =>{
    return(
        <View style={styles.container}>
            <Image 
            source={require('../../assets/logo/spiderman.png')}
            />
        </View>
    )
}

export default Photo;