// Import libraries for making a component
import React from 'react';
import { Text, View, Image, StyleSheet, Platform } from 'react-native';
import { Images } from '../Themes'

// Make a component
const Header = (props) => {
  // const { viewStyle, settingViewStyle } = styles;

  return (
    <View style={styles.viewStyle}>
      <View style={styles.settingViewStyle}>
        <Image source={Images.setting} style={styles.settingImageStyle} />
      </View>
      <View style={styles.logoViewStyle}>
        <Image source={Images.logo} style={styles.logoImageStyle} />
      </View>
      <View style={styles.chatViewStyle}>
        <Image source={Images.chat} style={{tintColor: "#C5C5C5"}} />
      </View>
    </View>
  );
};

const isIOS = Platform.OS == 'ios';

const styles = StyleSheet.create({
  viewStyle: {
    height: isIOS ? 44 : 56,
    flexDirection: 'row',
    marginTop: isIOS ? 20 : 28,
    borderBottomWidth: 1,
    borderColor: "#C5C5C5",
    position: 'relative',
  },
  settingViewStyle: {
    justifyContent: 'center',
    paddingLeft: 15,
    width: isIOS ? 45: 50,
  },
  settingImageStyle: {
    height: isIOS ? 24: 30,
    width: isIOS ? 24: 30,
    resizeMode: 'contain',
    tintColor: '#C5C5C5'
  },
  logoViewStyle: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  logoImageStyle: {
    height: 50,
    width: 60,
    resizeMode: 'contain',
  },
  chatViewStyle: {
    width: isIOS ? 45: 50,
    paddingRight: 10,
    justifyContent: 'center'
  }
});

// Make the component available to other parts of the app
export { Header };
