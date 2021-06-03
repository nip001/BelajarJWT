import axios from 'axios'
import React, { Component } from 'react'
import { View, Text, TextInput, TouchableOpacity } from 'react-native'
import { connect } from 'react-redux'
import { UserAction } from '../redux/Action'

export class Login extends Component {
    constructor(props) {
        super(props)
        this.state={
            username:"",
            password:"",
        }
    }

    submitHandler(){
        axios.post('http://01f0bb381ff6.ngrok.io/authenticate',this.state)
        .then((response)=>{
            let data = response.data
            this.props.UserAction("token",data.jwttoken)
            alert('Token Berhasil di dapat')
            this.props.navigation.navigate('Home')
        }).catch((error)=>{console.log(error)})
    }

    render() {
        return (
            <View>
                <Text> Username </Text>
                <TextInput placeholder="Masukan Username" onChangeText={(value)=>{this.setState({username:value})}}/>
                <Text> Password </Text>
                <TextInput placeholder="Masukan Password" onChangeText={(value)=>{this.setState({password:value})}}/>
                <TouchableOpacity style={{borderWidth:5,margin:20}} onPress={()=>{this.submitHandler()}}><Text style={{alignSelf: 'center'}}>Submit</Text></TouchableOpacity>
            </View>
        )
    }
}

const mapStateToProps = (state) => ({
})

const mapDispatchToProps = {
    UserAction,
}

export default connect(mapStateToProps, mapDispatchToProps)(Login)
