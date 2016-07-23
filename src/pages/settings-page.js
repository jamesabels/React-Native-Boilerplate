import React, { Component } from 'react'
import { View, Text, StyleSheet, Navigator, TouchableHighlight } from 'react-native'

//Import Styles
import { LayoutStyles, ButtonStyles } from '../style/style.js';

//Import Navbar
import NavBar from '../components/NavBar.js'; 

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

  static propTypes = {}

  static defaultProps = {}

  constructor(props) {
    super(props)
    this.state = {}
  }

  render() {
    return (
      <View style={LayoutStyles.container}>
       <NavBar
            textColor="white"
            title="Settings"
            leftText="Logout"
            buttonSize={16}
            leftButton={() => this.back()}
        />
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

   back () {
    this.props.navigator.pop()
   }
}

export default SettingsPage