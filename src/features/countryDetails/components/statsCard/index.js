import React from 'react'
import { View, Text, StyleSheet } from 'react-native'

const StatsCard = (props) => {
  const { count } = props
  return (
    <View style={styles.container}>
      <Text>{count}</Text>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    width: 150,
    height: 150,
    borderWidth: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
})

export default StatsCard
