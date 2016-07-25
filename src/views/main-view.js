import React, { Component, } from 'react'
import { View, Text, StyleSheet, Navigator, TouchableHighlight } from 'react-native'

// Import Icons
import Icon from 'react-native-vector-icons/FontAwesome'

//Import Styles
import { LayoutStyles } from '../style/style.js';


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
      <View style={LayoutStyles.container}>
        <View style={LayoutStyles.pageWrap}>
            {this.props.children}
        </View>
      </View>
    );
  }  
}

export default MainView