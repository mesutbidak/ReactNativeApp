import React, { useState, useEffect } from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import ToDoScreen from '../Screens/ToDoScreen';

const ToDoStack = createNativeStackNavigator();

const ToDoStackScreen = () => {
  return (
    
      <ToDoStack.Navigator>
            <ToDoStack.Screen name="ToDoScreen" component={ToDoScreen} options={{ title: 'ToDos' }}/>
        </ToDoStack.Navigator>
    
  )
}

export default ToDoStackScreen