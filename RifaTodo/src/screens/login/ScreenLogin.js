import React, { PureComponent } from 'react'
import Google from '../../components/login/Google'
import Facebook from '../../components/login/Facebook'
import { StyleSheet, View } from 'react-native'

const styles = StyleSheet.create({
    container:{
        width: '100%',
        height: '100%',
        backgroundColor: 'green',
        justifyContent: 'center'
    }
})

export default class ScreenLogin extends PureComponent {
    render() {
        return (
            <View style={styles.container}>
                <Google/>
                <Facebook/>
            </View>
        )
    }
}
