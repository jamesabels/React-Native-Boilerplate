import React, { Component, } from 'react'
import { View, Text, StyleSheet, Navigator, TouchableHighlight } from 'react-native'

//Import Navbar
import NavBar from '../components/NavBar.js';

// Import Icons
import Icon from 'react-native-vector-icons'

// Import Tabs
import Tabs from 'react-native-tabs';

class Page extends Component {

  static propTypes = {}

  static defaultProps = {}

  componentDidMount () {

  }

  constructor(props) {
    super(props)
    this.state = {
        page: this.props.activeTab
    }
  }

render() {
    let navBar = this.props.navBar;
    let content = this.props.content;

    return (
      <View style={styles.container}>
        <View style={styles.pageWrap}>
            {this.props.children}
        </View>
          <Tabs selected={this.state.page} style={styles.tabBarStyles}
          selectedStyle={styles.selectedText} onSelect={el=>this.setState({page:el.props.name})}>
            <Text name="Login" selectedIconStyle={[styles.selectedTab]}  style={styles.textStyle} onPress={() => this.firstTab()}>Login</Text>
            <Text name="Register" selectedIconStyle={[styles.selectedTab]} style={styles.textStyle} onPress={() => this.secondTab()}>Register</Text>
            <Text name="Settings" selectedIconStyle={[styles.selectedTab]} style={styles.textStyle} onPress={() => this.thirdTab()}>Settings</Text>
          </Tabs>
      </View>
    );
  }

  firstTab () {
    this.props.navigator.replace({id: 'Login', config: Navigator.SceneConfigs.PushFromRight});
  }

  secondTab () {
    this.props.navigator.replace({id: 'Register', config: Navigator.SceneConfigs.PushFromRight});
  }

  thirdTab () {
    this.props.navigator.replace({id: 'Settings', config: Navigator.SceneConfigs.PushFromRight});
  }
}

var styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'column'
  },
  pageWrap: {
    flex: 7
  },
  textStyle: {
    color: 'white'
  },
  tabBarStyles: {
    backgroundColor: 'black'
  },
  selectedText: {
    color: 'red'
  },
  selectedTab : {
    borderTopWidth:2,
    borderTopColor:'red'
  }
});


export default Page