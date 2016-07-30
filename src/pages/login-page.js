import React, { Component } from 'react'
import { View, Navigator, TouchableHighlight } from 'react-native'

//Import Connect 
import { connect } from 'react-redux';

// Import Native Base
import { Text, InputGroup, Input, Button, Icon } from 'native-base';

// Import Router Actions
import {Actions} from 'react-native-router-flux';

//Import Styles
import { LayoutStyles } from '../style/style.js';

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
            <InputGroup borderType="underline" style={{marginTop: 30}}>
                <Icon name="ios-contact" />
                <Input placeholder="Username"/>
            </InputGroup>
            <InputGroup borderType="underline" style={{marginTop: 30}}>
                <Icon name="ios-lock" />
                <Input placeholder="Password" secureTextEntry={true}/>
            </InputGroup>
            <Button block style={{backgroundColor: 'black', height: 50,  marginTop: 30}} onPress={() => Actions.Main()}>
              Login
              <Icon name="ios-checkmark-circle" />
            </Button>
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