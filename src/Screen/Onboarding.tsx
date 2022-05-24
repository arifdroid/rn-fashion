import { Dimensions, StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { ScrollView } from 'react-native-gesture-handler'
import Slide from './Slide'
import Animated from 'react-native-reanimated';

const { width, height } = Dimensions.get('window');

export default function Onboarding() {
  return (
    <View style={styles.container}>
      <View style={styles.slider}>
        <Animated.ScrollView
          horizontal
          snapToInterval={width}
          decelerationRate={'fast'}
          showsHorizontalScrollIndicator={false}
        >
          <Slide label='Relax' />
          <Slide label='Playful' right />
          <Slide label='Eccentric' />
          <Slide label='Funky' right />
        </Animated.ScrollView>
      </View>
      <View style={styles.footer}>
        <View
          style={{ ...StyleSheet.absoluteFill, backgroundColor: 'cyan' }}
        >
          <View style={{flex:1, backgroundColor:"white", borderTopLeftRadius:75}}>

          </View>

        </View>
      </View>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor:'white'
  },
  slider: {
    flex: 0.61 * height,
    backgroundColor: 'cyan',
    borderBottomRightRadius: 75
  },
  footer: {
    flex: 0.39 * height,
    backgroundColor: 'white'
  }
})