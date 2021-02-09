import React from 'react';
import Photo from '../../components/Camera/Photo';

const PhotoScreen = ({navigation, route}) => {
  const {
    params: {sourceUri},
  } = route;
  return <Photo data={sourceUri} navigation={navigation} />;
};
export default PhotoScreen;
