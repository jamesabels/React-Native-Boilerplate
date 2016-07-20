import React, { Component } from 'react'
import { View, Text, StyleSheet, Navigator, TouchableHighlight } from 'react-native'

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
      <View style={styles.container}>
      <NavBar 
          textColor="white"
          title="Register"
          leftText="Back"
          buttonSize={16}
          leftButton={() => this.back()}
        />
        <View style={styles.pageWrap}>
          <Form 
            ref="form" 
            type={Register} 
            options={Options} 
          />
          <TouchableHighlight style={styles.button} onPress={() => this.login()} underlayColor='dimgrey'>
              <Text style={styles.buttonText}>Register</Text>
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

export default RegisterPage