import React from 'react'
import { View, StyleSheet } from 'react-native'
import StatsCard from '../statsCard'

const StatsContainer = (props) => {
  const { containerStyle } = props
  return (
    <View style={containerStyle}>
      <View style={styles.horizontalContainer}>
        <StatsCard />
        <StatsCard />
      </View>
      <View style={styles.horizontalContainer}>
        <StatsCard />
        <StatsCard />
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
