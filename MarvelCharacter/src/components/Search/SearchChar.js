import React, {useState, useEffect} from 'react';
import {StyleSheet, TextInput, View} from 'react-native';
import colors from '../../config/colors';
import Character from './Character';

const styles = StyleSheet.create({
  container: {
    margin: 20,
    padding: 5,
    borderColor: colors.concrete,
    borderWidth: 2,
    borderRadius: 20,
    backgroundColor: colors.clouds,
  },
});

const SearchChar = ({data}) => {
  const [currentText, setValue] = useState('');
  const [currentChar, setCurrentChar] = useState([]);
  useEffect(() => {
    const character = data.filter((value) => value.name.includes(currentText) && currentText != '');
    setCurrentChar(character);
  }, [currentText]);
  return (
    <View style={{flex: 1, backgroundColor: colors.electromagnetic}}>
      <TextInput
        selectionColor={colors.silver}
        style={styles.container}
        onChangeText={(newText) => setValue(newText)}
        value={currentText}
      />
      <Character currentChar={currentChar} />
    </View>
  );
};

export default SearchChar;
