import React, { useState } from 'react'
import { View, StyleSheet } from 'react-native'
import CountryList from './components/countryList'
import IntroSection from './components/intro'
import { Color } from '../../constants'

const Home = () => {
  const [worldCount, setWorldCount] = useState(0)
  const [worldCountChange, setWorldCountChange] = useState(0)
  const [loading, setloading] = useState(true)

  const updateWorldCount = (count, change) => {
    setloading(false)
    setWorldCount(count)
    setWorldCountChange(change)
  }

  return (
    <View style={styles.container}>
      <IntroSection
        loading={loading}
        worldCount={worldCount}
        worldCountChange={worldCountChange}
        containerStyle={styles.introContainer}
      />
      <CountryList updateWorldCount={updateWorldCount} containerStyle={styles.listContainer} />
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
    backgroundColor: Color.BLUE,
  },
  listContainer: {
    flex: 1,
    alignSelf: 'stretch',
    backgroundColor: Color.GREY_BACKDROP,
  },
})

export default Home
