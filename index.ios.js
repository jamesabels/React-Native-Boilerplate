import React, { Component } from 'react';

// Import React Naitve Components
import {
  Navigator, 
  TouchableHighlight,
  AppRegistry,
  StyleSheet,
  Text,
  View
} from 'react-native';

// Import Pages 
import LoginPage from './src/pages/login-page.js' ;
import RegisterPage from './src/pages/register-page.js';
import SettingsPage from './src/pages/settings-page.js';
import MainPage from './src/pages/main-page.js';

// Import Views
import MainView from './src/views/main-view.js';

// Import Components
import NavBar from './src/components/NavBar.js';

class Project extends Component {

      constructor(props) {
        super(props)
        this.state = {
        }
      }

    render() {
      const routes = [
        {id: 'Login', config: Navigator.SceneConfigs.PushFromRight},
      ];
      return (
          <Navigator 
            initialRouteStack={routes}
            initialRoute={routes[0]}
            renderScene={this.renderScene}
            configureScene={this.configScene}
          />
      );
  }
  renderScene (route, navigator) {

      switch (route.id) {
        
        case 'Login':
          return  (
            <LoginPage navigator={navigator} />
          );

        case 'Register': 
          return  (
            <RegisterPage navigator={navigator} />
          );

        case 'Settings':
         return  (
             <MainView activeTab='Settings' navigator={navigator} >
                 <SettingsPage navigator={navigator} />
             </MainView>
          );
        case 'Main': 
        return (
          <MainView activeTab='Main' navigator={navigator} >
            <MainPage navigator={navigator} />
          </MainView>
        );
        default: 
          return (
            <LoginPage navigator={navigator} />
          )
      }
  }
  configScene (route, routeStack) {
    return route.config
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center'
  },
    textStyle: {
    fontSize: 50,
  },
});

AppRegistry.registerComponent('Project', () => Project);
