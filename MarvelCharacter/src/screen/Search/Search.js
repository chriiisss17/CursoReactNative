import React from 'react';
import { useContext } from 'react/cjs/react.development';
import SearchChar from '../../components/Search/SearchChar';
import { StorageContext } from '../../context/Storage';

const Search = ({navigate,route}) => {
  const {characterData} = useContext(StorageContext);
  return(
    <>
      <SearchChar data={characterData}/>
    </>
  );
}

export default Search;