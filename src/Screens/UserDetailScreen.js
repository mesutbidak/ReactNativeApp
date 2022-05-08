import { StyleSheet, Text, View, SafeAreaView, FlatList } from 'react-native';
import React, { useState, useEffect } from 'react';
//import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';

const UserDetailScreen = ({route, navigation}) => {
    const apiUrl = "https://jsonplaceholder.typicode.com/users";
    const{userId} = route.params;
    const[user,setUser] = useState({});
    useEffect(() => {
        fetch(apiUrl + "/" + userId)
            .then((res) => res.json())
            .then((data) => {
                setUser(data);
            })

    }, []);

    return (
        <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
            <Text>ID : {user.id}</Text>
            <Text>Name : {user.name}</Text>
            <Text>Username : {user.username}</Text>
            <Text>Email : {user.email}</Text>
        </View>
    )
}

export default UserDetailScreen