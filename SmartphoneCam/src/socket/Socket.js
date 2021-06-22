import React from 'react';
import { Component } from 'react';
import { Button, StyleSheet, View } from 'react-native';
import { mediaDevices, RTCPeerConnection, RTCView } from 'react-native-webrtc';
import { io } from 'socket.io-client';
import {NetworkInfo} from 'react-native-network-info';

const styles = StyleSheet.create({
  container:{
    width: '100%',
    height: '100%'
  },
  rtc:{
    flex: 1 ,
  },
})

export default class Socket extends Component{
  constructor(props){
    super(props);

    this.state={
      stream: null,
      me: "",
      receivingcall: false,
      caller: "",
      callerSignal: undefined,
      callAccepted: false,
      idToCall: "",
      callEnded: false,
      name: "",
      peerConnection: new RTCPeerConnection(),
      ip: '',
      socket: io('http://192.168.1.30:3000/'),
    }

  }
  componentDidMount=()=>{
    const {ip} = this.state;
  }

  start=async()=>{
    const {peerConnection,socket} = this.state;
    peerConnection;
    console.log("ON READY");
    const {stream} = this.state;
    if(!stream){ 
      try {
        const o = await mediaDevices.getUserMedia({video: true})
        .then((stream)=>{
          peerConnection.addStream(stream);
          this.setState({ stream: stream})
          peerConnection.createOffer()
          .then(sdp =>peerConnection.setLocalDescription(sdp))
          .then(()=>{
            socket.emit('offer',peerConnection.localDescription)
          });
          socket.emit('live',{msg: "hola"});
        });
      } catch (error) {
        console.log(error);
      }
      socket.on('answer',(message)=>{
        peerConnection.setRemoteDescription(message);
      })
    }
  }

  stop=()=>{
    console.log("OFF LIVE");
    const {stream} = this.state;
    if(stream){
      stream.release();
      this.setState({stream: null});
    }
  }

  callUser = (id) =>{
    const configuration = {iceServers: [{url: 'stun:stun.l.google.com:19302'}]};
    const peer = new RTCPeerConnection(configuration);
    peer.on("signal",(data)=>{
      socket.emit("callUser",{
        
      })
    })
  }

  render(){
    const {stream} = this.state;
    return(
      <View style={styles.container}>
        {stream && <RTCView streamURL={stream.toURL()} style={styles.rtc}/>}
        <Button title="ON" onPress={this.start}/>
        <Button title="OFF" onPress={this.stop}/>
      </View>
    )
  }
}