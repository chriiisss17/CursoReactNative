import React, { Component } from 'react';
import database from '@react-native-firebase/database';
import {data, rafflesUser} from '../components/data/index';
import { Button, FlatList, View } from 'react-native';

export default class ListRaffles extends Component{
    constructor(props){
        super(props);

        this.state={
            dataRaffles: data,
        }
    }


    render(){
        return(
            <View>
                <FlatList
                    data={data}
                    keyExtractor={({id})=>id}
                    renderItem={({item: {}})}
                />
                <Button title="prueba" onPress={this.selectRaffle}/>
            </View>
        )
    }
}