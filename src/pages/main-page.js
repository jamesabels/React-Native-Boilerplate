import React, { Component, } from 'react'
import { View, Text, StyleSheet, Navigator } from 'react-native'

//Import Navbar
import NavBar from '../components/NavBar.js'; 

class MainPage extends Component {

  static propTypes = {}

  static defaultProps = {}
  
  componentDidMount () {
  }

  constructor(props) {
    super(props)
    this.state = {}
  }

  render() {
    return (
      <View style={styles.container}>
        <NavBar
          textColor="white"
          title="Main"
          leftText="Logout"
          leftButton={() => this.logout()}
        />
        <View style={styles.pageWrap}>
            <Text style={styles.textStyle} onPress={() => this.secondaryPage()}>Main Page</Text>
        </View>
      </View>
    )
  }

  secondaryPage () {
      this.props.navigator.push({id: 'Secondary', config: Navigator.SceneConfigs.FloatFromBottom});
  }

  logout () {
    this.props.parentNavigator.push({id: 'Login', config: Navigator.SceneConfigs.FloatFromBottom});
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
    fontSize: 50,
    color: 'black'
  },
  
});


export default MainPage