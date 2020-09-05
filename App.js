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
  TouchableOpacity,
  SafeAreaView
} from 'react-native';
// Button 사용금지

import { NavigationContainer, StackActions } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { createStackNavigator } from '@react-navigation/stack';
import AntDesign from 'react-native-vector-icons/AntDesign';

function FirstScreen({ navigation }){
  return (
    <SafeAreaView>
      <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
        <Text>Firsth Screen</Text>
        <TouchableOpacity
          style={styles.button}
          onPress={() => navigation.navigate("FirstDetail")}
        >
          <View>
            <Text style={{ fontSize: 25, color: 'red' }}>First Detail</Text>
          </View>
        </TouchableOpacity>
      </View>
    </SafeAreaView>
  )
}
function SecondScreen() {
  return (
    <SafeAreaView>
      <View style={styles.container}>
        <Text style={styles.title}>SecondScreen</Text>
      </View>
    </SafeAreaView>
  );
}
function ThirdScreen() {
  return (
    <SafeAreaView>
      <View style={styles.container}>
        <Text style={styles.title}>ThirdScreen</Text>
      </View>
    </SafeAreaView>
  );
}
function ForthScreen() {
  return (
    <SafeAreaView>
      <View style={styles.container}>
        <Text style={styles.title}>ForthScreen</Text>
      </View>    
    </SafeAreaView>
  );
}
function FifthScreen() {
  return (
    <SafeAreaView>
      <View style={styles.container}>
        <Text style={styles.title}>FifthScreen</Text>
      </View> 
    </SafeAreaView>   
  );
}
function FirstDetail(){
  return (
    <SafeAreaView>
      <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
        <Text>First Detail</Text>
      </View>
    </SafeAreaView>
  )
}

const Tab = createBottomTabNavigator();
const Stack = createStackNavigator();

function HomeTabs() {
  return (
    <Tab.Navigator
      screenOptions={({ route }) => ({
        tabBarIcon: ({ focused, color, size }) => {
          let iconName;
          if (route.name === "First") {
            iconName = focused ? 'meho' : 'meh'; 
          } else if (route.name === "Second") {
            iconName = focused ? 'meho' : 'meh'; 
          } else if (route.name === "Third") {
            iconName = focused ? 'meho' : 'meh'; 
          } else if (route.name === "Forth") {
            iconName = focused ? 'meho' : 'meh'; 
          } else if (route.name === "Fifth") {
            iconName = focused ? 'meho' : 'meh'; 
          }
          return <AntDesign name={iconName} size={size} color={color} />;
        }
      })}
    >
      <Tab.Screen 
        name="First" 
        component={FirstScreen} 
      />
      <Tab.Screen name="Second" component={SecondScreen} />
      <Tab.Screen name="Third" component={ThirdScreen} />
      <Tab.Screen name="Forth" component={ForthScreen} />
      <Tab.Screen name="Fifth" component={FifthScreen} />
    </Tab.Navigator>
  );
}
function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name="Home" component={HomeTabs}/>
        <Stack.Screen name="FirstDetail" component={FirstDetail} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  container : {
    flex: 1, 
    alignItems: 'center', 
    justifyContent: 'center'
  },
  title: {
    fontSize: 30
  },
  button: {
    alignItems: 'center',
    backgroundColor: '#DDDDDD',
    padding: 10,
    width: 200,
    height: 50,
    marginTop: 10,
    borderRadius: 15
  }
});

export default App;
