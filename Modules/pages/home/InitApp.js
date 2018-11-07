
import React, { Component } from 'react';
import Video from 'react-native-video';
import { AppRegistry,FlatList, StyleSheet, Text, View } from 'react-native';
export default class InitApp extends Component {
  render() {
    return (
      <Video
        source={require('../../resource/videos/broadchurch.mp4')}   // Can be a URL or a local file.
        style={styles.backgroundVideo} 
      />
    );
  }
}

const styles = StyleSheet.create({
  backgroundVideo : {
    position: 'absolute',
    top: 0,
    left: 0,
    bottom: 0,
    right: 0,
  }
});
