import { StyleSheet, Text, View, SafeAreaView, FlatList, TouchableOpacity } from 'react-native';
import React, { useState, useEffect } from 'react';
//import * as React from 'react';
// import { NavigationContainer } from '@react-navigation/native';
// import { createNativeStackNavigator } from '@react-navigation/native-stack';
// import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';

const UsersScreen = ({ navigation }) => {
    const apiUrl = "https://jsonplaceholder.typicode.com/users";
    const [users, setUsers] = useState([]);

    useEffect(() => {
        fetch(apiUrl)
            .then((res) => res.json())
            .then((data) => {
                setUsers(data);
            })

    }, []);

    const goToUserDetail = (id, name) => {
        navigation.navigate("UserDetailScreen", { userId: id, userName: name });
    };

    const renderUser = ({ item }) => {
        return <TouchableOpacity onPress={() => goToUserDetail(item.id, item.name)}>
            <View style={styles.userView}>
                <Text style={styles.userText}>{item.name}</Text>
            </View>
        </TouchableOpacity >
    };

    return (
        <View style={styles.container}>
            <FlatList
                data={users}
                renderItem={renderUser}
                initialNumToRender={20}>
            </FlatList>
        </View>
    );
}

export default UsersScreen

const styles = StyleSheet.create({
    container: {
        flex: 1,
        //alignItems: 'center',
        //justifyContent: 'center',
        padding : 5,
    },
    userView: {
        flex: 1,
        padding: 3,
        margin: 5,
        alignItems: 'center',
        //justifyContent: 'center',
        borderRadius : 10,
        elevation:3,
        backgroundColor:'#fff',
        shadowOffset:{width:1,height:1},
        shadowColor:'#333',
        shadowOpacity:0.3,
        shadowRadius:2,
    },
    userText: {
        fontSize: 20,
        fontStyle:'normal',
        fontFamily:"Cochin",
        fontWeight:'normal',
        color:'gray',
    },
});
