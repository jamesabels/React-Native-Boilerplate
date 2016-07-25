import React, { Component } from 'react';

// Import React Naitve Components
import {
  TouchableHighlight,
  AppRegistry,
  StyleSheet,
  Text,
  View
} from 'react-native';

// Import Router 
import {Scene, Router, Actions} from 'react-native-router-flux';

// Import Pages 
import LoginPage from './src/pages/login-page.js' ;
import RegisterPage from './src/pages/register-page.js';
import SettingsPage from './src/pages/settings-page.js';
import MenuPage from './src/pages/menu-page.js';
import MainPage from './src/pages/main-page.js';

// Import Views
import MainView from './src/views/main-view.js';

class Project extends Component {

      constructor(props) {
        super(props)
        this.state = {
        }
      }

    render() {
      return (
        <Router>
          <Scene key="Root">
            <Scene key="Login" component={LoginPage} title="Login" rightTitle="Register" onRight={() => {Actions.Register();}}/>
            <Scene key="Register" component={RegisterPage} title="Register"/>
          </Scene>
          <Scene key="Main">
            <Scene 
              key="Counter" 
              component={MainPage} 
              title="Counter"
              rightTitle="Log Out" 
              onRight={() => {Actions.pop();}}
              leftTitle="Menu" 
              onLeft={() => {Actions.Menu();}}
               />
            <Scene key="Settings" component={SettingsPage} title="Settings"/>
            <Scene key="Menu" component={MenuPage} title="Menu"/>
          </Scene>
        </Router>
      );
  }
}

AppRegistry.registerComponent('Project', () => Project);
