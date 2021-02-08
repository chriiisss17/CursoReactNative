import React from 'react';
import { useContext } from 'react';
import CharacterList from '../../components/Home/CharacterList';
import {StorageContext} from '../../context/Storage';

const Home = ({navigation}) =>{
    const {characterData} = useContext(StorageContext);
    return(
        <>
            <CharacterList
            data={characterData}
            navigation={navigation}
            />
        </>
    )
}

export default Home;

