import React from 'react'
import { View, Text, StyleSheet } from 'react-native'
import { color } from '../../../../constants'

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
    height: 250,
    width: 50,
    backgroundColor: color.BLUE,
  },
})

export default CountryCard
