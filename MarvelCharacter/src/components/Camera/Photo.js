import React from 'react';
import {Image, StyleSheet, Text, View} from 'react-native';
import AwesomeButtonRick from 'react-native-really-awesome-button/src/themes/rick';
import colors from '../../config/colors';

const styles = StyleSheet.create({
  container: {
    height: '100%',
    width: '100%',
    backgroundColor: colors.asbestos,
  },
  img: {
    height: '100%',
    width: '100%',
  },
  containerMsg: {
    backgroundColor: colors.silver,
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  msg: {
    fontSize: 30,
    margin: 20,
  },
});

const Photo = ({data, navigation}) => {
  const back = () => {
    return (
      <View style={styles.containerMsg}>
        <Text style={styles.msg}>Photo not found</Text>
        <AwesomeButtonRick
          backgroundColor={colors.emerald}
          backgroundDarker={colors.greensea}
          type={'primary'}
          size={'medium'}
          onPress={() => navigation.pop()}>
          <Text>Press here to return</Text>
        </AwesomeButtonRick>
      </View>
    );
  };
  if (data) {
    return (
      <View style={styles.container}>
        <Image style={styles.img} source={{uri: data}} />
      </View>
    );
  } else {
    return back();
  }
};
export default Photo;
