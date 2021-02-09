import React from 'react';
import {useState, useEffect} from 'react';
import {
  StyleSheet,
  Text,
  View,
  TextInput,
  TouchableOpacity,
} from 'react-native';
import User from '../../components/Profile/User';
import colors from '../../config/colors';
import AsyncStorage from '@react-native-async-storage/async-storage';
import Photo from '../../components/Profile/Photo';
import Loading from '../../components/commons/Loading';
import { ScrollView } from 'react-native-gesture-handler';

const styles = StyleSheet.create({
  container: {
    backgroundColor: colors.electromagnetic,
    height: '100%',
    width: '100%',
  },
  title: {
    fontSize: 34,
    color: colors.clouds,
    alignSelf: 'center',
  },
  textInput: {
    backgroundColor: colors.clouds,
    borderWidth: 1,
    width: '90%',
    alignSelf: 'center',
    borderRadius: 10,
    margin: 10,
  },
  containerButton: {
    alignSelf: 'center',
    borderRadius: 20,
    marginTop: 10,
    width: '40%',
    alignItems: 'center',
    backgroundColor: colors.alizarin,
  },
  button: {
    margin: 10,
    color: colors.clouds,
  },
  containerButtonAlter: {
    position: 'absolute',
    backgroundColor: colors.alizarin,
    width: '40%',
    borderRadius: 20,
    bottom: '30%',
    alignSelf: 'center',
  },
  buttonAlter: {
    textAlign: 'center',
    margin: 10,
  },
  containerImg: {
    alignItems: 'center',
    alignContent: 'center',
  },
});

const Profile = ({}) => {
  const [name, setName] = useState('');
  const [mail, setMail] = useState('');
  const [number, setNumber] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const [currentProfile, setCurrentProfile] = useState([]);
  const saveData = () => {
    if (name && mail && number) {
      setIsLoading(true);
      AsyncStorage.setItem('user', JSON.stringify({name, mail, number}));
      setCurrentProfile({name, mail, number});
    }
  };
  const alterData = () => {
    setIsLoading(true);
    AsyncStorage.clear();
    setCurrentProfile();
  };
  useEffect(() => {
    setIsLoading(true);
    AsyncStorage.getItem('user').then((res) => {
      const data = JSON.parse(res);
      setCurrentProfile(data);
    });
  }, []);
  if (currentProfile) {
    return (
      <>
        <View style={{flex: 1}}>
          <Loading data={{isLoading, setIsLoading}}>
            <User data={currentProfile} />
            <TouchableOpacity
              style={styles.containerButtonAlter}
              onPress={() => alterData()}>
              <Text style={styles.buttonAlter}>Alter</Text>
            </TouchableOpacity>
          </Loading>
        </View>
      </>
    );
  } else {
    return (
      <ScrollView style={styles.container}>
        <Loading data={{isLoading, setIsLoading}}>
          <Text style={styles.title}>Profile</Text>
          <View style={styles.containerImg}>
            <Photo />
          </View>
          <TextInput
            style={styles.textInput}
            placeholder="Enter your name"
            value={name}
            onChangeText={(newText) => setName(newText)}
          />
          <TextInput
            style={styles.textInput}
            placeholder="Enter your correo"
            keyboardType={'email-address'}
            value={mail}
            onChangeText={(newText) => setMail(newText)}
          />
          <TextInput
            style={styles.textInput}
            placeholder="Enter your number"
            keyboardType={'number-pad'}
            value={number}
            onChangeText={(newText) => setNumber(newText)}
          />
          <TouchableOpacity
            style={styles.containerButton}
            onPress={() => saveData()}>
            <Text style={styles.button}>SAVE</Text>
          </TouchableOpacity>
        </Loading>
      </ScrollView>
    );
  }
};

export default Profile;
