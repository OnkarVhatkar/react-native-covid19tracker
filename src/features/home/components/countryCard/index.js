import React from 'react'
import { View, Text, StyleSheet } from 'react-native'
import { Color } from '../../../../constants'

const CountryCard = (props) => {
  const { stats } = props
  return (
    <View style={styles.container}>
      <Text style={styles.country}> {stats.Country_text} </Text>
      <Text style={styles.newCases}> {`New:${stats['New Cases_text']}`} </Text>
      {/* <Text style={styles.newdeaths}> {stats['New Deaths_text']} </Text>
      <Text style={styles.recoveries}> {stats['Total Recovered_text']} </Text> */}
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
    backgroundColor: Color.BLUE,
    borderRadius: 15,
  },
  country: {
    // flex: 1,
    borderWidth: 1,
    textAlign: 'center',
  },
  newCases: {
    // flex: 1,
    borderWidth: 1,
  },
})

export default CountryCard
