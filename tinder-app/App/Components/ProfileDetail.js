import React from 'react';
import { Text, View, Image, StyleSheet, Platform, Dimensions } from 'react-native';
import { Profiles } from '../Themes';

const ProfileDetail = (props) => {

  const { profileName } = props;
  const profileDetail = Profiles[profileName];

  return (
    <View style={styles.ProfileDetailViewStyle}>
      <Text style={{fontSize: 24}}>
        <Text style={{fontWeight: 'bold'}}>{profileDetail.name}, </Text>
        <Text>{profileDetail.age}</Text>
      </Text>
      <Text style={{fontSize: 16, color: "#C5C5C5"}}>
        {profileDetail.occupation}
      </Text>
    </View>
  )
}

const styles = StyleSheet.create({
  ProfileDetailViewStyle: {
    padding: 15,
    backgroundColor: "#FFFFFF"
  }
});

export { ProfileDetail };
