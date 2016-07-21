import React, { Component, } from 'react'
import { View, Text, StyleSheet, Navigator } from 'react-native'

//Import Pages 
import SettingsPage from '../pages/settings-page.js';
import LoginPage from '../pages/login-page.js';
import SecondaryPage from '../pages/secondary-page.js';

class MainView extends Component {

  static propTypes = {}

  static defaultProps = {}
  
  componentDidMount () {
  }

  constructor(props) {
    super(props)
    this.state = {}
  }

  render() {
      const routes = [
        {id: 'Main', config: Navigator.SceneConfigs.PushFromRight},
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
        case 'Main': 
          return <MainPage navigator={navigator} parentNavigator={this.props.navigator}/>
        case 'Secondary':
            return <SecondaryPage navigator={navigator} parentNavigator={this.props.navigator}/>
      }
  }

  configScene (route, routeStack) {
    return route.config
  }
}

export default MainView