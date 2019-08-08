import React, { Component } from 'react';
import {
    StyleSheet,
    Text,
    View,
    Image,
    Button
} from 'react-native';

import email from 'react-native-email'
import call from 'react-native-phone-call';
import openMap from 'react-native-open-maps';
import { Actions } from "react-native-router-flux"

export default class ContactView extends Component {
    state = {

    }

    handleEmail = () => {
        const to = ['sgardilyan@payva.com'] // string or array of email addresses
        email(to, {
            // Optional additional arguments
            cc: [], // string or array of email addresses
            bcc: '', // string or array of email addresses
            subject: 'Example Email',
            body: 'Some body right here'
        }).catch(console.error)
    }

    handleCall = () => {
        //handler to make a call
        const args = {
            number: '+37499998899',
            prompt: false,
        };
        call(args).catch(console.error);
    };

    handleMap() {
        openMap({ latitude: 40.2036944, longitude: 44.5319413 });
    }

    componentDidMount() {

    }

    render() {
        return (
            <View style={styles.container}>
                <Text style={styles.email} onPress={this.handleEmail} >Email: sgardilyan@payva.com</Text>
                <Text style={styles.email} onPress={this.handleCall} >Phone: +37499998899</Text>
                <Text style={styles.email} onPress={this.handleMap} >Address: 10A Nersisyan St , Yerevan 0014 , Armenia</Text>
                <Text style={styles.chatbot} onPress={() => Actions.chatbot()} >Press for ChatBot</Text>
            </View>
        );
    }
}
const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
        alignItems: 'center',
        justifyContent: 'center'
    },
    email: {
        marginTop: 15
    },
    chatbot: {
        marginTop: 15,
        color: '#A34B'

    }
})