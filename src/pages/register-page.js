import React, { Component } from 'react'
import { View, Text, Navigator, TouchableHighlight } from 'react-native'

// Import Actions 
import LoginActions from '../actions/login-actions.js';  

// Import Store 
import LoginStore from '../stores/login-store.js'; 

//Import Styles
import { LayoutStyles, ButtonStyles } from '../style/style.js';

// Import Icons 
import Icon from 'react-native-vector-icons/FontAwesome';

//Import tcomb Forms 
import t from 'tcomb-form-native';

var Form = t.form.Form; 

var Register = t.struct({
  first_name: t.maybe(t.String),
  last_name: t.maybe(t.String),
  username: t.String,
  password: t.String
});

var Options = {}

class RegisterPage extends Component {

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
          <View style={LayoutStyles.content}> 
            <Form 
              ref="form" 
              type={Register} 
              options={Options} 
            />
            <TouchableHighlight style={ButtonStyles.button} onPress={() => this.register()} underlayColor='dimgrey'>
                <Text style={ButtonStyles.buttonText}>Register</Text>
            </TouchableHighlight>
          </View>
        </View>
      </View>
    );
  }
  register () {
    LoginStore.dispatch(LoginActions.Register());
  }
}

export default RegisterPage