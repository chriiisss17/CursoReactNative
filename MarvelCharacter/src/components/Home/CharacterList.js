import React from 'react';
import {FlatList} from 'react-native';
import colors from '../../config/colors';
import CharacterCard from './CharacterCard';

const CharacterList = ({data, navigation}) => {
  return (
    <FlatList
      style={{backgroundColor: colors.electromagnetic}}
      data={data}
      keyExtractor={({id}) => id.toString()}
      renderItem={({
        item: {
          id,
          name,
          description,
          thumbnail: {path, extension},
        },
      }) => (
        <CharacterCard
          id={id}
          name={name}
          description={description}
          path={path}
          extension={extension}
          navigation={navigation}
        />
      )}
    />
  );
};

export default CharacterList;
