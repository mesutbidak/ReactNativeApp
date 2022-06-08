import { StyleSheet, Text, View, SafeAreaView, FlatList, TouchableOpacity } from 'react-native';
import React, { useState, useEffect } from 'react';
//import * as React from 'react';
// import { NavigationContainer } from '@react-navigation/native';
// import { createNativeStackNavigator } from '@react-navigation/native-stack';
// import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
// import MapView from 'react-native-maps';

const UserDetailScreen = ({ route, navigation }) => {
    const apiUrl = "https://jsonplaceholder.typicode.com/users";
    const { userId } = route.params;
    const [user, setUser] = useState({});
    const [userAdress, setUserAdress] = useState({});
    const [userCompany, setUserCompany] = useState({});
    
    useEffect(() => {
        fetch(apiUrl + "/" + userId)
            .then((res) => res.json())
            .then((data) => {
                setUser(data);
                setUserAdress(data.address);
                setUserCompany(data.company);
            })

    }, []);

    const goToUserMap = (lat, lng) => {
        navigation.navigate("UserMapScreen", { userLat: lat, userLng: lng });
    };

    return (
        <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
            <View style={styles.userView}>
                <Text style={styles.userText}>ID : {user.id}</Text>
                <Text style={styles.userText}>Name : {user.name}</Text>
                <Text style={styles.userText}>Username : {user.username}</Text>
                <Text style={styles.userText}>Email : {user.email}</Text>
                <Text style={styles.userText}>Phone : {user.phone}</Text>
                <Text style={styles.userText}>Website : {user.website}</Text>
            </View>
            <View style={styles.userView}>
                <Text style={styles.userText}>ADDRESS</Text>
                <Text style={styles.userText}>Street : {userAdress.street} </Text>
                <Text style={styles.userText}>Suite : {userAdress.suite} </Text>
                <Text style={styles.userText}>City : {userAdress.city} </Text>
                <Text style={styles.userText}>Zipcode : {userAdress.zipcode} </Text>

            </View>
            <View style={styles.userView}>
                <Text style={styles.userText}>COMPANY</Text>
                <Text style={styles.userText}>Name : {userCompany.name}</Text>
                <Text style={styles.userText}>catchPhrase : {userCompany.name}</Text>
                <Text style={styles.userText}>bs : {userCompany.name}</Text>
            </View>
            <View style={{flex:1}}>
                <TouchableOpacity style={styles.mapButton} onPress={() => goToUserMap(userAdress.geo.lat, userAdress.geo.lng)}>
                    
                        <Text style={styles.mapButtonText}>Click To See On The Map</Text>
                    
                </TouchableOpacity >
            </View>
        </View >
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1, //the container will fill the whole screen.
        justifyContent: "flex-end",
        alignItems: "center",
    },
    userView: {
        flex: 3,
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
    userText: {
        fontSize: 20,
        fontStyle: 'normal',
        fontFamily: "Cochin",
        fontWeight: 'normal',
        color: 'gray',
        flex: 1,
    },
    mapButton: {
        alignItems: "center",
        backgroundColor: "orange",
        padding: 10,
        flex: 3,
        margin: 5,
        alignItems: 'center',
        //justifyContent: 'center',
        borderRadius: 10,
        elevation: 3,
        shadowOffset: { width: 1, height: 1 },
        shadowColor: '#333',
        shadowOpacity: 0.3,
        shadowRadius: 2,
    },
    mapButtonText: {
        fontSize: 20,
        fontStyle: 'normal',
        fontFamily: "Cochin",
        fontWeight: 'bold',
        color: 'black',
        flex: 1,
    },
});

export default UserDetailScreen