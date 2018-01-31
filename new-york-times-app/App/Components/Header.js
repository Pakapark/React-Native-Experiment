import React from 'react';
import { View, StyleSheet, Image, Dimensions, Platform } from 'react-native';
import { Images } from '../Themes'

const Header = (props) => {
  return (
    <View style={styles.ViewStyle}>
      <Image source={require('../Images/nyt.png')} style={styles.LogoStyle}/>
    </View>
  )
}

const isIOS = Platform.OS == 'ios';

const styles = StyleSheet.create({
  ViewStyle: {
    height: isIOS ? 60 : 76,
    marginTop: isIOS ? 20 : 28,
    position: 'relative',
    marginLeft: 20,
    marginRight: 20
  },
  LogoStyle: {
    width: Dimensions.get('window').width - 40,
    resizeMode: 'contain',
    height: isIOS ? 60: 76
  }
})

export { Header };
