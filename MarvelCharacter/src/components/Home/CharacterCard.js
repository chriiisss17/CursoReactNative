import React, {Component} from 'react';
import {Image, StyleSheet, Text, View} from 'react-native';
import colors, {allColors} from '../../config/colors';
import AwesomeButtonRick from 'react-native-really-awesome-button/src/themes/rick';

const randomColor = allColors[Math.floor(Math.random() * allColors.length)];
const styles = StyleSheet.create({
  container: {
    borderRadius: 10,
    margin: 10,
  },
  containerTitle: {
    alignItems: 'center',
    backgroundColor: randomColor,
    borderTopRightRadius: 10,
    borderTopLeftRadius: 10,
  },
  title: {
    fontSize: 20,
    color: 'black',
  },
  containerImage: {
    height: 200,
  },
  image: {
    width: '100%',
    height: '100%',
    borderBottomRightRadius: 20,
  },
  buttonContainer: {
    position: 'absolute',
    bottom: 0,
    right: 0,
  },
  button: {
    fontSize: 14,
    color: colors.clouds,
  },
});

export default class CharacterCard extends Component {
  render() {
    const {name, description, path, extension, navigation} = this.props;
    return (
      <View style={styles.container}>
        <View style={styles.containerTitle}>
          <Text style={styles.title}>{name}</Text>
        </View>
        <View style={styles.containerImage}>
          <Image style={styles.image} source={{uri: path + '.' + extension}} />
        </View>
        <AwesomeButtonRick
          style={styles.buttonContainer}
          onPress={() =>
            navigation.navigate('InfoCharacter', {
              name,
              description,
              path,
              extension,
            })
          }
          type={'secundary'}
          width={80}
          height={30}
          backgroundDarker={colors.asbestos}
          backgroundColor={colors.concrete}
          backgroundActive={colors.midnightblue}>
          <Text style={styles.button}>Who is ...?</Text>
        </AwesomeButtonRick>
      </View>
    );
  }
}
