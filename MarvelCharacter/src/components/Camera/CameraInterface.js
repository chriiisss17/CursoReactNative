import React, {PureComponent} from 'react';
import {View, StyleSheet, Text, Image} from 'react-native';
import {RNCamera} from 'react-native-camera';
import {TouchableOpacity} from 'react-native-gesture-handler';
import colors from '../../config/colors';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'column',
    backgroundColor: 'black',
  },
  preview: {
    flex: 1,
    justifyContent: 'flex-end',
    alignItems: 'center',
  },
  capture: {
    flex: 0,
    backgroundColor: '#fff',
    borderRadius: 5,
    padding: 15,
    paddingHorizontal: 20,
    alignSelf: 'center',
    margin: 20,
  },
  containerButton: {
    position: 'absolute',
    alignSelf: 'center',
    bottom: 0,
    width: '20%',
    height: '15%',
    backgroundColor: colors.concrete,
    borderRadius: 50,
    margin: 10,
    padding: 5,
  },
  button: {
    width: '100%',
    height: '100%',
    borderRadius: 50,
    borderWidth: 5,
    backgroundColor: colors.clouds,
    borderColor: colors.concrete,
  },
  textButton: {},
  containerPhoto: {
    position: 'absolute',
    alignSelf: 'center',
    bottom: 0,
    right: 0,
    width: '13%',
    height: '10%',
    backgroundColor: colors.concrete,
    borderRadius: 50,
    margin: 20,
  },
  photo: {
    width: '100%',
    height: '100%',
    borderRadius: 50,
  },
});

export default class CameraInterface extends PureComponent {
  constructor(props) {
    super(props);

    this.state = {
      sourceUri: null,
    };
  }
  render() {
    const {navigation} = this.props;
    const {sourceUri} = this.state;
    return (
      <View style={styles.container}>
        <RNCamera
          ref={(ref) => {
            this.camera = ref;
          }}
          style={styles.preview}
          type={RNCamera.Constants.Type.back}
          flashMode={RNCamera.Constants.FlashMode.auto}
          captureAudio={false}
        />
        <View style={styles.containerButton}>
          <TouchableOpacity
            style={styles.button}
            onPress={() => this.takePicture()}>
            <Text style={styles.textButton}></Text>
          </TouchableOpacity>
        </View>
        <View style={styles.containerPhoto}>
          <TouchableOpacity
            style={styles.photo}
            onPress={() => this.showPhoto()}>
            <Image
              style={{width: '100%', height: '100%'}}
              source={{uri: sourceUri}}
            />
          </TouchableOpacity>
        </View>
      </View>
    );
  }
  takePicture = async () => {
    if (this.camera) {
      const options = {quality: 0.5, base64: true};
      const data = await this.camera.takePictureAsync(options);
      if (data) {
        this.setState({sourceUri: data.uri});
      }
    }
  };
  showPhoto = () => {
    const {sourceUri} = this.state;
    const {navigation} = this.props;
    navigation.navigate('Photo', {sourceUri});
  };
}
