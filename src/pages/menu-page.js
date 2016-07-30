import React, { Component } from 'react'
import { View, Text, StyleSheet, Navigator, TouchableHighlight } from 'react-native'

// Import Actions
import {Actions} from 'react-native-router-flux';


//Import Connect 
import { connect } from 'react-redux';

//Import Styles
import { LayoutStyles, ButtonStyles } from '../style/style.js';

// Import Icons 
import Icon from 'react-native-vector-icons/FontAwesome';

//Import tcomb Forms 
import t from 'tcomb-form-native';

var Form = t.form.Form; 

var Settings = t.struct({
  Setting_One: t.Boolean,
  Setting_Two: t.Boolean,
  Setting_Three: t.Boolean
});

var Options = {}

class MenuPage extends Component {

  constructor(props) {
    super(props)
  }

  render() {
    return (
      <View style={[LayoutStyles.container, styles.background]}>
        <View style={LayoutStyles.pageWrap}>
            <View style={styles.menuHeader}>
                <Text style={styles.headerStyle}>React Native Boilerplate</Text>
            </View>
            <View style={[styles.listWrap, styles.background]}>
                <TouchableHighlight style={styles.listItem} underlayColor="black" onPress={() => {Actions.pop()}}><Text style={styles.listText}>Home</Text></TouchableHighlight>
                <TouchableHighlight style={styles.listItem} underlayColor="black" onPress={() => {Actions.Settings()}}><Text style={styles.listText}>Settings</Text></TouchableHighlight>
            </View>

        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
    background: {
        backgroundColor: 'darkgrey'
    },
    menuHeader: {
        justifyContent: 'center',
        backgroundColor: 'dimgrey',
        flex: 0.4,
        flexDirection: 'column'
    },
    headerStyle: {
        color: 'white',
        textAlign: 'center',
        fontSize: 30
  },
  listWrap: {
    flex: 0.8,
  },
  listItem: {
      flex: 0.3,
      backgroundColor: 'grey',
      justifyContent: 'center',
      marginTop: 10

  },
  listText: {
    color: 'white',
    fontSize: 30,
    textAlign: 'center',
  }
});


function mapStateToProps(state) {
    return {
       
    }
}

function mapDispatchToProps(dispatch) {
    return {
     
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(MenuPage);