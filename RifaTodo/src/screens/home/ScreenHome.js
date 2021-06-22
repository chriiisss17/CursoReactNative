import React from 'react';
import { View,Text, TouchableOpacity, StyleSheet } from 'react-native';

const styles = StyleSheet.create({
    container:{
        width: '100%',
        height: '100%',
        justifyContent: 'center',
        backgroundColor: 'grey'
    },
    containerButton:{
        width: '60%',
        backgroundColor: 'green',
        alignSelf: 'center',
        alignItems: 'center',
        margin: 20,
        borderRadius: 30,
        padding: 10,
        borderWidth: 1,
    },
    button:{
        fontSize: 24,
    },
})

const ScreenHome = ({navigation})=>{
    return(
        <View style={styles.container}>
            <TouchableOpacity style={styles.containerButton}
                onPress={()=>navigation.navigate('GenerateScreen')}
            >
                <Text style={styles.button}>Generar rifa</Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.containerButton}
                onPress={()=>navigation.navigate('JoinScreen')}>
                <Text style={styles.button}>Participar rifa</Text>
            </TouchableOpacity>
        </View>
    )
}
export default ScreenHome;