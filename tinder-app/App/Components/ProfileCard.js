import React from 'react';
import { Text, View, Image, StyleSheet, Dimensions } from 'react-native';
import { Profiles } from '../Themes';
import { ProfileDetail } from './ProfileDetail';

const ProfileCard = (props) => {

  const { profileName } = props;
  const profileDetail = Profiles[profileName];

  return (
    <View style={styles.ProfileCardStyle}>
      <Image source={profileDetail.image} style={styles.ProfileStyle} />
      <ProfileDetail profileName={profileName} />
    </View>
  );
}

const styles = StyleSheet.create({
  ProfileCardStyle: {
    borderWidth: 1,
    borderColor: '#C5C5C5',
    marginTop: 50,
    borderBottomLeftRadius: 5,
    borderBottomRightRadius: 5,
    transform: [{translateY: -60}]
  },
  ProfileStyle: {
    width: Dimensions.get('window').width < Dimensions.get('window').height - 154 ? Dimensions.get('window').width - 100: Dimensions.get('window').height - 100,
    height: Dimensions.get('window').width < Dimensions.get('window').height - 154 ? Dimensions.get('window').width - 100: Dimensions.get('window').height - 100,
  },
});

export { ProfileCard }
