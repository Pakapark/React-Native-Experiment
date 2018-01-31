/*
*
* Assignment 3
* Starter Files
*
* CS47SI
* Jan, 2017
*/

import React from 'react';
import { StyleSheet, View, SafeAreaView, ActivityIndicator } from 'react-native';
import APIRequest from './Config/APIRequest'

import Search from './Components/Search'
import { Header, NavigationButtons, News } from './Components';
import reducers from './Reducers';
import { connect } from 'react-redux';
import { iconChanged, searchChanged } from './Actions';

class Main extends React.Component {

  constructor(props) {
    super(props);
    this.state =  {
      loading: true,
      articles : []
    }
    this.loadArticles = this.loadArticles.bind(this);
  }

  componentDidMount() {
    this.loadArticles();
  }

  componentWillReceiveProps(nextProps) {
    this.loadArticles(nextProps.search, nextProps.category);
  }

  async loadArticles(searchTerm = '', category = '') {
    this.setState({articles:[], loading: true});
    var resultArticles = [];
    if (category === '') {
      resultArticles = await APIRequest.requestSearchPosts(searchTerm);
    } else {
      resultArticles = await APIRequest.requestCategoryPosts(category);
    }
    this.setState({loading: false, articles: resultArticles})
  }

  getArticleContent = () => {
    const {articles, loading} = this.state;
    let contentDisplayed = null;
    if (loading) {
      contentDisplayed = <ActivityIndicator size="large" color="black" />;
    } else {
      contentDisplayed = <News articles={articles} />;
    }

    return (
      <View style={styles.newFeedContainer}>
        {contentDisplayed}
      </View>
    )
  }

  render() {
    const {articles, loading} = this.state;

    return (
        <SafeAreaView style={styles.container}>
          <Header />
          <NavigationButtons />
          <Search />
          {this.getArticleContent()}
        </SafeAreaView>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
  newFeedContainer: {
    flex: 1,
    marginTop: 15
  }
});

const mapStateToProp = (state) => {
  return {
    category: state.icon.selected,
    search: state.search.searchTerm,
  }
}

export default connect(mapStateToProp)(Main);
