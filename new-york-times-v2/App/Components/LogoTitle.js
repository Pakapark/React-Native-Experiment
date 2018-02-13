import React, { Component } from 'react';
import { View, StyleSheet, Image, Dimensions, Platform, Button, AsyncStorage } from 'react-native';
import { Images, Colors } from '../Themes'
import { Header } from 'react-navigation'


export default class LogoTitle extends Component {


  _backFn = async () => {
    await AsyncStorage.setItem("lastScreen", JSON.stringify({lastScreen: "Main"}));
    this.props.backFn();
  }

  _backButton = () => {
    if (this.props.backButton) {
      return (
        <View style={styles.buttonStyle}>
          <Button
            onPress={this._backFn}
            title="Back"
          />
        </View>
      )
    }
    return null;
  }

  _bufferRight = () => {
    return (this.props.backButton) ? <View style={styles.buttonStyle} /> : null;
  }

  render(){
    return (
      <View style={styles.HeaderStyle}>
        {this._backButton()}
        <View style={styles.ViewStyle}>
          <Image source={require('../Images/nyt.png')} style={styles.LogoStyle}/>
        </View>
        {this._bufferRight()}
      </View>
    )
  }
}

const isIOS = Platform.OS == 'ios';

const styles = StyleSheet.create({
  HeaderStyle: {
    width: '100%',
    backgroundColor: "#f5f5f5",
    flexDirection: "row",
    alignItems: 'center',
    justifyContent: 'center'
  },
  ViewStyle: {
    width: Dimensions.get('window').width - 120,
    height: 50,
    backgroundColor: "#f5f5f5",
    justifyContent: 'center',
    alignItems: 'center',
  },
  LogoStyle: {
    width: Dimensions.get('window').width - 120,
    height: 32,
    resizeMode: 'contain',
  },
  buttonStyle: {
    width: 60
  }
})
