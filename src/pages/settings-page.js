import React, { Component } from 'react'
import { View, Text, StyleSheet, Navigator, TouchableHighlight } from 'react-native'

// Import Actions
import {Actions} from 'react-native-router-flux';

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

class SettingsPage extends Component {

  constructor(props) {
    super(props)
  }

  render() {
    return (
      <View style={LayoutStyles.container}>
        <View style={LayoutStyles.pageWrap}>
          <Form 
            ref="form" 
            type={Settings} 
            options={Options} 
          />
        </View>
      </View>
    );
  }
}

export default SettingsPage