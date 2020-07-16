import React from 'react'
import { View, StyleSheet } from 'react-native'
import StatsCard from '../statsCard'

const StatsContainer = (props) => {
  const { containerStyle, stats } = props
  return (
    <View style={containerStyle}>
      <View style={styles.horizontalContainer}>
        <StatsCard
          count={stats['Total Cases_text'].length > 0 ? stats['Total Cases_text'] : 'N.A'}
        />
        <StatsCard
          count={stats['Active Cases_text'].length > 0 ? stats['Active Cases_text'] : 'N.A'}
        />
      </View>
      <View style={styles.horizontalContainer}>
        <StatsCard
          count={stats['Total Recovered_text'].length > 0 ? stats['Total Recovered_text'] : 'N.A'}
        />
        <StatsCard
          count={stats['Total Deaths_text'].length > 0 ? stats['Total Deaths_text'] : 'N.A'}
        />
      </View>
    </View>
  )
}

const styles = StyleSheet.create({
  horizontalContainer: {
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'space-around',
    alignItems: 'center',
  },
})

export default StatsContainer
