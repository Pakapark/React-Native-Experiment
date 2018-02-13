import React from 'react';
import { Platform } from 'react-native';
import { StackNavigator, Header } from 'react-navigation'
import { Images, Colors, Metrics } from '../Themes'
import Main from '../Screens/Main'
import Article from '../Screens/Article'

const Navigator = StackNavigator({
  Main: { screen : Main },
  Article: { screen : Article }
}, {
  initialRouteName: 'Main',
  navigationOptions: ({navigation}) => {
    let navTitle = 'Sample Content';
    if (navigation.state.params) {
      navTitle = navigation.state.params.title || navTitle;
    }

    let isIOS = Platform.OS == 'ios';
    return {
      title: navTitle
    }
  }
})

export default Navigator
