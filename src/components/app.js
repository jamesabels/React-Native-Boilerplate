// Import React 
import React, { Component } from 'react';

// Import Router 
import {Scene, Router, Actions} from 'react-native-router-flux';

// Import Pages 
import LoginPage from '../pages/login-page.js' ;
import RegisterPage from '../pages/register-page.js';
import SettingsPage from '../pages/settings-page.js';
import MenuPage from '../pages/menu-page.js';
import MainPage from '../pages/main-page.js';


export default class App extends Component {

    constructor(props) {
      super(props)
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