import React, { Component } from 'react'
import { View, Text, Navigator, TouchableHighlight } from 'react-native'

// Import Actions 
import LoginActions from '../actions/login_actions.js';  

//Import Connect 
import { connect } from 'react-redux';

// Import Router Actions
import {Actions} from 'react-native-router-flux';

//Import Styles
import { LayoutStyles, ButtonStyles } from '../style/style.js';

// Import Icons 
import Icon from 'react-native-vector-icons';

//Import tcomb Forms 
import t from 'tcomb-form-native';

var Form = t.form.Form; 

var Login = t.struct({
  username: t.String,
  password: t.String
});

var Options = {}

class LoginPage extends Component {

  constructor(props) {
    super(props)
  }

  render() {
    return (
      <View style={LayoutStyles.container}>
        <View style={LayoutStyles.pageWrap}>
          <View style={LayoutStyles.content}>
            <Form 
              ref="form" 
              type={Login} 
              options={Options} 
            />
            <TouchableHighlight style={ButtonStyles.button} onPress={() => Actions.Main()} underlayColor='dimgrey'>
                <Text style={ButtonStyles.buttonText}>Login</Text>
            </TouchableHighlight>
          </View>
        </View>
      </View>
    );
  }
 }

function mapStateToProps(state) {
    return {
       
    }
}

function mapDispatchToProps(dispatch) {
    return {
     
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(LoginPage);