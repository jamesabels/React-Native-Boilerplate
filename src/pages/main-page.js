import React, { Component } from 'react'
import { View, Text, StyleSheet, Navigator, TouchableHighlight } from 'react-native'

// Import Store 
import store from '../stores/test.js'; 

// Import Actions 
import {deincrement, increment, login} from '../actions/login-actions.js';  

//Import Navbar
import NavBar from '../components/NavBar.js'; 

// Import Icons 
import Icon from 'react-native-vector-icons';

//Import tcomb Forms 
import t from 'tcomb-form-native';


class MainPage extends Component {

  static propTypes = {}

  static defaultProps = {}
  
  componentDidMount () {
  }

  constructor(props) {
    super(props)
    this.state = {
      count: 0
    }
  }

  render() {
    return (
    <View style={styles.container}>
      <NavBar 
          textColor="white"
          title="Main"
          leftText="Logout"
          buttonSize={16}
          leftButton={() => this.back()}
        />
        <View style={styles.pageWrap}>
          <Text>{store.getState()}</Text>
            <Text onPress={() => this.up()}>
              Up
            </Text>
            <Text onPress={() => this.down()}>
              Down
            </Text>
        </View>
      </View>
    )
  }

  back () {
      this.props.navigator.pop(); 
  }

  up () {
    
    this.setState({
      count: store.getState()
    });

    store.dispatch(increment());
  }

  down () {
    this.setState({
      count: store.getState()
    });

    store.dispatch(deincrement());
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


export default MainPage