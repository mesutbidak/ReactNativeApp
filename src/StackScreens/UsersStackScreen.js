import { StyleSheet, Text, View, SafeAreaView, FlatList } from 'react-native';
import React, { useState, useEffect } from 'react';
//import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import UsersScreen from '../Screens/UsersScreen';
import UserDetailScreen from '../Screens/UserDetailScreen';


const UsersStack = createNativeStackNavigator();

const UsersStackScreen = () => {
    return (
        <UsersStack.Navigator>
            <UsersStack.Screen name="UsersScreen" component={UsersScreen} options={{ title: 'User List' }}/>
            <UsersStack.Screen name="UserDetailScreen" component={UserDetailScreen} options={({ route }) => ({ title: route.params.userName })}/>
        </UsersStack.Navigator>
    )
}

export default UsersStackScreen