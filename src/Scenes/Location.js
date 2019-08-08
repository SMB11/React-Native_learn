import React, { Fragment } from 'react';
import {
    Text,
    StatusBar,
    View,
    TouchableOpacity,
    PermissionsAndroid
} from 'react-native';

import GetButton from '../components/button'
// if (__DEV__) {
//   import('./ReactotronConfig').then(() => console.log('Reactotron Configured'))
// }
// import Reactotron from 'reactotron-react-native'
// import { requestLocationPermission } from './src/access';

import { db } from '../config';
import { Actions } from "react-native-router-flux"
let itemsRef = db.ref('/items');



class Location extends React.Component {
    state = {
        locations: [],
        foundLocation: "",
        firebaseData: ""
    }

    componentDidMount() {
        // itemsRef.on('value', snapshot => {
        //   let data = snapshot.val();
        //   let locations = Object.values(data);
        //   this.setState({ locations });
        // });

    }



    // ButtonPressedHandler = () => {
    //   // navigator.geolocation.getCurrentPosition(
    //   //   position => {
    //   //     const location = JSON.stringify(position);

    //   //     console.log(location)
    //   //   },
    //   //   error => Alert.alert(error.message),
    //   //   { enableHighAccuracy: false, timeout: 2000000 }
    //   // );

    //   // this.addItem("First Time")



    // }


    //This function takes in latitude and longitude of two location and returns the distance between them as the crow flies (in km)
    // calcCrow(lat1, lon1, lat2, lon2) {
    //   var R = 6371; // km
    //   var dLat = this.toRad(lat2 - lat1);
    //   var dLon = this.toRad(lon2 - lon1);
    //   var lat1 = this.toRad(lat1);
    //   var lat2 = this.toRad(lat2);

    //   var a = Math.sin(dLat / 2) * Math.sin(dLat / 2) +
    //     Math.sin(dLon / 2) * Math.sin(dLon / 2) * Math.cos(lat1) * Math.cos(lat2);
    //   var c = 2 * Math.atan2(Math.sqrt(a), Math.sqrt(1 - a));
    //   var d = R * c;
    //   var res = d * 1000; //distance in meters
    //   return res;
    // }

    // // Converts numeric degrees to radians
    // toRad(Value) {
    //   return Value * Math.PI / 180;
    // }


    ButtonPressedHandlerLogging = () => {
        let loc = {
            Latitude: 40.203818,
            Longitude: 44.532100
        }
        // this.findClosestLocation(loc)
        fetch('https://us-central1-payva-payment.cloudfunctions.net/getTime')
            .then((response) => response.text())
            .then((responseJson) => {
                this.setState({ firebaseData: responseJson })
            })
            .catch((err) => console.log(err))

        console.log(this.state.firebaseData)



    }

    // async componentDidMount() {
    //   await requestLocationPermission()
    // }


    // addItem = item => {
    //   db.ref('/items').push({
    //     name: item
    //   });
    // };

    // findClosestLocation = (location) => {
    //   // let loc = this.state.locations;
    //   console.log(loc)
    //   if (loc) {
    //     loc.map(val => {
    //       var dist = this.calcCrow(location.Latitude, location.Longitude, val.Latitude, val.Longitude)
    //       if (dist <= 30) {
    //         this.setState({ foundLocation: "Latitude: " + val.Latitude + " Longitude: " + val.Longitude + " Distance is: " + dist + " meters" });
    //       }
    //     })
    //   }
    //   else {
    //     console.log("Please wait!")
    //   }
    // }

    render() {
        return (
            <View>
                <StatusBar barStyle="dark-content" />
                <Text>GPS Info</Text>
                {/* <GetButton
          buttonPressed={this.ButtonPressedHandler}
          title="Get GPS Data"
        /> */}
                <GetButton
                    buttonPressed={this.ButtonPressedHandlerLogging}
                    title="Log Data"
                />
                <Text>{this.state.firebaseData}</Text>
                <GetButton
                    buttonPressed={() => Actions.profile()}
                    title="Switch to Profile Page" />
                <Text>  </Text>
                <GetButton
                    buttonPressed={() => Actions.contact()}
                    title="Switch to Contact Page" />
            </View>
        );
    }
}

export default Location;



