import React from 'react';
import { StyleSheet, TextInput, TouchableOpacity, View ,Text} from 'react-native';

const styles = StyleSheet.create({
    container:{
        width: '100%',
        height: '100%',
        backgroundColor: 'grey',
        justifyContent: 'center',
        alignItems: 'center'
    },
    title:{
        fontSize: 24,
        margin: 5,
    },
    textInput:{
        borderWidth: 1,
        borderRadius: 30,
        width: '80%',
        textAlign: 'center',
        fontSize: 20,
    },
    button:{
        margin: 10,
        borderWidth: 1,
        width: '25%',
        alignItems: 'center',
    },
    textButton:{
        fontSize: 20,
    },
})

const JoinRaffle = ()=>{
    return(
        <View style={styles.container}>
            <TextInput 
                style={styles.textInput}
                placeholder={"Ingresa el código de rifa"}
            />
            <TouchableOpacity style={styles.button}>
                <Text style={styles.textButton}>Unirse</Text>
            </TouchableOpacity>
        </View>
    )
}
export default JoinRaffle