import React, { Component } from 'react';
import { TouchableOpacity } from 'react-native';
import { FontAwesome } from '@expo/vector-icons';
import { Metrics, Colors } from '../Themes';
import { connect } from 'react-redux';
import { IconChanged, SearchChanged } from '../Actions';

class NavigationIcon extends Component {

  constructor (props){
    super(props);
  }

  categoryMap (iconName) {
    switch (iconName) {
      case "home": return "travel";
      case "book": return "books";
      case "heartbeat": return "health";
      case "film": return "theater";
      case "laptop": return "technology";
      case "globe": return "world"
      default: return ""
    }
  }

  onPress = (e) => {
    const category = this.categoryMap(this.props.iconName);
    this.props.SearchChanged("");
    if (this.props.selected == category){
      this.props.IconChanged("");
    } else {
      this.props.IconChanged(category);
    }
  }

  render(){
    return (
      <TouchableOpacity onPress={this.onPress.bind(this)}>
        <FontAwesome
          name={this.props.iconName}
          color={this.props.selected=="" || this.props.selected==this.categoryMap(this.props.iconName) ? Colors.ember: "#dddddd"}
          size={Metrics.icons.medium}
          onPress={this.onPress}
        />
      </TouchableOpacity>
    )
  }
}

const mapStateToProp = (state) => {
  return state.icon;
}

export default connect(mapStateToProp, { IconChanged, SearchChanged })(NavigationIcon);
