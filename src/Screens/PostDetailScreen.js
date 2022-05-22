import { StyleSheet, Text, View, SafeAreaView, FlatList } from 'react-native';
import React, { useState, useEffect } from 'react';
//import * as React from 'react';
// import { NavigationContainer } from '@react-navigation/native';
// import { createNativeStackNavigator } from '@react-navigation/native-stack';
// import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';

const PostDetailScreen = ({ route, navigation }) => {
    const apiUrlPosts = "https://jsonplaceholder.typicode.com/posts";
    const apiUrlUsers = "https://jsonplaceholder.typicode.com/users";

    const { postId } = route.params;
    const [post, setPost] = useState({});
    const [user, setUser] = useState({});

    useEffect(() => {
        fetch(apiUrlPosts + "/" + postId)
            .then((res) => res.json())
            .then((data) => {
                setPost(data);
                return data.userId;
            })
            .then((userId) => {
                //console.log(userId);
                fetch(apiUrlUsers + "/" + userId)
                    .then((res) => res.json())
                    .then((data) => {
                        setUser(data);
                    });
            })
    }, []);

    return (
        <View style={styles.container}>
            <View style={styles.postView}>
                <Text style={styles.postBoldText}>User Name : {user.name}</Text>
                <Text style={styles.postText}>Title : {post.title}</Text>
            </View>
            <View style={styles.postView}>
                <Text style={styles.postBoldText}>BODY</Text>
                <Text style={styles.postText}>{post.body}</Text>
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1, //the container will fill the whole screen.
        //justifyContent: "flex-end",
        alignItems: "center",
    },
    postView: {
        //flex: 1,
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
        color: 'gray',
    },
    postBoldText:{
        fontSize: 20,
        fontStyle: 'normal',
        fontFamily: "Cochin",
        fontWeight: 'bold',
        color: 'gray',
    },
});

export default PostDetailScreen