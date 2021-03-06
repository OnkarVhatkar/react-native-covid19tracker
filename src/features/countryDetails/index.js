import React from 'react'
import { View, StyleSheet } from 'react-native'
import CountryName from './components/countryName'
import { Color } from '../../constants'
import { useRoute } from '@react-navigation/native'
import StatsContainer from './components/stats'
import Preventions from './components/preventions'

const CountryDetails = () => {
  const route = useRoute()
  const { params } = route
  const { stats } = params
  const { Country_text } = stats
  return (
    <View style={styles.container}>
      <CountryName containerStyle={styles.nameContainer} name={Country_text} />
      <StatsContainer containerStyle={styles.statsContainer} stats={stats} />
      <Preventions containerStyle={styles.preventionContainer} />
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: Color.BLUE,
  },
  nameContainer: {
    height: 80,
    alignSelf: 'stretch',
    justifyContent: 'center',
    alignItems: 'center',
  },
  statsContainer: {
    flex: 1,
    alignSelf: 'stretch',
    borderTopStartRadius: 20,
    borderTopEndRadius: 20,
    backgroundColor: Color.BLUE,
  },
  preventionContainer: {
    flex: 0.4,
    alignSelf: 'stretch',
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: Color.BLUE,
  },
})

export default CountryDetails
