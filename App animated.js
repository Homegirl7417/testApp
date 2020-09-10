import React, { useState } from 'react';
import {
  StyleSheet,
  View,
  Text,
  Button,
  TouchableOpacity,
  Animated
} from 'react-native';


import { createStackNavigator } from '@react-navigation/stack';
import { NavigationContainer } from '@react-navigation/native';

const App = () => {
    // const leftValue = useState(new Animated.Value(0))[0];
    const opacity = useState(new Animated.Value(0))[0];
    function moveBall() {
        Animated.timing(leftValue, { //천천히 움직임, duration 설정가능
            toValue: 500, // animation 물체가 얼마나 움직일지
            duration: 5000,
            useNativeDriver: true
        }).start()

        setTimeout(() => {
            for (let i = 0; i < 50000000000; i++){}
        }, 1000)

        // Animated.spring(leftValue, { //공을 던진 것처럼 움직임, duration 안됨
        //     toValue: 100,
        //     useNativeDriver: false
        // }).start()        
    }

    function fadeInBall() {
        Animated.timing(opacity, {
            toValue: 1,
            duration: 1000,
            useNativeDriver: true
        }).start()
    }

    function fadeOutBall(){
        Animated.timing(opacity, {
            toValue: 0,
            duration: 1000,
            useNativeDriver: true
        }).start()
    }
    return(
        <View style={{ flex: 1 }}>
            <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
                <Animated.View
                    style={{
                        width: 100,
                        height: 100,
                        borderRadius: 100 / 2,
                        // marginLeft: leftValue, //이런 식으로, margin을 줘서 화면에서 쫓아낼 수도 있음 
                        // opacity: leftValue, //이런 식으로, opacity를 이용해 화면에 천천히 등장함
                        // transform: [{ // 이런 식으로, useNativeDriver가 true인 경우, margin을 사용하고 싶을 때
                        //     translateX:leftValue 
                        // }],
                        opacity: opacity,
                        backgroundColor: 'red'
                    }}
                />
                <TouchableOpacity onPress={fadeInBall}>
                    <Text>Fade In</Text>
                </TouchableOpacity>
                <TouchableOpacity onPress={fadeOutBall}>
                    <Text>Fade Out</Text>
                </TouchableOpacity>
            </View>
        </View>
    );
}

export default App;