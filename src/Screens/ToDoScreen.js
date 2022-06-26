import { StyleSheet, Text, View, SafeAreaView, FlatList, TouchableOpacity } from 'react-native';
import React, { useState, useEffect } from 'react';

const ToDoScreen = () => {
    const apiUrl = "https://jsonplaceholder.typicode.com/todos";

    useEffect(() => {
        fetch(apiUrl)
            .then((res) => res.json())
            .then((data) => {
                console.log("welcome to the todo screen");
            })

    }, []);

    return (
        <View>
            <Text>TODO PAGE</Text>
        </View>
    );
}

export default ToDoScreen