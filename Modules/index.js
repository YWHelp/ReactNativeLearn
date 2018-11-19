/*
import React, { Component } from 'react';
import Video from 'react-native-video';
import { AppRegistry,FlatList, StyleSheet, Text, View } from 'react-native';

export default class ReactNativeLearn extends Component {
  render() {
    return (
      <Video
        source={require('./resource/videos/broadchurch.mp4')}   // Can be a URL or a local file.
        // ref={(ref) => {
        //   this.player = ref
        // }}                                      // Store reference
        // onBuffer={this.onBuffer}                // Callback when remote video is buffering
        // onEnd={this.onEnd}                      // Callback when playback finishes
        // onError={this.videoError}               // Callback when video cannot be loaded
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

AppRegistry.registerComponent('ReactNativeLearn', ()=>ReactNativeLearn);
*/
/*
import React, {
  Component
} from 'react';

import {
  AppRegistry,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
  Button,
  BackHandler
} from 'react-native';

import Video from 'react-native-video';

function formatTime(second) {
  let h = 0, i = 0, s = parseInt(second);
  if (s > 60) {
      i = parseInt(s / 60);
      s = parseInt(s % 60);
  }
  // 补零
  let zero = function (v) {
      return (v >> 0) < 10 ? "0" + v : v;
  };
  console.log([zero(h), zero(i), zero(s)].join(":"));
  // return [zero(h), zero(i), zero(s)].join(":");
  return zero(s);
}

export default class ReactNativeLearn extends Component {

  static navigationOptions = {
      header: null
  };

  state = {
      rate: 1,
      volume: 1,
      muted: false,
      resizeMode: 'contain',
      duration: 0.0,
      currentTime: 0.0,
      paused: true,
  };

  componentWillMount() {
      BackHandler.addEventListener('hardwareBackPress', this.onBackAndroid);
  }

  componentWillUnmount() {
      BackHandler.removeEventListener('hardwareBackPress', this.onBackAndroid);
  }

  onBackAndroid = () => {
      this.props.navigation.goBack();
      return true;
  };


  onLoad = (data) => {
      this.setState({duration: data.duration});
      console.log(data.duration + "xxx");
  };

  onProgress = (data) => {
      this.setState({currentTime: data.currentTime});
      console.log(data.currentTime + "hhh");
  };

  onEnd = () => {
      this.setState({paused: true})
      this.video.seek(0)
  };

  onAudioBecomingNoisy = () => {
      this.setState({paused: true})
  };

  onAudioFocusChanged = (event: { hasAudioFocus: boolean }) => {
      this.setState({paused: !event.hasAudioFocus})
  };

  getCurrentTimePercentage() {
      if (this.state.currentTime > 0) {
          return parseFloat(this.state.currentTime) / parseFloat(this.state.duration);
      }
      return 0;
  };

  renderRateControl(rate) {
      const isSelected = (this.state.rate === rate);

      return (
          <TouchableOpacity onPress={() => {
              this.setState({rate})
          }}>
              <Text style={[styles.controlOption, {fontWeight: isSelected ? 'bold' : 'normal'}]}>
                  {rate}x
              </Text>
          </TouchableOpacity>
      );
  }

  renderResizeModeControl(resizeMode) {
      const isSelected = (this.state.resizeMode === resizeMode);

      return (
          <TouchableOpacity onPress={() => {
              this.setState({resizeMode})
          }}>
              <Text style={[styles.controlOption, {fontWeight: isSelected ? 'bold' : 'normal'}]}>
                  {resizeMode}
              </Text>
          </TouchableOpacity>
      )
  }

  renderVolumeControl(volume) {
      const isSelected = (this.state.volume === volume);

      return (
          <TouchableOpacity onPress={() => {
              this.setState({volume})
          }}>
              <Text style={[styles.controlOption, {fontWeight: isSelected ? 'bold' : 'normal'}]}>
                  {volume * 100}%
              </Text>
          </TouchableOpacity>
      )
  }

  render() {
      const flexCompleted = this.getCurrentTimePercentage() * 100;
      const flexRemaining = (1 - this.getCurrentTimePercentage()) * 100;
      return (
          <View style={styles.container}>
              <TouchableOpacity
                  style={styles.fullScreen}
                  onPress={() => this.setState({paused: !this.state.paused})}>
                  <Video
                      ref={(ref:Video) => {
                          this.video = ref
                      }}
                      source={require('./resource/videos/broadchurch.mp4')}
                      style={styles.fullScreen}
                      rate={this.state.rate}
                      paused={this.state.paused}
                      volume={this.state.volume}
                      muted={this.state.muted}
                      resizeMode={this.state.resizeMode}
                      onLoad={this.onLoad}
                      onProgress={this.onProgress}
                      onEnd={this.onEnd}
                      onAudioBecomingNoisy={this.onAudioBecomingNoisy}
                      onAudioFocusChanged={this.onAudioFocusChanged}
                      repeat={false}
                  /> 
              </TouchableOpacity>
              <View style={styles.textStyle}>
                  <Text style={styles.volumeControl}>
                      {formatTime(this.state.duration - this.state.currentTime)}
                  </Text>

                  <Button style={styles.btnStyle} title={'关闭广告'} color={'#73808080'}
                          onPress={() => {
                              this.props.navigation.goBack()
                          }}/>
              </View>

              <View style={styles.controls}>
                  <View style={styles.generalControls}>

                  </View>

                  <View style={styles.trackingControls}>
                      <View style={styles.progress}>
                          <View style={[styles.innerProgressCompleted, {flex: flexCompleted}]}/>
                          <View style={[styles.innerProgressRemaining, {flex: flexRemaining}]}/>
                      </View>
                  </View>
              </View>
          </View>
      );
  }
}


const styles = StyleSheet.create({
  container: {
      flex: 1,
      justifyContent: 'flex-start',
      alignItems: 'center',
      backgroundColor: 'black',
  },
  textStyle: {
      paddingLeft: 10,
      paddingTop: 25,
      justifyContent: 'flex-start',
      flexDirection: 'row',
  },
  btnStyle: {
      paddingRight: 10,
      paddingTop: 25,
      justifyContent: 'flex-end',
      flexDirection: 'row',
  },
  fullScreen: {
      position: 'absolute',
      top: 0,
      left: 0,
      bottom: 0,
      right: 0,
  },
  controls: {
      backgroundColor: 'transparent',
      borderRadius: 5,
      position: 'absolute',
      bottom: 20,
      left: 20,
      right: 20,
  },
  progress: {
      flex: 1,
      flexDirection: 'row',
      borderRadius: 3,
      overflow: 'hidden',
  },
  innerProgressCompleted: {
      height: 20,
      backgroundColor: '#cccccc',
  },
  innerProgressRemaining: {
      height: 20,
      backgroundColor: '#2C2C2C',
  },
  generalControls: {
      flex: 1,
      flexDirection: 'row',
      borderRadius: 4,
      overflow: 'hidden',
      paddingTop: 10,
  },
  rateControl: {
      flex: 1,
      flexDirection: 'row',
      justifyContent: 'center',
  },
  volumeControl: {
      fontSize: 25,
      color: '#fff',
      flex: 1,
      flexDirection: 'row',
      justifyContent: 'center',
  },
  resizeModeControl: {
      flex: 1,
      flexDirection: 'row',
      alignItems: 'center',
      justifyContent: 'center',
  },
  controlOption: {
      alignSelf: 'center',
      fontSize: 11,
      color: 'white',
      paddingLeft: 2,
      paddingRight: 2,
      lineHeight: 12,
  },
});
AppRegistry.registerComponent('ReactNativeLearn', ()=>ReactNativeLearn);
*/
//外部样式
import React, { Component } from "react";
import { AppRegistry } from 'react-native';
// import InitApp from  "./pages/home/InitApp";
import ListView from  "./pages/home/ListView";
import SvgAnimation from  "./pages/home/SvgAnimation";
AppRegistry.registerComponent('ReactNativeLearn', ()=>ListView);

/*
import React, { Component } from 'react';
import { AppRegistry,DeviceEventEmitter,Image,ScrollView,StatusBar,StyleSheet,Text, TouchableOpacity, TouchableHighlight,View } from 'react-native';
import Util from './utils/utils';
import Icon from 'react-native-vector-icons/Ionicons';
import IconFA from 'react-native-vector-icons/FontAwesome';
import Swiper from 'react-native-swiper';
export default class ReactNativeLearn extends Component{
    constructor() {
      super();
      this.state = {
        days:[{
          key:0,
          title:"A stopwatch",
          isFA: false,
          icon: "ios-stopwatch",
          size: 48,
          color: "#ff856c",
          hideNav: false,
        },{
          key:1,
          title:"A weather app",
          isFA: false,
          icon: "ios-partly-sunny",
          size:60,
          color:"#90bdc1",
          hideNav: true,
        },{
          key:2,
          title:"twitter",
          isFA: false,
          icon: "logo-twitter",
          size:50,
          color:"#2aa2ef",
          hideNav: true,
        },{
          key:3,
          title:"cocoapods",
          isFA: true,
          icon: "contao",
          size:50,
          color:"#FF9A05",
          hideNav: false,
        },{
          key:4,
          title:"find my location",
          isFA: false,
          icon: "md-pin",
          size:50,
          color:"#00D204",
          hideNav: false,
        },{
          key:5,
          title:"Spotify",
          isFA: true,
          icon: "spotify",
          size:50,
          color:"#777",
          hideNav: true,
        },{
          key:6,
          title:"Moveable Circle",
          isFA: false,
          icon: "ios-baseball",
          size:50,
          color:"#5e2a06",
          hideNav: true,
        },{
          key:7,
          title:"Swipe Left Menu",
          isFA: true,
          icon: "google",
          size:50,
          color:"#4285f4",
          hideNav: true,
        },{
          key:8,
          title:"Twitter Parallax View",
          isFA: true,
          icon: "twitter-square",
          size:50,
          color:"#2aa2ef",
          hideNav: true,
        },{
          key:9,
          title:"Tumblr Menu",
          isFA: false,
          icon: "logo-tumblr",
          size:50,
          color:"#37465c",
          hideNav: true,
        },{
          key:11,
          title:"charts",
          isFA: false,
          icon: "ios-stats",
          size:50,
          color:"#fd8f9d",
          hideNav: false,
        },{
          key:12,
          title:"tweet",
          isFA: false,
          icon: "md-chatboxes",
          size:50,
          color:"#83709d",
          hideNav: true,
        },{
          key:13,
          title:"tinder",
          isFA: true,
          icon: "fire",
          size:50,
          color:"#ff6b6b",
          hideNav: true,
        },{
          key:14,
          title:"Time picker",
          isFA: false,
          icon: "ios-calendar-outline",
          size:50,
          color:"#ec240e",
          hideNav: false,
        },{
          key:15,
          title:"Gesture unlock",
          isFA: false,
          icon: "ios-unlock",
          size:50,
          color:"#32A69B",
          hideNav: true,
        },{
          key:16,
          title:"Fuzzy search",
          isFA: false,
          icon: "md-search",
          size:50,
          color:"#69B32A",
          hideNav: false,
        },{
          key:17,
          title:"Sortable",
          isFA: false,
          icon: "md-move",
          size:50,
          color:"#68231A",
          hideNav: true,
        },{
          key:18,
          title:"TouchID to unlock",
          isFA: false,
          icon: "ios-log-in",
          size:50,
          color:"#fdbded",
          hideNav: true,
        },{
          key:19,
          title:"Single page Reminder",
          isFA: false,
          icon: "ios-list-outline",
          size:50,
          color:"#68d746",
          hideNav: true,
        },{
          key:20,
          title:"Multi page Reminder",
          isFA: false,
          icon: "ios-paper-outline",
          size:50,
          color:"#fe952b",
          hideNav: true,
        },{
          key:21,
          title:"Google Now",
          isFA: false,
          icon: "ios-mic-outline",
          size:50,
          color:"#4285f4",
          hideNav: true,
        },{
          key:22,
          title:"Local WebView",
          isFA: true,
          icon: "safari",
          size:50,
          color:"#23bfe7",
          hideNav: false,
        },{
          key:23,
          title:"Youtube scrollable tab",
          isFA: false,
          icon: "logo-youtube",
          size:50,
          color:"#e32524",
          hideNav: true,
        },{
          key:24,
          title:"custome in-app browser",
          isFA: false,
          icon: "ios-globe",
          size:50,
          color:"#00ab6b",
          hideNav: true,
        },{
          key:25,
          title:"swipe and switch",
          isFA: false,
          icon: "md-shuffle",
          size:50,
          color:"#893D54",
          hideNav: true,
        },{
          key:26,
          title:"iMessage Gradient",
          isFA: false,
          icon: "ios-chatbubbles",
          size:50,
          color:"#248ef5",
          hideNav: false,
        },{
          key:27,
          title:"iMessage image picker",
          isFA: false,
          icon: "md-images",
          size:50,
          color:"#f5248e",
          hideNav: true,
        },{
          key:28,
          title:"3d touch",
          isFA: false,
          icon: "ios-navigate",
          size:50,
          color:"#48f52e",
          hideNav: false,
        },{
          key:29,
          title:"Push Notifications",
          isFA: false,
          icon: "md-notifications",
          size:50,
          color:"#f27405",
          hideNav: false,
        }]
      }
    }
  
    render() {
        var onThis = this;
        var boxs = this.state.days.map(function(elem, index) {
        return(
            <TouchableHighlight key={elem.key} style={[styles.touchBox, index%3==2?styles.touchBox2:styles.touchBox1]} underlayColor="#eee">
                <View style={styles.boxContainer}>
                    <Text style={styles.boxText}>{elem.title}</Text>
                    {elem.isFA? <IconFA size={elem.size} name={elem.icon} style={[styles.boxIcon,{color:elem.color}]}></IconFA>:
                    <Icon size={elem.size} name={elem.icon} style={[styles.boxIcon,{color:elem.color}]}></Icon>}
                </View>
            </TouchableHighlight>
            );
        })
        return(
            <ScrollView style={styles.mainView} title={this.props.title}>
                <View style={styles.touchBoxContainer}>
                    {boxs}
                </View>
            </ScrollView>
      );
    }
  }
  
  const styles = StyleSheet.create({
    container:{
      flexGrow:1,
    },
    mainView: {
      marginTop: 0,
      marginBottom:49
    },
    itemWrapper:{
      backgroundColor: '#f3f3f3'
    },
    touchBox:{
      width: Util.size.width/3-0.33334,
      height:Util.size.width/3,
      backgroundColor:"#fff",
    },
    touchBoxContainer:{
      flexDirection: "row", 
      flexWrap:"wrap",
      width: Util.size.width,
      borderTopWidth: Util.pixel,
      borderTopColor:"#ccc",
      borderLeftWidth: Util.pixel,
      borderLeftColor:"#ccc",
      borderRightWidth: Util.pixel,
      borderRightColor:"#ccc",
    },
    touchBox1:{
      borderBottomWidth: Util.pixel,
      borderBottomColor:"#ccc",
      borderRightWidth: Util.pixel,
      borderRightColor:"#ccc",
    },
    touchBox2:{
      borderBottomWidth: Util.pixel,
      borderBottomColor:"#ccc",
      borderLeftWidth: Util.pixel,
      borderLeftColor:"#ccc",
    },
    boxContainer:{
      alignItems:"center",
      justifyContent:"center",
      width: Util.size.width/3,
      height:Util.size.width/3,
    },
    boxIcon:{
      position:"relative",
      top:-10
    },
    boxText:{
      position:"absolute",
      bottom:15,
      width:Util.size.width/3,
      textAlign:"center",
      left: 0,
      backgroundColor:"transparent"
    },
    slide: {
      flexGrow: 1,
      height: 150,
      justifyContent: 'center',
      alignItems: 'center',
    },
    slideText:{
      position:"absolute",
      bottom: 0,
      paddingTop:5,
      paddingBottom:5,
      backgroundColor:"rgba(255,255,255,0.5)",
      width: Util.size.width,
      textAlign:"center",
      fontSize: 12
    },
    image:{
      width: Util.size.width,
      flexGrow: 1,
      alignSelf: 'stretch',
    }
  });
  
  AppRegistry.registerComponent('ReactNativeLearn', () => ReactNativeLearn);
  */