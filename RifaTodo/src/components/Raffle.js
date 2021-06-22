import React, { Component } from 'react';
import { Image, StyleSheet, Text, TouchableOpacity, View } from 'react-native';

const styles = StyleSheet.create({
    container:{
        width: '100%',
        height: '100%',
        backgroundColor: 'grey',
        justifyContent: 'center',
    },
    containerRaffle:{
        width: '90%',
        alignSelf: 'center',
    },
    title:{
        fontSize: 24,
        textAlign: 'center',
        margin: 10,
    },
    containerImg:{
        width: '100%',
        height: '60%',
    },
    img:{
        width: '100%',
        height: '100%',
        backgroundColor: 'red'
    },
    containerDescription:{
        width: '40%',
    },
    containerDescription2:{
        width: '40%',
    },
    description:{
        margin: 5,
        fontSize: 16,
        textAlign: 'center',
        height: 40,
    },
    containerButton:{
        flexDirection: 'row',
        width: '100%',
        justifyContent: 'center',
    },
    button:{
        borderWidth: 1,
        width: '35%',
        margin: 15,
        alignItems: 'center',
        borderRadius: 15,
    },
    textButton:{
        fontSize: 20,
    },
})

export default class Raffle extends Component {
    constructor(props){
        super(props);

    }

    componentDidMount=async()=>{
    }


    render() {
        return (
            <View style={styles.container}>
                <View style={styles.containerRaffle}>
                    <Text style={styles.title}>Copete</Text>
                    <View style={styles.containerImg}>
                        <Image style={styles.img}
                            source={{}}
                        />
                    </View>
                    <View style={{flexDirection: 'row', justifyContent: 'center'}}>
                        <View style={styles.containerDescription}>
                            <Text style={styles.description}>Valor por N° $1000000</Text>
                            <Text style={styles.description}>Cantidad de N° 100000</Text>
                        </View>
                        <View style={styles.containerDescription2}>
                            <Text style={styles.description}>Cierre del sorteo 20/20/2002</Text>
                            <Text style={styles.description}>Tipo de entrega Envío</Text>
                        </View>
                    </View>
                    <View style={styles.containerButton}>
                    <TouchableOpacity style={styles.button}>
                        <Text style={styles.textButton}>Crear Rifa</Text>
                    </TouchableOpacity>
                    <TouchableOpacity style={styles.button}>
                        <Text style={styles.textButton}>Cancelar</Text>
                    </TouchableOpacity>
                </View>
                </View>
            </View>
        )
    }
}
