/*
*
* Assignment 3
* Starter Files
*
* CS47SI
* Jan, 2017
*/

import React, { Component } from 'react'
import PropTypes from 'prop-types' //consider using this!
import { StyleSheet, SafeAreaView, View, FlatList, Text, Linking, ScrollView, TouchableOpacity } from 'react-native'
import { material } from 'react-native-typography' //consider using this!
import { Metrics, Colors } from '../Themes'

class News extends Component {

  constructor(props){
    super(props);
  }

  static defaultProps = { articles: [] }

  static propTypes = {
    articles: PropTypes.array
  }

  _keyExtractor = (item, index) => index

  render () {
    const { articles } = this.props;

    return (
      <ScrollView style={styles.container}>
        <FlatList
          data={articles}
          keyExtractor={this._keyExtractor}
          renderItem={(item) => {
            return (
              <TouchableOpacity
                style={styles.newsBlockStyle}
                onPress={() => Linking.openURL(item.item.url)}
              >
                <Text style={styles.titleTextStyle}>{item.item.title}</Text>
                <Text>{item.item.snippet}</Text>
                <Text style={styles.bylineTextStyle}>{item.item.byline}</Text>
                <Text style={styles.dateStyle}>{item.item.date}</Text>
              </TouchableOpacity>
            )
          }}
        />
      </ScrollView>
    );
  }
}


const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginHorizontal: 20,
  },
  newsBlockStyle: {
    marginBottom  : 20
  },
  titleTextStyle: {
    fontSize: 24
  },
  bylineTextStyle: {
    fontWeight: "bold",
    marginTop: 5
  },
  dateStyle: {
    marginTop: 3,
    color: "#aaaaaa"
  }
});

export { News };
