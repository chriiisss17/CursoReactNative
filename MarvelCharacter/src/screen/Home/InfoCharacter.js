import React from 'react';
import { Image, StyleSheet, Text, View } from 'react-native';
import { ScrollView } from 'react-native-gesture-handler';
import colors from '../../config/colors';

const styles = StyleSheet.create({
    container:{
        height: '100%',
        width: '100%',
        backgroundColor: colors.asbestos,
    },
    containerImg:{
        height: 400,
        width: '100%',
    },
    img: {
        width: '100%',
        height: '100%',
    },
    containerText:{
        marginLeft: 10,
        marginRight: 10,
    },
    title:{
        fontSize: 24,
        alignSelf: 'center',
        margin: 10,
    },
    descriptionText:{
        fontSize: 16,
        marginBottom: 10,
    },
})

const InfoCharacter = ({route}) =>{
    const { params:{ name,description,path,extension }} = route;
    return(
        <ScrollView style={styles.container}>
            <View style={styles.containerImg}>
                <Image 
                    style={styles.img}
                    source={{uri: path+'.'+ extension}}
                />
            </View>
            <View style={styles.containerText}>
                <Text style={styles.title}>{name}</Text>
                <Text style={styles.descriptionText}>{description || "Without description"}</Text>
            </View>
        </ScrollView>
    )
}

export default InfoCharacter;