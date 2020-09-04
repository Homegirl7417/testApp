/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React from 'react';
import {
  StyleSheet,
  View,
  Text,
  TouchableOpacity
} from 'react-native';
// Button 사용금지

import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';

function FirstScreen(){
  return (
    <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
      <Text>Home Screen</Text>
      {/* <TouchableOpacity
        style={styles.button}
        onPress={() => navigation.navigate("Details")}
      >
        <View>
          <Text style={{ fontSize: 30, color: 'red' }}>Go To Hell</Text>
        </View>
      </TouchableOpacity> */}
    </View>
  )
}
function SecondScreen() {
  return (
    <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
      <Text>SecondScreen</Text>
    </View>
  );
}
function ThirdScreen() {
  return (
    <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
      <Text>ThirdScreen</Text>
    </View>
  );
}
function ForthScreen() {
  return (
    <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
      <Text>ForthScreen</Text>
    </View>    
  );
}
function FifthScreen() {
  return (
    <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
      <Text>FifthScreen</Text>
    </View>    
  );
}
const Tab = createBottomTabNavigator();
function App() {
  return (
    <NavigationContainer>
      <Tab.Navigator>
        <Tab.Screen name="First" component={FirstScreen} />
        <Tab.Screen name="Second" component={SecondScreen} />
        <Tab.Screen name="Third" component={ThirdScreen} />
        <Tab.Screen name="Forth" component={ForthScreen} />
        <Tab.Screen name="Fifth" component={FifthScreen} />
      </Tab.Navigator>
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  button: {
    alignItems: 'center',
    backgroundColor: '#DDDDDD',
    padding: 10
  }
});

export default App;
