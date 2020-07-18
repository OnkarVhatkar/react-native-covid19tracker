import React from 'react'
import { View, Text, Image, StyleSheet } from 'react-native'
import { FontSizes, Color } from '../../../../constants'

const CountryName = (props) => {
  const { containerStyle, name } = props
  return (
    <View style={containerStyle}>
      <Image style={styles.virusIconStart} source={require('../../../../assets/virus-96.png')} />
      <Text style={styles.country}>{name}</Text>
      <Image style={styles.virusIconEnd} source={require('../../../../assets/virus-64.png')} />
    </View>
  )
}

const styles = StyleSheet.create({
  country: {
    fontSize: FontSizes.MEDIUM,
    color: Color.TEXT_BLACK,
  },
  virusIconStart: {
    position: 'absolute',
    start: 40,
    top: 15,
  },
  virusIconEnd: {
    position: 'absolute',
    end: 10,
    bottom: 10,
  },
})

export default CountryName
