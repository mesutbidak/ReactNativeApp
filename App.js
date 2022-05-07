import { StyleSheet, Text, View, SafeAreaView, FlatList } from 'react-native';
//import React, { useState, useEffect } from 'react';
import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';

function HomeScreen() {
  return (
    <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
      <Text>Home Screen</Text>
    </View>
  );
}

function SettingsScreen() {
  return (
    <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
      <Text>Settings!</Text>
    </View>
  );
}

//const Stack = createNativeStackNavigator();

const Tab = createBottomTabNavigator();

export default function App() {
  // const apiUrl = "https://jsonplaceholder.typicode.com/users";
  // const [users, setUsers] = useState([]);

  // useEffect(() => {
  //   fetch(apiUrl)
  //     .then((res) => res.json())
  //     .then((data) => {
  //       setUsers(data);
  //     })

  // }, []);

  // const renderUser = ({ item }) => {
  //   return <Text>{item.name}</Text>
  // };

  return (

    <SafeAreaView style={styles.container}>
      <NavigationContainer>
        <Tab.Navigator>
          <Tab.Screen name="Home" component={HomeScreen} />
          <Tab.Screen name="Settings" component={SettingsScreen} />
        </Tab.Navigator>
      </NavigationContainer>
      {/* <View style={{ backgroundColor: 'blue', flex: 1 }}>

      </View>
      <View style={{ backgroundColor: 'red', flex: 5 }}>
        <FlatList
          data={users}
          renderItem={renderUser}>
        </FlatList>
      </View> */}


    </SafeAreaView>

  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    // alignItems: 'center',
    // justifyContent: 'center',
  },
});
