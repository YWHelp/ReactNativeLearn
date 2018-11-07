import React, {
    Component 
   } from 'react';
import { 
   AppRegistry,
   FlatList, 
   StyleSheet, 
   Text, 
   View, 
   TabBarIOS,
   Button,
   Dimensions,
   TouchableOpacity,
   NativeModules
} from 'react-native';
const { height, width } = Dimensions.get('window');
var ITEM_HEIGHT = 100;
const jsBridgeModule = NativeModules.jsBridgeModule;
export default class ListView extends Component{
    constructor(props) {
        super(props);
        this.state = {
            refreshing: false
        };
    }
    _renderItem = (item) => {
        let item1 = item;
        var txt = '第' + item1.index + '个' + ' title=' + item1.item.title;
        var bgColor = item1.index % 2 == 0 ? 'red' : 'blue';
        return (
               <TouchableOpacity activeOpacity={1.0} onPress={() => {
                    jsBridgeModule.addEvent("Birthday Party", "4 Privet Drive, Surrey");
               }}>
                    <Text style={[{ flex: 1, height: ITEM_HEIGHT, backgroundColor: bgColor, width: width / 2 }, styles.txt]}>{txt}</Text>
               </TouchableOpacity>
        )
    }
    _header = () => {
        return <Text style={[styles.txt, { backgroundColor: 'black' }]}>这是头部</Text>;
    }
    _footer = () => {
        return <Text style={[styles.txt, { backgroundColor: 'black' }]}>这是尾部</Text>;
    }
    _separator = () => {
        return <View style={{ height: 2, backgroundColor: 'yellow' }}/>;
    }
    _onRefresh() {
//         alert('正在刷新中.... ');
    }
    render(){
       var dataSource = [];
        for (var i = 0; i < 30; i++) {
           dataSource.push({ key: i, title: i + '' });
        }
        return(
           <View style={{ flex: 1 }}>
              <Button title='滚动到指定位置' onPress={() => {
                    this._flatList.scrollToOffset({ animated: true, offset:0 });
                }}/> 
              <View style={{ flex: 1 }}>
                   <FlatList  
                       ref={(flatList) => this._flatList = flatList}
                        ListHeaderComponent={this._header}
                        ListFooterComponent={this._footer}
                        ItemSeparatorComponent={this._separator}
                        renderItem={this._renderItem}
                        numColumns ={2}
                        columnWrapperStyle={{ borderWidth: 2, borderColor: 'black' }}
                        refreshing={this.state.refreshing}
                        getItemLayout={(data, index) => (
                            { length: ITEM_HEIGHT, offset: (ITEM_HEIGHT + 2) * index, index }
                        ) }
                        onRefresh={this._onRefresh}
                        onEndReachedThreshold={0.1}
                        onEndReached={(info) => {
                            alert("滑动到底部了");
                        } }
                        onViewableItemsChanged={(info) => {
                            //    alert("可见不可见触发");
                        } }
                        data={dataSource}>
                       
                   </FlatList>
              </View> 
           </View>
       );
   }
}

const styles = StyleSheet.create({
   txt: {
       textAlign: 'center',
       textAlignVertical: 'center',
       color: 'white',
       fontSize: 15,
   }
});