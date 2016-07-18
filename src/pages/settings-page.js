import React, { Component, } from 'react'
import { View, Text, StyleSheet} from 'react-native'

class SettingsPage extends Component {

  static propTypes = {}

  static defaultProps = {}

  constructor(props) {
    super(props)
    this.state = {}
  }

  render() {
    return (
      <View style={styles.pageWrap}>
        <Text style={styles.textStyle}>Settings Page</Text>
      </View>
    )
  }
}

var styles = StyleSheet.create({
  pageWrap: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: 'white'
  },
  textStyle: {
    fontSize: 50,
  },
});

export default SettingsPage