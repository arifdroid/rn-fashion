import { View, Text, TouchableOpacity } from 'react-native'
import React from 'react'
import { SafeAreaView } from 'react-native-safe-area-context'
import { NavigationContainer } from '@react-navigation/native'
import { createNativeStackNavigator } from '@react-navigation/native-stack'
import Main from './Main'
import Onboarding from '../Screen/Onboarding'

const Stack = createNativeStackNavigator()

const AuthenticationStack = createNativeStackNavigator();

const StartupContainer = ({ navigation }) => {
    const nav = () => { }
    return (
        <View style={{ flex: 1, justifyContent: 'center', alignSelf: 'center' }}><TouchableOpacity onPress={nav}><Text>Startup</Text></TouchableOpacity></View>
    )
}

const AuthenticationNavigator = () => {
    return (
        <AuthenticationStack.Navigator screenOptions={{ headerShown: false }}>
            <AuthenticationStack.Screen name='Onboarding' component={Onboarding}></AuthenticationStack.Screen>
        </AuthenticationStack.Navigator>
    )
}



export default function Application() {
    return (

        <NavigationContainer>
            {/* <Stack.Navigator screenOptions={{ headerShown: false }}>
                <Stack.Screen name="Startup" component={StartupContainer} />
                <Stack.Screen name="Main" component={Main} />
            </Stack.Navigator> */}
            <AuthenticationNavigator />
        </NavigationContainer>

    )
}