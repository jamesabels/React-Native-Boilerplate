import React, { Component } from 'react'
import { View, Text, StyleSheet, Navigator, TouchableHighlight } from 'react-native'

//Import Navbar
import NavBar from '../components/NavBar.js'; 

// Import Icons 
import Icon from 'react-native-vector-icons/FontAwesome';

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
      <View style={styles.container}>
      <NavBar 
          textColor="white"
          title="Login"
          rightText="Register"
          buttonSize={16}
          rightButton={() => this.register()}
        />
        <View style={styles.pageWrap}>
          <Text style={styles.pageHeader}>Login</Text>
          <Form 
            ref="form" 
            type={Login} 
            options={Options} 
          />
          <TouchableHighlight style={styles.button} onPress={() => this.login()} underlayColor='dimgrey'>
              <Text style={styles.buttonText}>Login</Text>
          </TouchableHighlight>
        </View>
      </View>
    );
  }
  
  register () {
    this.props.navigator.push({id: 'Register', config: Navigator.SceneConfigs.FloatFromBottom});
  }
  login () {
    this.props.navigator.push({id: 'Main', config: Navigator.SceneConfigs.PushFromRight})
  }
}

var styles = StyleSheet.create({
  container: {
    flex: 1,
    marginTop: 20
  },
  pageWrap: {
    flex: 11,
    padding: 20,
    flexDirection: 'column',
    backgroundColor: 'white'
  },
  pageHeader: {
    textAlign: 'center',
    fontSize: 50,
    marginTop: 5,
    marginBottom: 20
  },
  button: {
    marginTop: 10,
    backgroundColor: 'black',
    padding: 10,
    borderRadius: 5
  },
  buttonText: {
    textAlign: 'center',
    color: 'white'
  } 
});

export default LoginPage