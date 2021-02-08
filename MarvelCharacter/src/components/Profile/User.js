import React from 'react';
import { Button, StyleSheet, Text, View } from 'react-native';
import colors from '../../config/colors';

const styles = StyleSheet.create({
    container:{
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: colors.electromagnetic,
    },
    text:{
        fontSize: 20,
        margin: 5,
        borderRadius: 10,
        width: '70%',
        padding: 5,
        textAlign: 'center',
        color: colors.clouds,
    },
})

const User = ({data:{name,mail,number}})=>{
    return(
        <View style={styles.container}>
            <Text style={styles.text}>{name}</Text>
            <Text style={styles.text}>{mail}</Text>
            <Text style={styles.text}>{number}</Text>
        </View>
    )
}

export default User;