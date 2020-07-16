import React from 'react'
import { View, StyleSheet } from 'react-native'
import CountryName from './components/countryName'
import { Color } from '../../constants'
import { useRoute } from '@react-navigation/native'
import StatsContainer from './components/stats'

const CountryDetails = () => {
  const route = useRoute()
  const { params } = route
  const { stats } = params
  const { Country_text } = stats
  return (
    <View style={styles.container}>
      <CountryName containerStyle={styles.nameContainer} name={Country_text} />
      <StatsContainer containerStyle={styles.statsContainer} stats={stats} />
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: Color.GREY_BACKDROP,
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
  },
})

export default CountryDetails
