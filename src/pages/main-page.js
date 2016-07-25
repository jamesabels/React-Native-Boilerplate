import React, { Component } from 'react'
import { View, Text, StyleSheet, Navigator, TouchableHighlight } from 'react-native'

// Import Styles
import { LayoutStyles, ButtonStyles } from '../style/style.js';  

// Import Store 
import TestStore from '../stores/test-store.js'; 

// Import Actions 
import TestActions from '../actions/test-actions.js';  

// Import Icons 
import Icon from 'react-native-vector-icons';

//Import tcomb Forms 
import t from 'tcomb-form-native';


class MainPage extends Component {

  static propTypes = {}

  static defaultProps = {}
  
  componentDidMount () {
  }

  constructor(props) {
    super(props)
    this.state = {
      count: 0
    }
  }

  render() {
    return (
      <View style={LayoutStyles.container}>
          <View style={LayoutStyles.pageWrap}>
            <Text style={styles.stateDisplay}>{TestStore.getState()}</Text>
              <Text style={styles.stateButton} onPress={() => this.up()}>
                Up
              </Text>
              <Text  style={styles.stateButton} onPress={() => this.down()}>
                Down
              </Text>
          </View>
        </View>
    )
  }

  up () {
    
    this.setState({
      count: TestStore.getState()
    });

    TestStore.dispatch(TestActions.Increment());
  }

  down () {

    this.setState({
      count: TestStore.getState()
    });

    TestStore.dispatch(TestActions.Deincrement());
  }
}


var styles = StyleSheet.create({
  stateDisplay: { 
    flex: 1,
    textAlign: 'center',
    fontSize: 50
  },
  stateButton: {
    flex: 1,
    color: 'white',
    backgroundColor: 'dimgrey',
    textAlign: 'center',
    fontSize: 40,
    padding: 40
  } 
});


export default MainPage