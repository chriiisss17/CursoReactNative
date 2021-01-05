import React, {useEffect,useState} from 'react';
import { ActivityIndicator, FlatList, Text, View } from 'react-native';


const LolData = () =>{

    const [isLoading, setLoading] = useState(true);
    const [data, setData] = useState([]);
  
    useEffect(() => {
      fetch('https://la2.api.riotgames.com/lol/spectator/v4/featured-games')
        .then((response) => response.json())
        .then((json) => setData(json.movies))
        .catch((error) => console.error(error))
        .finally(() => setLoading(false));
    }, []);
  
    return (
      <View style={{ flex: 1, padding: 24 }}>
        {isLoading ? <ActivityIndicator/> : (
          <FlatList
            data={data}
            keyExtractor={({ id }, index) => id}
            renderItem={({ item }) => (
              <Text>{item.title}, {item.releaseYear}</Text>
            )}
          />
        )}
      </View>
    );
};

export default LolData;