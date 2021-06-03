import axios from 'axios'
import React, { Component } from 'react'
import { Text, TextInput, TouchableOpacity, View } from 'react-native'

export class Register extends Component {

    constructor(props) {
        super(props)
        this.state={
            username:"",
            password:"",
            alamat:""
        }
    }

    submitHandler(){
        axios.post('http://01f0bb381ff6.ngrok.io/register',this.state)
        .then((response)=>{
            let data = response.data
            alert(`${data.username} Berhasil dimasukan`)
            this.props.navigation.navigate('Home')
        }).catch((error)=>{
            console.log(error)
        })
    }

    render() {
        return (
            <View>
                <Text> Username </Text>
                <TextInput placeholder="Masukan Username" onChangeText={(value)=>{this.setState({username:value})}}/>
                <Text> Password </Text>
                <TextInput placeholder="Masukan Password" onChangeText={(value)=>{this.setState({password:value})}}/>
                <Text> Alamat </Text>
                <TextInput placeholder="Masukan Alamat" onChangeText={(value)=>{this.setState({alamat:value})}}/>
                <TouchableOpacity style={{borderWidth:5,margin:20}} onPress={()=>{this.submitHandler()}}><Text style={{alignSelf: 'center'}}>Submit</Text></TouchableOpacity>
            </View>
        )
    }
}

export default Register
