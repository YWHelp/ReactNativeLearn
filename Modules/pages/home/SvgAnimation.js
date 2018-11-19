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
import Svg,{
   Circle,
   Ellipse,
   G,
   TSpan,
   TextPath,
   Path,
   Polygon,
   Polyline,
   Line,
   Rect,
   Use,
   Image,
   Symbol,
   Defs,
   LinearGradient,
   RadialGradient,
   Stop,
   ClipPath,
   Pattern,
   Mask,
} from 'react-native-svg';
const { height, width } = Dimensions.get('window');
var ITEM_HEIGHT = 100;
export default class SvgAnimation extends Component{
   render(){
    //    const path = ART.Path();
    //    path.moveTo(1,1); //将起始点移动到(1,1) 默认(0,0)
    //    path.lineTo(300,100); //连线到目标点(300,1)
       return(
            <View style={[StyleSheet.absoluteFill,{alignItems:'center',justifyContent:'center'},]}>
                <Svg height={height * 0.5} width={width * 0.5} viewBox="0 0 100 100">
                <Circle
                    cx="50"
                    cy="50"
                    r="45"
                    stroke="blue"
                    strokeWidth="2.5"
                    fill="green"
                />
                <Rect
                    x="15"
                    y="15"
                    width="70"
                    height="70"
                    stroke="red"
                    strokeWidth="2"
                    fill="yellow"
                />
                </Svg>
            </View>
            // {/* <Text style={styles.content}>互助</Text> */}
            //    {/* <View style={styles.backgroundVideo}>
            //        <ART.Surface width={300} height={2}>
            //        <ART.Shape d={path} stroke="#000000" strokeWidth={1} />
            //        </ART.Surface>
            //    </View> */}
               
            //    {/* <Svg height="100" width="100"> 
            //        <Rect x="0" y="0" width="100" height="100" fill="black" /> 
            //        <Circle cx="50" cy="50" r="30" fill="yellow"/> 
            //        <Circle cx="40" cy="40" r="4"  fill="black" /> 
            //        <Circle cx="60" cy="40" r="4"  fill="black" /> 
            //        <Path d="M 40 60 A 10 10 0 0 0 60 60" stroke="black"/>
            //    </Svg>; */}
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
AppRegistry.registerComponent('SvgAnimation', ()=>SvgAnimation);