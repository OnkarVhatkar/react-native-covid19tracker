import React from 'react'
import { View, Text, StyleSheet } from 'react-native'
import { FontSizes, Color } from '../../../../constants'

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
    fontSize: FontSizes.MEDIUM,
    color: Color.TEXT_BLACK,
  },
})

export default CountryName
