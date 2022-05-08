import { StyleSheet, Text, View, SafeAreaView, FlatList } from 'react-native';
import React, { useState, useEffect } from 'react';
//import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import PostsScreen from '../Screens/PostsScreen';
import PostDetailScreen from '../Screens/PostDetailScreen';

const PostsStack = createNativeStackNavigator();

const PostsStackScreen = () => {
    // const apiUrl = "https://jsonplaceholder.typicode.com/posts";
    // const [posts, setPosts] = useState([]);

    // useEffect(() => {
    //     fetch(apiUrl)
    //         .then((res) => res.json())
    //         .then((data) => {
    //             setPosts(data);
    //         })

    // }, []);
    
    // const renderPost = ({ item }) => {
        
    //     return <Text>{item.title}</Text>
    // };
    return (

        <PostsStack.Navigator>
            <PostsStack.Screen name="PostsScreen" component={PostsScreen} />
            <PostsStack.Screen name="PostDetailScreen" component={PostDetailScreen} />
        </PostsStack.Navigator>
        // <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
        //     <FlatList
        //         data={posts}
        //         renderItem={renderPost}
        //         initialNumToRender={20}>
        //     </FlatList>
        // </View>
    );
}

export default PostsStackScreen