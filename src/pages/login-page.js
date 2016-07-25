import React, { Component } from 'react'
import { View, Text, Navigator, TouchableHighlight } from 'react-native'

// Import Actions 
import LoginActions from '../actions/login-actions.js';  

// Import Store 
import LoginStore from '../stores/login-store.js'; 

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

  static propTypes = {}

  static defaultProps = {}

  constructor(props) {
    super(props)
    this.state = {}
  }
  render() {
    return (
      <View style={LayoutStyles.container}>
        <View style={LayoutStyles.pageWrap}>
          <Form 
            ref="form" 
            type={Login} 
            options={Options} 
          />
          <TouchableHighlight style={ButtonStyles.button} onPress={() => LoginStore.dispatch(LoginActions.Login())} underlayColor='dimgrey'>
              <Text style={ButtonStyles.buttonText}>Login</Text>
          </TouchableHighlight>
        </View>
      </View>
    );
  }
 }

export default LoginPage