import React, { Component } from 'react'
import { Text, TouchableOpacity, View } from 'react-native'

export class Home extends Component {
    // componentDidMount(){
    //     console.log(this.props.navigation.navigate)
    // }
    render() {
        return (
            <View style={{alignSelf: 'center'}}>
                <TouchableOpacity style={{borderWidth:5,margin:20}} onPress={()=>{this.props.navigation.navigate('Hello')}}>
                    <Text style={{alignSelf: 'center'}}>Hello</Text>
                </TouchableOpacity>

                <TouchableOpacity style={{borderWidth:5,margin:20}} onPress={()=>{this.props.navigation.navigate('Login')}}>
                    <Text style={{alignSelf: 'center'}}>Login</Text>
                </TouchableOpacity>

                <TouchableOpacity style={{borderWidth:5,margin:20}}  onPress={()=>{this.props.navigation.navigate('Register')}}>
                    <Text style={{alignSelf: 'center'}}>Register</Text>
                </TouchableOpacity>
            </View>
        )
    }
}

export default Home
