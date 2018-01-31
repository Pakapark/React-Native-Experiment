import React from 'react';
import { StyleSheet, Text, ScrollView, View, Image, Dimensions } from 'react-native';
import { Images, Profiles } from './App/Themes';
import { Header, ProfileCard, ActionIcons } from './App/Components';
import SwipeCards from 'react-native-swipe-cards';


export default class App extends React.Component {
  constructor() {
    super();

    this.state = {
      cards: Object.keys(Profiles),
      cardShown: ['random'],
      outOfCards: false
    }
  }

  cardRemoved (index) {
    if (this.state.cards.includes(index) && !this.state.cardShown.includes(index)) {
      var newCardShown = [...this.state.cardShown, index];
      var newOutOfCards = (this.state.cards.length === newCardShown.length);
      this.setState({
        cards,
        cardShown: newCardShown,
        outOfCards: newOutOfCards
      })
    }
  }

  render() {
    return (
      <ScrollView contentContainerStyle={styles.container}>
        <Header />
        <SwipeCards
          cards={this.state.cards}
          renderCard={(cardData) => <ProfileCard profileName={cardData} />}
        />
        <ActionIcons />
      </ScrollView>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'column',
    alignItems: 'center',
    backgroundColor: "#EEEEEE",
  },
});

function randomProfile(profiles){
  var namelist = Object.keys(profiles);
  return namelist[Math.floor(Math.random()*namelist.length)];
}
