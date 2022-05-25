import { Dimensions, StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { ScrollView } from 'react-native-gesture-handler'
import Slide from './Slide'
import Animated, { useValue, useSharedValue, interpolateColor, useAnimatedStyle, useDerivedValue, interpolate, useAnimatedScrollHandler, } from 'react-native-reanimated';
// import { onScroll } from 'react-native-redash';

const { width, height } = Dimensions.get('window');

const slides = ['Relax', 'Cool', 'Maverick', 'Eccentrice']

export default function Onboarding() {
  const x = useSharedValue(0);
  // const x2 = useSharedValue(0);
  const scrollOffset = useSharedValue(0);

  //TODO: onsScrollEvent
  // const onScroll = useScrollEvent({ x })

  const scrollHandler = useAnimatedScrollHandler({
    onScroll: (event) => {
      x.value = event.contentOffset.x;
    },
  });

  const slides = [
    { label: 'Relaxed', color: "#BFEAF5" },
    { label: 'Cool', color: "#BEECC4" },
    { label: 'Eccentric', color: "#FFE4D9" },
    { label: 'Funky', color: "#FFDDDD" }
  ]

  const rStyle = useAnimatedStyle(() => {

    // const backgroundColor = interpolateColor(
    //   x.value,
    //   [0, width, width * 2, width * 3],
    //   ["#BFEAF5", "#BEECC4", "#FFE4D9", "#FFDDDD"]
    // )
    const backgroundColor = interpolateColor(
      x.value,
      slides.map((_, i) => i * width),
      slides.map(slide => slide.color)
    )
    return {
      backgroundColor: backgroundColor
    }
  }, [])



  return (
    <View style={styles.container}>
      <Animated.View style={[styles.slider, rStyle]}>
        <Animated.ScrollView
          horizontal
          snapToInterval={width}
          decelerationRate={'fast'}
          showsHorizontalScrollIndicator={false}
          onScroll={scrollHandler}
          scrollEventThrottle={1}
          bounces={false}

        >
          {slides.map(({ label, }, index) => <Slide key={index} right={!(index % 2)} {...{ label }} />)}

          {/* <Slide label='Relax' />
          <Slide label='Playful' right />
          <Slide label='Eccentric' />
          <Slide label='Funky' right /> */}

        </Animated.ScrollView>
      </Animated.View>
      <View style={styles.footer}>
        <Animated.View
          style={[{ ...StyleSheet.absoluteFill, backgroundColor: 'cyan' }, rStyle]}
        >
          <View style={{ flex: 1, backgroundColor: "white", borderTopLeftRadius: 75 }}>

          </View>

        </Animated.View>
      </View>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'white'
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