import React, { Component, } from 'react'
import { View, Text, StyleSheet, Navigator } from 'react-native'

//Import Navbar
import NavBar from '../components/NavBar.js'; 

class SecondaryPage extends Component {

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
            <View style={styles.pageWrap}>
                <Text style={styles.textStyle} onPress={() => this.back()}>Secondary Page</Text>
            </View>
      </View>
    )
  }
  back () {
      this.props.navigator.pop(); 
  }
}


var styles = StyleSheet.create({
  pageWrap: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center'
  },
  textStyle: {
    fontSize: 50,
    color: 'black'
  },
  
});


export default SecondaryPage