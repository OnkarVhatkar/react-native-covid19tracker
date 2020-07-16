import React from 'react'
import { View, Text, StyleSheet } from 'react-native'
import { Color } from '../../../../constants'

const CountryCard = (props) => {
  const { stats } = props
  const newCases = stats['New Cases_text']
  return (
    <View style={styles.container}>
      <Text style={styles.country}> {stats.Country_text} </Text>
      <Text style={styles.newCases}> {`(${newCases.length > 0 ? newCases : 'N.A'})`} </Text>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    height: 220,
    width: 165,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'white',
    borderRadius: 15,
  },
  country: {
    textAlign: 'center',
    color: Color.TEXT_BLACK,
    fontWeight: '600',
    letterSpacing: 1,
  },
  newCases: {
    color: Color.TEXT_BLACK,
    fontWeight: '500',
  },
})

export default CountryCard
