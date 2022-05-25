import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import Animated from 'react-native-reanimated'

interface SubslideProps {
    right?: boolean,
    subtitle?: string,
    description?: string,
    x?: any,
    last?: boolean

}

export default function Subslide({ right, subtitle, description, x }: SubslideProps) {
    return (
        <View style={styles.container}>
            <Text>{subtitle}</Text>
            <Text>{description}</Text>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1, justifyContent: 'center', alignItems:"center"
    }
})