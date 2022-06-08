import { View, Text, FlatList, TouchableOpacity, Image, Alert, Modal, StyleSheet, Pressable } from 'react-native'
import React, { useEffect, useState } from 'react'
import axios from 'axios';
import { Divider, Card, ListItem, Button, Icon } from 'react-native-elements';
import { SliderBox } from "react-native-image-slider-box";

const AlbumPhotosScreen = ({ route, navigation }) => {
    const { albumId , albumName} = route.params;
    const [photos, setPhotos] = useState([]);
    const [photosUrls, setPhotosUrls] = useState([]);
    const [modalVisible, setModalVisible] = useState(false);
    const [modalPhotoUrl, setModalPhotoUrl] = useState("");

    useEffect(() => {
        axios.get("https://jsonplaceholder.typicode.com/photos?albumId=" + albumId)
            .then((res) => {
                let urls = [];
                res.data.forEach(photo => {
                    urls.push(photo.url);
                });
                setPhotos(res.data);
                setPhotosUrls(urls);
            })
    }, [])

    const goToPhotoDetail = (item) => {
        setModalPhotoUrl(item.url);
        setModalVisible(true);
    }

    const renderPhoto = ({ item }) => {
        return <TouchableOpacity onPress={() => goToPhotoDetail(item)}>
            <Card>
                <Card.Title>{item.title}</Card.Title>
                <Card.Divider />
                <View style={{alignItems:'center'}}>
                    <Card.Image source={{ uri: item.thumbnailUrl }} style={{ height: 150, width: 150}}>
                    </Card.Image>
                </View>
            </Card>
        </TouchableOpacity >
    };

    return (
        <View>
            {/* <SliderBox images={photosUrls} /> */}
            <Modal
                animationType="fade"
                transparent={true}
                visible={modalVisible}
                onRequestClose={() => {
                    Alert.alert("Modal has been closed.");
                    setModalVisible(!modalVisible);
                }}
            >
                <View style={styles.centeredView}>
                    <View style={styles.modalView}>
                        <Image
                            style={styles.imageSize}
                            source={{
                                uri: modalPhotoUrl,
                            }}
                        />
                        <Pressable
                            style={[styles.button, styles.buttonClose]}
                            onPress={() => setModalVisible(!modalVisible)}
                        >
                            <Text style={styles.textStyle}>Close Image</Text>
                        </Pressable>
                    </View>
                </View>
            </Modal>
            <Card containerStyle={{backgroundColor:'transparent'}}>
                <Card.Title> Album Title : {albumName}</Card.Title>
            </Card>
            <FlatList
                data={photos}
                renderItem={renderPhoto}
                initialNumToRender={20}>
            </FlatList>
        </View>
    )
}
const styles = StyleSheet.create({
    centeredView: {
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
        marginTop: 22
    },
    modalView: {
        margin: 20,
        backgroundColor: "white",
        borderRadius: 20,
        padding: 15,
        alignItems: "center",
        shadowColor: "#000",
        shadowOffset: {
            width: 0,
            height: 2
        },
        shadowOpacity: 0.25,
        shadowRadius: 4,
        elevation: 5
    },
    button: {
        borderRadius: 10,
        padding: 10,
        elevation: 2
    },
    buttonOpen: {
        backgroundColor: "#F194FF",
    },
    buttonClose: {
        backgroundColor: "tomato",
    },
    textStyle: {
        color: "white",
        fontWeight: "bold",
        textAlign: "center"
    },
    modalText: {
        marginBottom: 15,
        textAlign: "center"
    },
    imageSize: {
        width: 350,
        height: 350,
        marginBottom: 20,
    }
});

export default AlbumPhotosScreen