import { StyleSheet, Text, View, SafeAreaView, FlatList, TouchableOpacity } from 'react-native';
import React, { useState, useEffect } from 'react';
//import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';

const UsersScreen = ({navigation}) => {
    const apiUrl = "https://jsonplaceholder.typicode.com/users";
    const [users, setUsers] = useState([]);

    useEffect(() => {
        fetch(apiUrl)
            .then((res) => res.json())
            .then((data) => {
                setUsers(data);
            })

    }, []);

    const goToUserDetail = (id)=>{
        navigation.navigate("UserDetailScreen",{userId : id});
    };

    const renderUser = ({ item }) => {
        return <TouchableOpacity onPress={() => goToUserDetail(item.id)}>
            <Text>{item.name}</Text>
        </TouchableOpacity >
    };

return (
    <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
        <FlatList
            data={users}
            renderItem={renderUser}
            initialNumToRender={20}>
        </FlatList>
    </View>
);
}

export default UsersScreen