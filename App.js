import React, { Fragment } from 'react';
import {
  Text,
  StatusBar,
  View,
  TouchableOpacity,
  PermissionsAndroid
} from 'react-native';

import { Router, Scene } from 'react-native-router-flux'
import Location from "./src/Scenes/Location"
import Profile from './src/Scenes/Profile'
import Contact from './src/Scenes/Contact'
import Chatbot from './src/Scenes/Chatbot'
class App extends React.Component {



  render() {
    return (
      <Router>
        <Scene key="root">
          <Scene key="location" component={Location} title="Location Page" initial />
          <Scene key="profile" component={Profile} title="Profile Page" />
          <Scene key="contact" component={Contact} title="Contact Page" />
          <Scene key="chatbot" component={Chatbot} title="Chatbot Page" />
        </Scene>
      </Router>
    );
  }
}

export default App;



