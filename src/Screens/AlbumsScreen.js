import { View, Text, FlatList, TouchableOpacity, Image } from 'react-native'
import React, { useEffect, useState } from 'react'
import axios from 'axios';
import { Divider, Card, ListItem, Button, Icon } from 'react-native-elements';

const AlbumsScreen = ({ navigation }) => {

    const [albums, setAlbums] = useState([]);

    useEffect(() => {
        axios.get("https://jsonplaceholder.typicode.com/albums")
            .then((res) => {
                setAlbums(res.data);
            })


    }, []);

    const goToAlbumDetail = (id,title) => {
        navigation.navigate("AlbumPhotosScreen", { albumId: id , albumName : title});
    }

    const renderAlbum = ({ item }) => {
        return <TouchableOpacity onPress={() => goToAlbumDetail(item.id , item.title)}>
            <Card>
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