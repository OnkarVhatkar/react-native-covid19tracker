import React from 'react'
import { View, Text, StyleSheet } from 'react-native'
import { Color } from '../../../../constants'

const CountryCard = (props) => {
  const { country } = props.country
  return (
    <View style={styles.container}>
      <Text> {country} </Text>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    height: 220,
    width: 165,
    justifyContent: 'center',
    alignItems: 'center',
    borderWidth: StyleSheet.hairlineWidth,
    borderColor: Color.BLUE,
    borderRadius: 15,
  },
})

export default CountryCard
