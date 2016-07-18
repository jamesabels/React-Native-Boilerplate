import React, { Component, } from 'react'
import { View, StyleSheet, Navigator } from 'react-native'

// Import scrollable tab view 
import ScrollableTabView from 'react-native-scrollable-tab-view';

//Import Navbar
import NavBar from '../components/NavBar.js'; 

//Import Pages 
import SettingsPage from '../pages/settings-page.js';
import LoginPage from '../pages/login-page.js';
import MainPage from '../pages/main-page.js';



class MainView extends Component {

  static propTypes = {}

  static defaultProps = {}

  constructor(props) {
    super(props)
    this.state = {}
  }

  render() {
    return (
      <View style={styles.container}>
        <NavBar 
          textColor="white"
          title="App Name"
          leftText="Logout"
          leftButton={() => this.logout()}
        />
        <ScrollableTabView 
          tabBarPosition="bottom" 
          style={styles.pageWrap}
          tabBarUnderlineColor="white"
          tabBarBackgroundColor="black"
          tabBarInactiveTextColor="dimgrey"
          tabBarActiveTextColor="white" 
          >
            <MainPage tabLabel="Main" />
            <SettingsPage tabLabel="Settings" />
       
        </ScrollableTabView>
      </View>
    )
  }
  logout () {
    this.props.navigator.pop();
  }
}

var styles = StyleSheet.create({
  container: {
    marginTop: 20,
    flex: 1,
    flexDirection: 'column'
  },
  pageWrap: {
    flex: 11
  }
});


export default MainView