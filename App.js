import { StyleSheet, Text, View, SafeAreaView, FlatList } from 'react-native';
import React, { useState, useEffect } from 'react';
//import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';
// import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import UsersStackScreen from './src/StackScreens/UsersStackScreen';
import PostsStackScreen from './src/StackScreens/PostsStackScreen';
import Ionicons from 'react-native-vector-icons/Ionicons';

const Tab = createBottomTabNavigator();

export default function App() {
  return (

    <SafeAreaView style={styles.container}>
      <NavigationContainer>
        <Tab.Navigator screenOptions={({ route }) => ({
          tabBarIcon: ({ focused, color, size }) => {
            let iconName;

            if (route.name === 'Users') {
              iconName = focused
                ? 'ios-person'
                : 'ios-person-outline';
            } else if (route.name === 'Posts') {
              iconName = focused ? 'ios-chatbubbles' : 'ios-chatbubbles-outline';
            }

            // You can return any component that you like here!
            return <Ionicons name={iconName} size={size} color={color} />;
          },
          tabBarActiveTintColor: 'tomato',
          tabBarInactiveTintColor: 'gray',
        })}>
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
