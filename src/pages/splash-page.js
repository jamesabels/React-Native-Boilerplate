import React, { Component, } from 'react'
import { View, Text, StyleSheet, Navigator } from 'react-native'

// Import Styles 
import { LayoutStyles } from '../style/style.js';  

class SplashPage extends Component {

  static propTypes = {}

  static defaultProps = {}
  
  componentDidMount () {
   setTimeout(function () {  
      this.props.navigator.replace({id: 'Login', config: Navigator.SceneConfigs.PushFromRight});
    }.bind(this), 2000); 
  }

  constructor(props) {
    super(props)
    this.state = {}
  }

  render() {
    return (
      <View style={LayoutStyles.pageWrap}>
        <Text style={styles.textStyle}>Splash Page</Text>
      </View>
    )
  }
}

var styles = StyleSheet.create({
  textStyle: {
    fontSize: 50,
    color: 'white'
  },
});


export default SplashPage