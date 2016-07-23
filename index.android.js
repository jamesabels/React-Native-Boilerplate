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
import Page from './src/pages/page.js';

// Import Views
import TabView from './src/views/tab-view.js';

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
        case 'Splash':
          return <SplashPage navigator={navigator}/>

        case 'Login':

          return  (
          <Page activeTab='Login' navigator={navigator} >
              <LoginPage navigator={navigator} />
          </Page>
          );

        case 'Register': 

          return  (
                <Page activeTab='Register' navigator={navigator} >
                    <RegisterPage navigator={navigator} />
                </Page>
           );

        case 'Settings':
         return  (
             <Page activeTab='Settings' navigator={navigator} >
                 <SettingsPage navigator={navigator} />
             </Page>
          );
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
