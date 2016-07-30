import React, { Component } from 'react'
import { View, Text, Navigator, TouchableHighlight } from 'react-native'

// Import Actions 
import LoginActions from '../actions/login_actions.js';  

//Import Connect 
import { connect } from 'react-redux';

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
              type={Register} 
              options={Options} 
            />
            <TouchableHighlight style={ButtonStyles.button} onPress={() => this.props.register()} underlayColor='dimgrey'>
                <Text style={ButtonStyles.buttonText}>Register</Text>
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
      register: function () {
        
      }
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(RegisterPage);