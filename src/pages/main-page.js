import React, { Component, } from 'react'
import { View, Text, StyleSheet, Navigator } from 'react-native'

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
        <View style={styles.pageWrap}>
            <Text style={styles.textStyle}>Main Page</Text>
        </View>
      </View>
    )
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
  },
  
});


export default MainPage