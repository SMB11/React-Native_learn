import React, { Component } from 'react';
import {
    StyleSheet,
    Text,
    View,
    TouchableOpacity,
    Image,
    Alert,
    ScrollView,
    TextInput,
    FlatList,
    Button
} from 'react-native';

import { db } from '../config';
let itemsRef = db.ref('/messages');

export default class Chat extends Component {

    constructor(props) {
        super(props);
        this.state = {
            data: [
                { id: 1, date: "9:50 am", type: 'in', message: "Hello" },
                { id: 2, date: "9:55 am", type: 'in', message: "Welcome to PayVa,Please Leave your message" },

            ],
            id: 5
        };
    }

    renderDate = (date) => {
        return (
            <Text style={styles.time}>
                {date}
            </Text>
        );
    }


    sendFunction = () => {
        id = this.state.id;
        data = this.state.data;
        date = new Date().toLocaleTimeString();
        itemsRef.push({
            id: id,
            text: this.state.name_address,
            type: "out",
            date: date
        });
        this.setState({ id: id + 1 })
        data.push({ id: id, date: date, type: "out", message: this.state.name_address })
        console.log(data)
        this.setState({ data: data })

        if (data[data.length - 1].message.includes("support") || data[data.length - 1].message.includes("technical")) {
            data.push({ id: id + 2, date: date, type: "in", message: "Please leave your phone number, Our operators will contact you soon" })
        }
        else {
            data.push({ id: id + 2, date: date, type: "in", message: "Please, specify what kind of problem you have" })

        }

    }

    render() {

        return (
            <View style={styles.container}>
                <FlatList style={styles.list}
                    data={this.state.data}
                    keyExtractor={(item) => {
                        return item.id;
                    }}
                    renderItem={(message) => {
                        const item = message.item;
                        let inMessage = item.type === 'in';
                        let itemStyle = inMessage ? styles.itemIn : styles.itemOut;
                        return (
                            <View style={[styles.item, itemStyle]}>
                                {!inMessage && this.renderDate(item.date)}
                                <View style={[styles.balloon]}>
                                    <Text>{item.message}</Text>
                                </View>
                                {inMessage && this.renderDate(item.date)}
                            </View>
                        )
                    }} />
                <View style={styles.footer}>
                    <View style={styles.inputContainer}>
                        <TextInput style={styles.inputs}
                            placeholder="Write a message..."
                            underlineColorAndroid='transparent'
                            onChangeText={(name_address) => this.setState({ name_address })} />
                    </View>

                    <TouchableOpacity onPress={this.sendFunction} style={styles.btnSend}>
                        <Image source={{ uri: "https://png.icons8.com/small/75/ffffff/filled-sent.png" }} style={styles.iconSend} />
                    </TouchableOpacity>
                </View>
            </View>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1
    },
    list: {
        paddingHorizontal: 17,
    },
    footer: {
        flexDirection: 'row',
        height: 60,
        backgroundColor: '#eeeeee',
        paddingHorizontal: 10,
        padding: 5,
    },
    btnSend: {
        backgroundColor: "#00BFFF",
        width: 40,
        height: 40,
        borderRadius: 360,
        alignItems: 'center',
        justifyContent: 'center',
    },
    iconSend: {
        width: 30,
        height: 30,
        alignSelf: 'center',
    },
    inputContainer: {
        borderBottomColor: '#F5FCFF',
        backgroundColor: '#FFFFFF',
        borderRadius: 30,
        borderBottomWidth: 1,
        height: 40,
        flexDirection: 'row',
        alignItems: 'center',
        flex: 1,
        marginRight: 10,
    },
    inputs: {
        height: 40,
        marginLeft: 16,
        borderBottomColor: '#FFFFFF',
        flex: 1,
    },
    balloon: {
        maxWidth: 250,
        padding: 15,
        borderRadius: 20,
    },
    itemIn: {
        alignSelf: 'flex-start',
        color: '#333',
        backgroundColor: '#f6f8fa',
    },
    itemOut: {
        alignSelf: 'flex-end',
        color: '#fff',
        backgroundColor: '#439bff',

    },
    time: {
        alignSelf: 'flex-end',
        margin: 15,
        fontSize: 12,
        color: "#808080",
    },
    item: {
        marginVertical: 4,
        backgroundColor: "#eeeeee",
        borderRadius: 100,
        flexDirection: 'column',
        flex: 10,
        padding: 3,
        maxWidth: 250,
    },
});  