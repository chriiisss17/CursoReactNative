import React, { useEffect, useState } from 'react';
import {Image, ImageBackground, StyleSheet, Text, View} from 'react-native';
import { FlatList } from 'react-native-gesture-handler';
import colors,{randomColor} from '../../config/colors';

const styles = StyleSheet.create({
  container:{
    margin: 10,
    borderWidth: 5,
  },
  containerTitle:{
    width: '95%',
    alignSelf: 'center',
    borderWidth: 1,
    borderRadius: 10,
    backgroundColor: colors.amethyst,
    marginTop: 4,
    marginLeft: 2,
    marginRight: 2,
  },
  title:{
    alignSelf: 'center',
    fontSize: 24,
  },
  containerImg:{
    height: 400,
    width: '90%',
    borderWidth: 1,
    alignSelf: 'center',
  },
  image:{
    height: '100%',
    width: '100%',
  },
  containerDescription:{
    alignSelf: 'center',
    borderWidth: 1,
    borderRadius: 10,
    backgroundColor: colors.concrete,
    width: '95%',
  },
  description:{
    fontSize: 14,
    margin: 5,
  },
  containerComics:{
    width: '90%',
    borderWidth: 1,
    alignSelf: 'center',
    justifyContent: 'center',
    alignItems: 'center',
    height: 50,
    marginBottom: 4,
    backgroundColor: colors.clouds,
    opacity: 0.8,
  },
  comics:{
    fontSize: 18,
    color: 'black',
  },
  backImg:{
    width: '100%',
    height: '100%',
  },
})

const Character = ({currentChar}) => {
  if (currentChar) {
    return (
        <>
        <FlatList
          data={currentChar}
          keyExtractor={({id})=>id.toString()}
          renderItem={({
            item: {
              name,
              description,
              thumbnail: {path, extension},
              comics: {available,
                items},
            },
          }) => (
            <View style={styles.container}>
              <ImageBackground source={{uri: path+'.'+extension}}
                style={{
                  flex: 1,
                  resizeMode: "cover",
                  justifyContent: "center"
                }}
              >
              <View style={styles.containerTitle}>
                <Text style={styles.title}>{name}</Text>
              </View>
              <View style={styles.containerImg}>
                <Image 
                  style={styles.image}
                  source={{uri:path+'.'+extension}}
                />
              </View>
              <View style={styles.containerDescription}>
                <Text style={styles.description}>{description || "Sin descripción"}</Text>
              </View>
              <View style={styles.containerComics}>
                <Text style={styles.comics}>{`Comics disponibles: ${available}`}</Text>
              </View>
              </ImageBackground>
            </View>
          )}
        />
        </>
    );
  }
  return <></>;
};

export default Character;
