import React, { useState } from 'react';
import X, {
  StyleSheet,
  View,
  Text,
  Button,
  TouchableOpacity,
  PanResponder,
  Animated
} from 'react-native';


import { createStackNavigator } from '@react-navigation/stack';
import { NavigationContainer } from '@react-navigation/native';

const App = () => {
    const pan = useState(new Animated.ValueXY())[0]
    const panResponder = useState(
        PanResponder.create({
            onMoveShouldSetPanResponder: () => true,
            onPanResponderGrant: () => { // 움직이기 시작할 때 1번 작동
                console.log('Hello'); 
                pan.setOffset({
                    x: pan.x._value,
                    y: pan.y._value
                })
            },
            onPanResponderMove: (_, gesture) => {
                pan.x.setValue(gesture.dx)
                pan.y.setValue(gesture.dy)
            },
            // onPanResponderMove: (...args) => {
            //     console.log('args: ', args[1]);
            // },
            // onPanResponderMove: Animated.event([null, {
            //     dx: pan.x, dy: pan.y
            // }]),
            onPanResponderRelease: () => {
                pan.flattenOffset()
            }
        })
    )[0]
    console.log(panResponder.panHandlers);
    return(
        <View style={{ flex: 1 }}>
            <Animated.View
                style={[
                    {
                        width: 100,
                        height: 100,
                        borderRadius: 100 / 2,
                        top: pan.y,
                        left: pan.x,
                        // marginLeft: leftValue, //이런 식으로, margin을 줘서 화면에서 쫓아낼 수도 있음 
                        // opacity: leftValue, //이런 식으로, opacity를 이용해 화면에 천천히 등장함
                        // transform: [{ // 이런 식으로, useNativeDriver가 true인 경우, margin을 사용하고 싶을 때
                        //     translateX:leftValue 
                        // }],
                        backgroundColor: 'red'
                    },
                    // pan.getLayout()
                ]}
                {...panResponder.panHandlers}
            />
        </View>
    );
}

export default App;