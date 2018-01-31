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
import { StyleSheet, View, Button, TextInput, Dimensions, TouchableOpacity } from 'react-native'
import { FontAwesome } from '@expo/vector-icons';
import { Metrics, Colors } from '../Themes';
import { connect } from 'react-redux';
import { SearchChanged } from '../Actions';


class Search extends Component {

  constructor(props) {
    super(props);
    this.state = { text: "" }
  }

  onPress = () => {
    this.props.SearchChanged(this.state.text)
    this.setState({text: ""})
  }

  render () {
    return (
      <View style={styles.ContainerStyle}>
        <View style={styles.TextInputViewStyle}>
          <TextInput
            style={styles.TextInputStyle}
            onChangeText={(text) => this.setState({text})}
            value={this.state.text}
            placeholder="Search for News"
            onSubmitEditing={this.onPress}
          / >
        </View>
        <TouchableOpacity
          style={styles.SearchButtonStyle}
          onPress={this.onPress}>
          <FontAwesome name="search" size={Metrics.icons.small} color={Colors.ember} />
        </TouchableOpacity>
      </View>
    );
  }
}


const styles = StyleSheet.create({
  ContainerStyle: {
    marginHorizontal: 20,
    marginTop: 15,
    backgroundColor: '#eee',
    borderRadius: 10,
    flexDirection: 'row',
    alignItems: 'center'
  },
  TextInputViewStyle: {
    flex: 10
  },
  TextInputStyle: {
    width: Dimensions.width - 100,
    height: 40,
    paddingHorizontal: 10,
  },
  SearchButtonStyle: {
    paddingHorizontal: 5,
    flex: 1
  }
});

const mapStateToProp = (state) => {
  return state.icon;
}

export default connect(mapStateToProp, { SearchChanged })(Search);
