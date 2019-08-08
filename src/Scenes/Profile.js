import React, { Component } from 'react';
import {
    StyleSheet,
    Text,
    View,
    Image,
} from 'react-native';



import { db } from '../config';
import { Actions } from "react-native-router-flux"
let itemsRef = db.ref('/profile');




export default class UserProfileView extends Component {
    state = {
        name: "",
        surname: "",
        image: "",
        position: "",
        company: ""
    }
    componentDidMount() {

        itemsRef.on('value', snapshot => {
            let data = snapshot.val();
            let profileData = Object.values(data);
            let finalData = profileData[0];
            if (this.state.name === "") {
                console.log(finalData.image)
                this.setState({
                    name: finalData.name,
                    surname: finalData.surname,
                    image: finalData.image,
                    position: finalData.position,
                    company: finalData.company
                });
            }
            console.log(this.state)
        });


    }
    render() {
        return (
            <View style={styles.container}>
                <View style={styles.header}>
                    <View style={styles.headerContent}>
                        <Image style={styles.avatar}
                            source={{ uri: this.state.image }} />

                        <Text style={styles.name}>{this.state.name} {this.state.surname} </Text>
                    </View>
                </View>

                <View style={styles.body}>
                    <View style={styles.item}>
                        <View style={styles.infoContent}>
                        </View>
                    </View>

                    <View style={styles.item}>
                        <View style={styles.infoContent}>
                            <Text style={styles.info}>Company:  {this.state.company}</Text>
                        </View>
                    </View>

                    <View style={styles.item}>
                        <View style={styles.infoContent}>
                            <Text style={styles.info}>Position:  {this.state.position}</Text>
                        </View>
                    </View>
                </View>
            </View>
        );
    }
}

const styles = StyleSheet.create({
    header: {
        backgroundColor: "#DCDCDC",
    },
    headerContent: {
        padding: 30,
        alignItems: 'center',
    },
    avatar: {
        width: 130,
        height: 130,
        borderRadius: 63,
        borderWidth: 4,
        borderColor: "white",
        marginBottom: 10,
    },
    name: {
        fontSize: 22,
        color: "#000000",
        fontWeight: '600',
    },
    userInfo: {
        fontSize: 16,
        color: "#778899",
        fontWeight: '600',
    },
    body: {
        backgroundColor: "#778899",
        height: 500,
        alignItems: 'center',
    },
    item: {
        flexDirection: 'row',
    },
    infoContent: {
        flex: 1,
        alignItems: 'flex-start',
        paddingLeft: 5
    },
    iconContent: {
        flex: 1,
        alignItems: 'flex-end',
        paddingRight: 5,
    },
    icon: {
        width: 30,
        height: 30,
        marginTop: 20,
    },
    info: {
        fontSize: 18,
        marginTop: 20,
        color: "#FFFFFF",
    }
});