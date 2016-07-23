import React, { Component } from 'react'
import { View, Text, Navigator, TouchableHighlight } from 'react-native'

//Import Styles
import { LayoutStyles, ButtonStyles } from '../style/style.js';

//Import Navbar
import NavBar from '../components/NavBar.js'; 

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
      <NavBar 
          textColor="white"
          title="Login"
          rightText="Register"
          buttonSize={16}
          rightButton={() => this.register()}
        />
        <View style={LayoutStyles.pageWrap}>
          <Form 
            ref="form" 
            type={Login} 
            options={Options} 
          />
          <TouchableHighlight style={ButtonStyles.button} onPress={() => this.login()} underlayColor='dimgrey'>
              <Text style={ButtonStyles.buttonText}>Login</Text>
          </TouchableHighlight>
        </View>
      </View>
    );
  }
  
  register () {
    this.props.navigator.push({id: 'Register', config: Navigator.SceneConfigs.PushFromRight});
  }
  login () {
    this.props.navigator.push({id: 'Main', config: Navigator.SceneConfigs.PushFromRight}); 
  }
 }

export default LoginPage