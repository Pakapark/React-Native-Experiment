import React from 'react';
import { StyleSheet, Text, View, SafeAreaView, WebView, Button } from 'react-native';
import { Images, Colors, Metrics } from '../Themes'
import LogoTitle from '../Components/LogoTitle';

export default class Article extends React.Component {
  state = {
    loading: true,
  }

  static navigationOptions = ({navigation}) => {
    const { navigate, goBack } = navigation;
    return {
      header: (
        <LogoTitle
          backButton={true}
          backFn={goBack}
        />
      )
    }
  }

  render() {

    const { state, navigate } = this.props.navigation;

    return (
      <SafeAreaView style={styles.container}>

        <WebView
          style={styles.webView}
          source={{uri: state.params.url}}/>

      </SafeAreaView>
    );
  }

}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
  logo: {
    height: '90%',
    resizeMode: 'contain',
  },
  webView: {
    flex: 1,
  },
});
