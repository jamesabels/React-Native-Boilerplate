import React, { Component, } from 'react'
import { View, Text, StyleSheet, Navigator, TouchableHighlight } from 'react-native'

//Import Navbar
import NavBar from '../components/NavBar.js';

// Import Icons
import Icon from 'react-native-vector-icons/FontAwesome'

// Import Tabs
import { TabBar, Tab}  from '../components/TabBar.js';

class MainView extends Component {

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
    return (
      <View style={styles.container}>
        <View style={styles.pageWrap}>
            {this.props.children}
        </View>
          <TabBar>
            <Tab  
              label="Main"
              iconName="home"
              onTabPress={() => this.secondTab()}
            />
            <Tab  
              label="Settings"
              iconName="sliders"
              onTabPress={() => this.thirdTab()}
            />
          </TabBar>
      </View>
    );
  }

  firstTab () {
    this.props.navigator.replace({id: 'Login', config: Navigator.SceneConfigs.PushFromRight});
  }

  secondTab () {
    this.props.navigator.replace({id: 'Main', config: Navigator.SceneConfigs.PushFromRight});
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


export default MainView