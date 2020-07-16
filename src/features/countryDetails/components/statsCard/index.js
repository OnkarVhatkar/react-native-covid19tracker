import React from 'react'
import { View, Text, StyleSheet } from 'react-native'

const StatsCard = () => {
  return (
    <View style={styles.container}>
      <Text> StatsCard </Text>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
})

export default StatsCard
