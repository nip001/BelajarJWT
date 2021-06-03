import React, { Component } from 'react'
import { View, Text } from 'react-native'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'
import axios from 'axios'

export class Hello extends Component {
    constructor(props) {
        super(props)
    }

    componentDidMount(){
        this.getAuth()
    }

    getAuth(){
        axios.get('http://01f0bb381ff6.ngrok.io/hello/',{
            headers: { Authorization: `Bearer ${this.props.token}` }
        })
        .then((response)=>{
            let data = response.data
            alert(data)
        })
        .catch((error)=>{
            console.log(error)
            alert("Ga dapet akses")
            this.props.navigation.navigate('Home')
        })
    }

    render() {
        return (
            <View>
                <Text> prop </Text>
            </View>
        )
    }
}

const mapStateToProps = (state) => ({
    token: state.UserReducer.token
})

const mapDispatchToProps = {
    
}

export default connect(mapStateToProps, mapDispatchToProps)(Hello)
