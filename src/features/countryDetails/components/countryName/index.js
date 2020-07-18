import React from 'react'
import { View, Text, StyleSheet } from 'react-native'
import { FontSizes, Color, FontFamily } from '../../../../constants'

const CountryName = (props) => {
  const { containerStyle, name } = props
  return (
    <View style={containerStyle}>
      <Text style={styles.country}>{name}</Text>
    </View>
  )
}

const styles = StyleSheet.create({
  country: {
    fontSize: FontSizes.LARGE,
    fontFamily: FontFamily.FontFamily_Bold,
    letterSpacing: 2,
    color: Color.WHITE,
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
