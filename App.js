import { StyleSheet, Text, View, SafeAreaView, FlatList } from 'react-native';
import React, { useState, useEffect } from 'react';
//import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import UsersStackScreen from './src/StackScreens/UsersStackScreen';
import PostsStackScreen from './src/StackScreens/PostsStackScreen';

const Tab = createBottomTabNavigator();

export default function App() {
  return (

    <SafeAreaView style={styles.container}>
      <NavigationContainer>
        <Tab.Navigator>
          <Tab.Screen options={{ headerShown: false }} name="Users" component={UsersStackScreen} />
          <Tab.Screen options={{ headerShown: false }} name="Posts" component={PostsStackScreen} />
        </Tab.Navigator>
      </NavigationContainer>
    </SafeAreaView>

  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    // alignItems: 'center',
    // justifyContent: 'center',
  },
});
