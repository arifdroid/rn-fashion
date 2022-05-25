import { Dimensions, StyleSheet, Text, View } from 'react-native'
import React from 'react'

interface SlideProps {
    label: string,
    right?: boolean,
    id_active?: number,
}


const { width, height } = Dimensions.get('window');
export const SLIDE_HEIGHT = 0.61 * height

export default function Slide({ label, right, id_active }: SlideProps) {

    const transform = [
        { translateY: (SLIDE_HEIGHT - 100) / 2 },
        { translateX: right ? width / 2 - 50 : -width / 2 + 50 },
        { rotate: right ? "-90deg" : "90deg" }
    ]

    return (
        <View style={styles.container}>
            <View style={[styles.titleContainer, { transform }]}>
                <Text style={styles.title}>{label}</Text>
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