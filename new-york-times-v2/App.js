import React from 'react';
import Main from './App/Screens/Main'
import Onboarding from './App/Screens/OnboardingScreen'
import { AsyncStorage, StyleSheet, ActivityIndicator, View, SafeAreaView } from 'react-native';
import Navigator from './App/Navigation/StackNavigation'
export default class App extends React.Component {

  state = {
    hasDoneOnboarding: false,
    loading: true
  }

  async componentWillMount() {
    try {
      const onboarding = await AsyncStorage.getItem('onboarding');
      if (onboarding !== null && onboarding !== undefined) {
        this.setState({
          hasDoneOnboarding: JSON.parse(onboarding),
          loading: false
        });
      }
    } catch (err) {

    }
    this.setState({ loading: false });
  }

  _onDone = async () => {
    await AsyncStorage.setItem('onboarding', JSON.stringify(true));
    this.setState({ hasDoneOnboarding: true, loading: false });
  }

  render() {
    // AsyncStorage.clear();

    if (this.state.loading){
      return (
        <ActivityIndicator
            style={styles.activityIndicator}
            size="large" color="black"
        />
      )
    } else if(this.state.hasDoneOnboarding) {
      return (
        <SafeAreaView style={styles.container}>
          <Navigator />
        </SafeAreaView>
      );
    } else {
      return <Onboarding onDone={this._onDone} />;
    }
  }

}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  activityIndicator: {
    ...StyleSheet.absoluteFillObject,
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center'
  }
});
