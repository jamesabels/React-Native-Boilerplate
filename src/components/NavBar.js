import React, { Component } from 'react'
import { View, Text, StyleSheet, Navigator } from 'react-native'

class NavBar extends Component {

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
      <View style={[styles.navWrap, {backgroundColor: this.props.navColor, height: this.props.height}]}>
        <Text style={[styles.leftText, styles.textStyle,  {color: this.props.textColor, fontSize: this.props.buttonSize}]} onPress={() => this.props.leftButton()}>{this.props.leftText}</Text>
        <Text style={[styles.titleText, styles.textStyle, {color: this.props.textColor, fontSize: this.props.titleSize}]}>{this.props.title}</Text>
        <Text style={[styles.rightText, styles.textStyle, {color: this.props.textColor, fontSize: this.props.buttonSize}]} onPress={() => this.props.rightButton()}>{this.props.rightText}</Text>
      </View>
    )
  }
}

const styles = StyleSheet.create({
    navWrap: {
      flex: 1,
      top: 0, 
      flexDirection: 'row',
      alignItems: 'center',
    },
    textStyle: {
      textAlign: 'center'
    },
    leftText : {
      flex: 3.8,
    },
    titleText: {
      flex: 9.5
    },
    rightText: {
      textAlign: 'center',
      flex: 3.8,
    }
});

export default NavBar