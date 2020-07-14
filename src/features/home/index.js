import React from 'react'
import { View, StyleSheet } from 'react-native'
import CountryList from './components/countryList'
import IntroSection from './components/intro'
import { color } from '../../constants'

const Home = () => {
  return (
    <View style={styles.container}>
      <IntroSection containerStyle={styles.introContainer} />
      <CountryList containerStyle={styles.listContainer} />
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  introContainer: {
    flex: 1,
    alignSelf: 'stretch',
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: color.RED,
  },
  listContainer: {
    flex: 1,
    alignSelf: 'stretch',
  },
})

export default Home
