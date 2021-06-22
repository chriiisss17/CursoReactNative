import React, { View } from 'react';
import Camera from '../../components/Camera';

const CameraScreen = ({navigation}) => {
    return(
        <>
            <Camera 
            navigation={navigation}
            />
        </>
    )
}

export default CameraScreen;