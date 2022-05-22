// import { StyleSheet, Text, View, SafeAreaView, FlatList } from 'react-native';
import React, { useState, useEffect } from 'react';
//import * as React from 'react';
// import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
// import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import PostsScreen from '../Screens/PostsScreen';
import PostDetailScreen from '../Screens/PostDetailScreen';

const PostsStack = createNativeStackNavigator();

const PostsStackScreen = () => {
    return (

        <PostsStack.Navigator>
            <PostsStack.Screen name="PostsScreen" component={PostsScreen} options={{ title: 'Post List' }}/>
            <PostsStack.Screen name="PostDetailScreen" component={PostDetailScreen} options={{ title: 'Post Detail' }}/>
        </PostsStack.Navigator>
    );
}

export default PostsStackScreen