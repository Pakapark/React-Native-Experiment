import React from 'react';
import { View, StyleSheet, Image } from 'react-native';
import { Images } from '../Themes';
import { ButtonIcon } from './ButtonIcon'

const ActionIcons = (props) => {
  return (
    <View style={styles.container}>
      <ButtonIcon buttonName="rewind" />
      <ButtonIcon buttonName="nope" />
      <ButtonIcon buttonName="boost" />
      <ButtonIcon buttonName="like" />
      <ButtonIcon buttonName="superLike" />
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    width: '100%',
    marginBottom: 50,
    bottom: 0,
    position: 'absolute',
    flexDirection: 'row',
    justifyContent: 'space-around'
  }
});

export { ActionIcons };
