import React, { Component } from 'react'
import { Text, View } from 'react-native'
import { createStackNavigator } from '@react-navigation/stack';
import Home from '../page/Home';
import Login from '../page/Login';
import Register from '../page/Register';
import Hello from '../page/Hello';

const Stack = createStackNavigator()
export class Router extends Component {
    render() {
        return (
            <Stack.Navigator initialRouteName={Home}>
                <Stack.Screen name="Home" component={Home}/>
                <Stack.Screen name="Login" component={Login}/>
                <Stack.Screen name="Register" component={Register}/>
                <Stack.Screen name="Hello" component={Hello}/>
            </Stack.Navigator>
        )
    }
}

export default Router
