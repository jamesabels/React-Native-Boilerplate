import React, { Component } from 'react'
import { View, Text, StyleSheet, Navigator, TouchableHighlight } from 'react-native'

// Import Icons
import Icon from 'react-native-vector-icons/FontAwesome';

export class TabBar extends Component {

  static propTypes = {
    navColor: React.PropTypes.string,
    textColor: React.PropTypes.string,
    height: React.PropTypes.number,
    titleSize: React.PropTypes.number,
    buttonSize: React.PropTypes.number
  }

  static defaultProps = {
    navColor: '#000',
    textColor: '#FFF',
    height: 60,
    titleSize: 25,
    buttonSize: 16
  }

  constructor(props) {
    super(props)
    this.state = {}
  }

  render() {
    return (
      <View style={[styles.tabWrap, {backgroundColor: this.props.navColor} ]}>
        {this.props.children}
      </View>
    )
  }
}

export class Tab extends Component {

  static propTypes = {
    active: React.PropTypes.bool,
    activeColor: React.PropTypes.string,
    iconName: React.PropTypes.string,
    iconColor: React.PropTypes.string,
    iconSize: React.PropTypes.number,
    textSize: React.PropTypes.number,
    textColor: React.PropTypes.string,
    label: React.PropTypes.string
  }

  static defaultProps = {
    active: false, 
    activeColor: 'orange',
    iconName: 'ios-person',
    iconColor: 'white',
    iconSize: 27,
    textSize: 16,
    textColor: 'white'
  }

  constructor(props) {
    super(props)
    this.state = {}
  }

  render() {
        return (  
            <TouchableHighlight style={[styles.tab]} onPress={this.props.onTabPress} underlayColor="dimgrey">
              <View>
                <Icon name={this.props.iconName} size={this.props.iconSize} style={[styles.icon, {color: this.props.iconColor}]} />
                <Text style={[styles.textStyle, {fontSize: this.props.textSize, color: this.props.textColor}]}>{this.props.label}</Text>
              </View>
            </TouchableHighlight>
        );
    }
 }


const styles = StyleSheet.create({
    tabWrap: {
      flex: 0.6,
      height: 15,
      bottom: 0,
      flexDirection: 'row',
      alignItems: 'center',
    },
    tab: {
        flex: 1,
        padding: 0
    },
    activeTab: {
        borderBottomWidth: 6,
        borderColor: 'orange'
    },
    icon: {
        textAlign: 'center'
    },
    textStyle: {
      textAlign: 'center'
    },
    activeText: {
      color: 'orange',
    }
});