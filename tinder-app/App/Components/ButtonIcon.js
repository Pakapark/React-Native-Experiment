import React from 'react';
import { View, StyleSheet, Image } from 'react-native';
import { Images } from '../Themes';

const ButtonIcon = (props) => {
  return (
    <View style={styles.buttonStyle}>
      <Image source={Images[props.buttonName]} style={styles.buttonImageStyle}/>
    </View>
  )
}

const styles = StyleSheet.create({
  buttonStyle: {
    backgroundColor: "#FFFFFF",
    borderRadius: 100,
    paddingTop: 8,
    paddingBottom: 8,
    paddingRight: 10,
    paddingLeft: 10
  },
  buttonImageStyle: {
    width: 30,
    height: 34,
    resizeMode: 'contain'
  }
});

export { ButtonIcon };
