import { StyleSheet, Text, View, SafeAreaView, FlatList } from 'react-native';
import React, { useState, useEffect } from 'react';
//import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';

const PostsStackScreen = () => {
    const apiUrl = "https://jsonplaceholder.typicode.com/posts";
    const [posts, setPosts] = useState([]);

    useEffect(() => {
        fetch(apiUrl)
            .then((res) => res.json())
            .then((data) => {
                setPosts(data);
            })

    }, []);
    var i = 0;
    const renderPost = ({ item }) => {
        i++;
        return <Text>{i + "-)" + item.title}</Text>
    };
    return (
        <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
            <FlatList
                data={posts}
                renderItem={renderPost}>
            </FlatList>
        </View>
    );
}

export default PostsStackScreen