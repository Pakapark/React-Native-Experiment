/*
*
* Assignment 3
* Starter Files
*
* CS47SI
* Jan, 2017
*/

import React, { Component } from 'react'
import { StyleSheet, View} from 'react-native'
import { Colors } from '../Themes';
import NavigationIcon from './NavigationIcon';

class NavigationButtons extends Component {

  render () {
    return (
      <View style={styles.container}>
        <NavigationIcon iconName="home" />
        <NavigationIcon iconName="book" />
        <NavigationIcon iconName="heartbeat" />
        <NavigationIcon iconName="film" />
        <NavigationIcon iconName="laptop" />
        <NavigationIcon iconName="globe" />
      </View>
    );
  }

}

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    marginHorizontal: 20
  }
});

export { NavigationButtons }
