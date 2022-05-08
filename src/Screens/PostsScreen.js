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
            <View style={styles.postView}>
                <Text style={styles.postText}>{item.title}</Text>
            </View>
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

const styles = StyleSheet.create({
    container: {
        flex: 1,
        //alignItems: 'center',
        //justifyContent: 'center',
        padding: 5,
    },
    postView: {
        flex: 1,
        padding: 3,
        margin: 5,
        alignItems: 'center',
        //justifyContent: 'center',
        borderRadius: 10,
        elevation: 3,
        backgroundColor: '#fff',
        shadowOffset: { width: 1, height: 1 },
        shadowColor: '#333',
        shadowOpacity: 0.3,
        shadowRadius: 2,
    },
    postText: {
        fontSize: 20,
        fontStyle: 'normal',
        fontFamily: "Cochin",
        fontWeight: 'normal',
        textAlign:'center',
        color:'gray',
    },
});

export default PostsScreen