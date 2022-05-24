import { Dimensions, StyleSheet, Text, View } from 'react-native'
import React from 'react'

interface SlideProps {
    label: string,
    right?: boolean
}


const { width, height } = Dimensions.get('window');
export const SLIDE_HEIGHT = 0.61 * height

export default function Slide({ label, right }: SlideProps) {

    const transform = [
        { translateY: (SLIDE_HEIGHT - 100) / 2 },
        { translateX: right ? width / 2 - 50 : -width / 2 + 50 },
        { rotate: right ? "-90deg" : "90deg" }
    ]

    return (
        <View style={styles.container}>
            <View style={[styles.titleContainer, { transform }]}>
                <Text style={styles.title}>Slide</Text>
            </View>
            <Text>Slide</Text>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        width,

    },
    titleContainer: {
        // backgroundColor: 'red',
        height: 100,
        justifyContent: 'center',
        transform: [
            { translateY: (SLIDE_HEIGHT - 100) / 2 }
        ]
    },
    title: {
        fontSize: 80, color: 'white', textAlign: 'center'
    }
})