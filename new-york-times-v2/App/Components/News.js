import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { StyleSheet, SafeAreaView, View, TouchableOpacity, FlatList, Text, Linking, AsyncStorage } from 'react-native'
import { material } from 'react-native-typography'
import { Metrics, Colors } from '../Themes'

export default class News extends Component {
  static defaultProps = { articles: [] }

  static propTypes = {
    articles: PropTypes.array
  }

  state = {
    refreshing: false
  }

  _extractKey = (item, index) => index

  _onPressItem = async (item) => {
    let url = item.url;
    await AsyncStorage.setItem("lastScreen", JSON.stringify({lastScreen: "News", url: url}));
    this.props.redirectFn("Article", {url});
  }

  _renderItem = ({item}) => {

    return (
      <TouchableOpacity style={styles.listRow} onPress={() => this._onPressItem(item)}>
        <View>
          <Text style={material.headline}>{item.title}</Text>
          <Text style={material.body1}>{item.snippet}</Text>
           <Text style={material.body2}>{item.byline}</Text>
          <Text style={material.caption}>{item.date}</Text>
        </View>
      </TouchableOpacity>
    )
  }

  resetList = async () => {
    this.setState({refreshing: true});
    await this.props.resetList();
    this.setState({refreshing: false});
  }

  render () {
    const {articles} = this.props;

    return (
      <FlatList
        style={styles.listContainer}
        data={articles}
        renderItem={this._renderItem}
        keyExtractor={this._extractKey}
        onRefresh={this.resetList}
        refreshing={this.state.refreshing}
      />
    );
  }
}


const styles = StyleSheet.create({
  listContainer: {
    flex: 1,
    paddingLeft: Metrics.doubleBaseMargin,
    paddingRight: Metrics.doubleBaseMargin,
  },
  listRow: {
    flexDirection: 'row',
    alignItems: 'stretch',
    paddingTop: Metrics.marginVertical,
    paddingBottom: Metrics.marginVertical,
  }
});
