import React from 'react'
import { View, Text, StyleSheet } from 'react-native'

const ListHeader = () => {
  return (
    <View style={styles.container}>
      <Text> List by country </Text>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    height: 50,
    justifyContent: 'flex-start',
  },
})

export default ListHeader
