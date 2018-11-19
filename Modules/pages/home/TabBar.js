import React, {
     Component 
    } from 'react';
import { 
    AppRegistry,
    FlatList, 
    StyleSheet, 
    Text, 
    ART,
    View, 
    TabBarIOS,
    Button,
    Dimensions,
    TouchableOpacity
} from 'react-native';
const { height, width } = Dimensions.get('window');
var ITEM_HEIGHT = 100;
export default class TabBar extends Component{
    state = {
        selectedTab:'home'// 默认选中首页
    };
    render(){
        return(
           <TabBarIOS 
           tintColor='green' // 文字选中颜色
           unselectedTintColor='black' // 文字默认颜色 
           >
             <TabBarIOS.Item
               title = "互助" // 标题
               icon = {require('../../resource/images/TabBarIcon/home.png')} // 默认图标
               selectedIcon = {require('../../resource/images/TabBarIcon/home_sel.png')} // 选中图标
               renderAsOriginal={true}
               selected = {this.state.selectedTab === 'home'} // 是否选中
               onPress={() => {
                 this.setState({selectedTab:'home'});
               }}
             >
                <Text style={styles.content}>互助</Text>
             </TabBarIOS.Item>
             <TabBarIOS.Item
              title = "凭证"
              icon = {require('../../resource/images/TabBarIcon/cert.png')}
              selectedIcon = {require('../../resource/images/TabBarIcon/cert_sel.png')}
              renderAsOriginal={true}
              selected = {this.state.selectedTab === 'cert'}
              onPress={() => {
                this.setState({selectedTab:'cert'});
              }}
             >
                <Text style={styles.content}>凭证</Text>
             </TabBarIOS.Item>
             <TabBarIOS.Item
              title = "公示"
              icon = {require('../../resource/images/TabBarIcon/notice.png')}
              selectedIcon = {require('../../resource/images/TabBarIcon/notice_sel.png')}
              renderAsOriginal={true}
              selected = {this.state.selectedTab === 'notice'}
              onPress={() => {
                this.setState({selectedTab:'notice'});
              }}
             >
                <Text style={styles.content}>公示</Text>
             </TabBarIOS.Item>
             <TabBarIOS.Item
              title = "我的"
              icon = {require('../../resource/images/TabBarIcon/profile.png')}
              selectedIcon = {require('../../resource/images/TabBarIcon/profile_sel.png')}
              renderAsOriginal={true}
              selected = {this.state.selectedTab === 'profile'}
              onPress={() => {
                this.setState({selectedTab:'profile'});
              }}
             >
                <Text style={styles.content}>我的</Text>
             </TabBarIOS.Item>
           </TabBarIOS>
        );
    }
}

const styles = StyleSheet.create({
    content: {
      marginTop: 20,
    },
    backgroundVideo : {
        position: 'absolute',
        top: 0,
        left: 0,
        bottom: 0,
        right: 0,
    },
    txt: {
        textAlign: 'center',
        textAlignVertical: 'center',
        color: 'white',
        fontSize: 30,
    }
});
AppRegistry.registerComponent('TabBar', ()=>TabBar);
