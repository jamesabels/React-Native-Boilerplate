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
import SplashPage from './src/pages/splash-page.js';
import LoginPage from './src/pages/login-page.js' ;
import RegisterPage from './src/pages/register-page.js';

// Import Views
import MainView from './src/views/main-view.js';

class Project extends Component {
    render() {
      const routes = [
        {id: 'Splash', config: Navigator.SceneConfigs.PushFromRight},
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
        case 'Splash':
          return <SplashPage navigator={navigator}/>
        case 'Login': 
          return <LoginPage navigator={navigator} /> 
        case 'Register': 
          return <RegisterPage navigator={navigator} />
        case 'Main': 
          return <MainView navigator={navigator} />
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
