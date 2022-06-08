import { View, Text, FlatList, TouchableOpacity, Image } from 'react-native'
import React, { useEffect, useState } from 'react'
import axios from 'axios';
import { Divider, Card, ListItem, Button, Icon } from 'react-native-elements';

const AlbumsScreen = ({ navigation }) => {

    const [albums, setAlbums] = useState([]);

    useEffect(() => {
        // axios.get("https://jsonplaceholder.typicode.com/albums")
        //     .then((res) => {
        //         setAlbums(res.data);
        //     })
        const requestAlbums = axios.get('https://jsonplaceholder.typicode.com/albums');
        const requestUsers = axios.get('https://jsonplaceholder.typicode.com/users');
        axios.all([requestAlbums,requestUsers])
        .then(axios.spread((...responses)=>{
            const albums = responses[0];
            const users = responses[1];
            const albumUserCollection = albums.data.map(album => ({...album,...users.data.find(user => user.id === album.userId),id : album.id}))
            console.log('albums length : ',albums.data.length)
            console.log('users length : ',users.data.length)
            console.log(albumUserCollection[87])
            setAlbums(albumUserCollection)
        })).catch(errors => {
            console.log(errors);
        })


    }, []);

    const goToAlbumDetail = (id,title) => {
        navigation.navigate("AlbumPhotosScreen", { albumId: id , albumName : title});
    }

    const renderAlbum = ({ item }) => {
        return <TouchableOpacity onPress={() => goToAlbumDetail(item.id , item.title)}>
            <Card>
                <Text style={{ marginBottom: 10 }}>
                    User  Name : {item.name}
                </Text>
                <Text style={{ marginBottom: 10 }}>
                    Album  Name : {item.title}
                </Text>
            </Card>
        </TouchableOpacity>


        //<TouchableOpacity onPress={() => goToAlbumDetail(item.id, item.title)}>
        //     <View>
        //         <Text>{item.title}</Text>
        //     </View>
        //     <Divider style={{ height: 2, backgroundColor: 'blue' }} />
        // </TouchableOpacity >
    };

    return (
        <View>
            <FlatList
                data={albums}
                renderItem={renderAlbum}
                initialNumToRender={20}>
            </FlatList>
        </View>

    )
}

export default AlbumsScreen