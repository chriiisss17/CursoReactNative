import React from 'react';
import { Button, PermissionsAndroid } from 'react-native';
import {NodeCameraView} from 'react-native-nodemediaclient';

const Camera =()=>{
  const requestCameraPermission = async () => {
    try {
      const granted = await PermissionsAndroid.request(
        PermissionsAndroid.PERMISSIONS.CAMERA,
        {
          title: "Cool Photo App Camera Permission",
          message:
            "Cool Photo App needs access to your camera " +
            "so you can take awesome pictures.",
          buttonNeutral: "Ask Me Later",
          buttonNegative: "Cancel",
          buttonPositive: "OK"
        }
      );
      if (granted === PermissionsAndroid.RESULTS.GRANTED) {
        console.log("You can use the camera");
      } else {
        console.log("Camera permission denied");
      }
    } catch (err) {
      console.warn(err);
    }
  };
  return(
    <>
    <NodeCameraView 
  style={{ height: 400 }}
  ref={vb => { vb }}
  outputUrl = {"rtmp://192.168.1.20/live/stream"}
  camera={{ cameraId: 1, cameraFrontMirror: true }}
  audio={{ bitrate: 32000, profile: 1, samplerate: 44100 }}
  video={{ preset: 12, bitrate: 400000, profile: 1, fps: 15, videoFrontMirror: false }}
  autopreview={true}
/>
<Button 
title="request permission"
onPress={()=>requestCameraPermission()}
/>
</>
  )
}

export default Camera;