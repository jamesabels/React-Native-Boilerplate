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
          <View style={[LayoutStyles.pageWrap, {backgroundColor: 'darkgrey'}]}>
            <View style={styles.stateDisplay}>
                <Text style={styles.displayText}>{TestStore.getState()}</Text>
            </View>

              <TouchableHighlight style={styles.stateButton} onPress={() => this.up()}>
                <Text style={styles.stateButtonText} >Up</Text>
              </TouchableHighlight>
          
              <TouchableHighlight style={styles.stateButton} onPress={() => this.down()}>
                <Text style={styles.stateButtonText}>Down</Text>
              </TouchableHighlight>
          
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
    backgroundColor: 'darkgrey',
    justifyContent: 'center'
  },
  displayText: {
    textAlign: 'center',
    fontSize: 50
  },
  stateButton: {
    flex: 1,
    justifyContent: 'center',
    backgroundColor: 'dimgrey',
    padding: 40,
    marginBottom: 5,
  },
  stateButtonText: {
     textAlign: 'center',
     color: 'white',
     fontSize: 40,
  } 
});


export default MainPage