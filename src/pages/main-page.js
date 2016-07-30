import React, { Component } from 'react'
import { View, Text, StyleSheet, Navigator, TouchableHighlight, Image } from 'react-native'

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
                  <Image source={{uri: this.props.image}} style={{flex: 1}}/>
              </View>

              <TouchableHighlight style={styles.stateButton} onPress={() => this.props.fetch('http://jsonplaceholder.typicode.com/photos')}>
                <Text style={styles.stateButtonText} >Change Image</Text>
              </TouchableHighlight>

            </View>
        </View>
    )
  }
}

function mapStateToProps(state) {
    return {
        image: state.test.image
    }
}

function mapDispatchToProps(dispatch) {
    return {
        fetch: function (url) {
            dispatch(TestActions.GET_DATA(url));
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
    borderColor: 'black',
    borderBottomWidth: 10
  },
  stateButtonText: {
     textAlign: 'center',
     color: 'white',
     fontSize: 40,
  } 
});


export default connect(mapStateToProps, mapDispatchToProps)(MainPage);