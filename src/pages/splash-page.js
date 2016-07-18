import React, { Component, } from 'react'
import { View, Text, StyleSheet, Navigator } from 'react-native'

class SplashPage extends Component {

  static propTypes = {}

  static defaultProps = {}
  
  componentDidMount () {
   setTimeout(function () {  
      this.props.navigator.push({id: 'Login', config: Navigator.SceneConfigs.FloatFromBottom});
    }.bind(this), 2000); 
  }

  constructor(props) {
    super(props)
    this.state = {}
  }

  render() {
    return (
      <View style={styles.pageWrap}>
        <Text style={styles.textStyle}>Splash Page</Text>
      </View>
    )
  }
}

var styles = StyleSheet.create({
  pageWrap: {
    marginTop: 20,
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: 'dimgrey'
  },
  textStyle: {
    fontSize: 50,
    color: 'white'
  },
  
});


export default SplashPage