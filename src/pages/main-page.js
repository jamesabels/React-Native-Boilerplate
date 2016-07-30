import React, { Component } from 'react'
import { View, Text, StyleSheet, Navigator, TouchableHighlight } from 'react-native'

// Import Styles
import { LayoutStyles, ButtonStyles } from '../style/style.js';  

// Import Actions 
import TestActions from '../actions/test_actions.js';  

//Import Connect 
import { connect } from 'react-redux';

// Import Icons 
import Icon from 'react-native-vector-icons';

//Import tcomb Forms 
import t from 'tcomb-form-native';


class MainPage extends Component {

  constructor(props) {
    super(props)
  }

  componentDidMount () {
  
  }

  render() {
    return (
      <View style={LayoutStyles.container}>
          <View style={[LayoutStyles.pageWrap, {backgroundColor: 'darkgrey'}]}>
            <View style={styles.stateDisplay}>
                <Text style={styles.displayText}>{this.props.count}</Text>
            </View>

              <TouchableHighlight style={styles.stateButton} onPress={() => this.props.up()}>
                <Text style={styles.stateButtonText} >Up</Text>
              </TouchableHighlight>
          
              <TouchableHighlight style={styles.stateButton} onPress={() => this.props.down()}>
                <Text style={styles.stateButtonText}>Down</Text>
              </TouchableHighlight>
          
          </View>
        </View>
    )
  }
}

function mapStateToProps(state) {
    return {
        count: state.test
    }
}

function mapDispatchToProps(dispatch) {
    return {
        up: function () {
            dispatch(TestActions.UP());
        },
        down: function () {
            dispatch(TestActions.DOWN());
        } 
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
    marginTop: 5,
  },
  stateButtonText: {
     textAlign: 'center',
     color: 'white',
     fontSize: 40,
  } 
});


export default connect(mapStateToProps, mapDispatchToProps)(MainPage);