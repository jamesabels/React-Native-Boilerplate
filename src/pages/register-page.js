import React, { Component } from 'react'
import { View, Text, Navigator, TouchableHighlight } from 'react-native'

//Import Styles
import { LayoutStyles, ButtonStyles } from '../style/style.js';

//Import Navbar
import NavBar from '../components/NavBar.js'; 

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
      <NavBar 
          textColor="white"
          title="Register"
          leftText="Back"
          buttonSize={16}
          leftButton={() => this.back()}
        />
        <View style={LayoutStyles.pageWrap}>
          <Form 
            ref="form" 
            type={Register} 
            options={Options} 
          />
          <TouchableHighlight style={ButtonStyles.button} onPress={() => this.login()} underlayColor='dimgrey'>
              <Text style={ButtonStyles.buttonText}>Register</Text>
          </TouchableHighlight>
        </View>
      </View>
    );
  }

  back () {
    this.props.navigator.pop()
  }

  login () {
    this.props.navigator.push({id: 'Login', config: Navigator.SceneConfigs.PushFromRight});
  }
}

export default RegisterPage