import { StyleSheet, Text, View, SafeAreaView, FlatList, TouchableOpacity,ScrollView } from 'react-native';
import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { Card } from 'react-native-elements';

const ToDoScreen = () => {
    const [todos, setTodos] = useState([]);

    const apiTodosUrl = "https://jsonplaceholder.typicode.com/todos";
    const apiUsersUrl = "https://jsonplaceholder.typicode.com/users";

    useEffect(() => {
        const requestTodos = axios.get(apiTodosUrl);
        const requestUsers = axios.get(apiUsersUrl);
        axios.all([requestTodos,requestUsers])
        .then(axios.spread((...responses)=>{
            const todos = responses[0];
            const users = responses[1];
            const todosUserCollection = todos.data.map(todo => ({...todo,...users.data.find(user => user.id === todo.userId),id : todo.id}))
            console.log('todos length : ',todos.data.length)
            console.log('users length : ',users.data.length)
            console.log(todosUserCollection[3])
            setTodos(todosUserCollection)
        })).catch(errors => {
            console.log(errors);
        })

    }, []);

    return (
        <View>
            <ScrollView>
            {
                    todos.map((item) => {
                        return (
                            <Card key={item.id}>
                                <Text style={{ marginBottom: 10}}>
                                    <Text style={{ fontWeight: "bold" }}> Title : </Text>
                                    <Text>{item.title}</Text>
                                </Text>
                                <Text style={{ marginBottom: 10 }}>
                                    <Text style={{ fontWeight: "bold" }}> User Name : </Text>
                                    <Text>{item.name}</Text>
                                </Text>
                                <Text style={{ marginBottom: 10 }}>
                                    <Text style={{ fontWeight: "bold" }}> Completed : </Text>
                                    <Text>{item.completed ? "Yes" : "No"}</Text>
                                </Text>
                            </Card>
                        )
                    })
                }
                </ScrollView>
        </View>
    );
}

export default ToDoScreen