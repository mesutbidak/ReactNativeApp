import { View, Text } from 'react-native'
import React from 'react'
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import AlbumsScreen from '../Screens/AlbumsScreen';
import AlbumPhotosScreen from '../Screens/AlbumPhotosScreen';

const AlbumsStack = createNativeStackNavigator();

const AlbumsStackScreen = () => {
  return (
    <AlbumsStack.Navigator>
        <AlbumsStack.Screen name="AlbumsScreen" component={AlbumsScreen} options={{ title: 'Album List' }}/>
        <AlbumsStack.Screen name="AlbumPhotosScreen" component={AlbumPhotosScreen} options={{title: 'Album Photos'}}/>
    </AlbumsStack.Navigator>
  )
}

export default AlbumsStackScreen