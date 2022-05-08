import { StyleSheet, Text, View, SafeAreaView, FlatList } from 'react-native';
import React, { useState, useEffect } from 'react';
//import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';

const PostDetailScreen = ({route, navigation}) => {
    const apiUrl = "https://jsonplaceholder.typicode.com/posts";
    const{postId} = route.params;
    const[post,setPost] = useState({});
    useEffect(() => {
        fetch(apiUrl + "/" + postId)
            .then((res) => res.json())
            .then((data) => {
                setPost(data);
            })

    }, []);

    return (
        <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
            <Text>UserId : {post.userId}</Text>
            <Text>ID : {post.id}</Text>
            <Text>Title : {post.title}</Text>
            <Text>Body : {post.body}</Text>
        </View>
    )
}

export default PostDetailScreen