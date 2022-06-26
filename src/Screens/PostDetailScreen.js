import { StyleSheet, Text, View, SafeAreaView, FlatList, TouchableOpacity, ScrollView } from 'react-native';
import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { Card } from 'react-native-elements';

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
    const [comments, setComments] = useState([]);

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

        //https://jsonplaceholder.typicode.com/posts/3/comments
        axios.get(`https://jsonplaceholder.typicode.com/posts/${postId}/comments`)
            .then((res) => {
                setComments(res.data);
                //console.log(res.data);
            })

    }, []);

    return (
        <View>
            <ScrollView>
                <Card>
                    <Text>
                        <Text style={{ fontWeight: "bold" }}> User  Name : </Text>
                        <Text>{user.name}</Text>
                    </Text>
                    <Text>
                        <Text style={{ fontWeight: "bold" }}> Title : </Text>
                        <Text>{post.title}</Text>
                    </Text>
                    <Text>
                        <Text style={{ fontWeight: "bold" }}> Content : </Text>
                        <Text>{post.body}</Text></Text>
                </Card>
                <Card>
                    <View style={{ alignContent: "center", alignItems: "center" }}>
                        <Text style={{ fontWeight: "bold" }}>COMMENTS</Text>
                    </View>
                </Card>
                {
                    comments.map((item) => {
                        return (
                            <Card key={item.id}>
                                <Text style={{ marginBottom: 10 }}>
                                    <Text style={{ fontWeight: "bold" }}> User  Name : </Text>
                                    <Text>{item.name}</Text>
                                </Text>
                                <Text style={{ marginBottom: 10 }}>
                                    <Text style={{ fontWeight: "bold" }}> Email : </Text>
                                    <Text>{item.email}</Text>
                                </Text>
                                <Text style={{ marginBottom: 10 }}>
                                    <Text style={{ fontWeight: "bold" }}> Body : </Text>
                                    <Text>{item.body}</Text>
                                </Text>
                            </Card>
                        )
                    })
                }
            </ScrollView>
        </View>
    )
}

export default PostDetailScreen