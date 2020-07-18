import React from 'react'
import { View, StyleSheet } from 'react-native'
import StatsCard from '../statsCard'
import { Color } from '../../../../constants'

const StatsContainer = (props) => {
  const { containerStyle, stats } = props
  return (
    <View style={containerStyle}>
      <View style={styles.horizontalContainer}>
        <StatsCard
          count={stats['Total Cases_text'].length > 0 ? stats['Total Cases_text'] : 'N.A'}
          cases={'Infected'}
          statsColor={styles.confirmedCasesColor}
        />
        <StatsCard
          count={stats['Active Cases_text'].length > 0 ? stats['Active Cases_text'] : 'N.A'}
          cases={'Active'}
          statsColor={styles.activeCasesColor}
        />
      </View>
      <View style={styles.horizontalContainer}>
        <StatsCard
          count={stats['Total Recovered_text'].length > 0 ? stats['Total Recovered_text'] : 'N.A'}
          cases={'Recovered'}
          statsColor={styles.reoveredCasesColor}
        />
        <StatsCard
          count={stats['Total Deaths_text'].length > 0 ? stats['Total Deaths_text'] : 'N.A'}
          cases={'Deaths'}
          statsColor={styles.deathCasesColor}
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
  confirmedCasesColor: {
    color: Color.CONFIRMED_CASES,
  },
  activeCasesColor: {
    color: Color.ACTIVE_CASES,
  },
  reoveredCasesColor: {
    color: Color.RECOVERED_CASES,
  },
  deathCasesColor: {
    color: Color.DEATH_CASES,
  },
})

export default StatsContainer
