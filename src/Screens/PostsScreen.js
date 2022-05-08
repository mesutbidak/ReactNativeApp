import { StyleSheet, Text, View, SafeAreaView, FlatList, TouchableOpacity } from 'react-native';
import React, { useState, useEffect } from 'react';
//import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';

const PostsScreen = ({ navigation }) => {
    const apiUrl = "https://jsonplaceholder.typicode.com/posts";
    const [posts, setPosts] = useState([]);

    useEffect(() => {
        fetch(apiUrl)
            .then((res) => res.json())
            .then((data) => {
                setPosts(data);
            })

    }, []);

    const goToPostDetail = (id) => {
        navigation.navigate("PostDetailScreen", { postId: id });
    };

    const renderPost = ({ item }) => {

        return <TouchableOpacity onPress={() => goToPostDetail(item.id)}>
            <Text>{item.title}</Text>
        </TouchableOpacity>
    };
    return (
        <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
            <FlatList
                data={posts}
                renderItem={renderPost}
                initialNumToRender={20}>
            </FlatList>
        </View>
    )
}

export default PostsScreen