import { View, Text } from 'react-native'
import React from 'react'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs'

const Tab = createBottomTabNavigator();

const SampleScreen = () => (
    <View><Text>Sample Screen</Text></View>
)

export default function Main() {
    return (
        <Tab.Navigator>
            <Tab.Screen
            name='Home'
            component={SampleScreen}></Tab.Screen>
            <Tab.Screen
             name='Home'
             component={SampleScreen}></Tab.Screen>
            
        </Tab.Navigator >
    )
}