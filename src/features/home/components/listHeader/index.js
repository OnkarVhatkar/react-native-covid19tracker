import React from 'react'
import { View, Text, StyleSheet } from 'react-native'
import { FontSizes, Color } from '../../../../constants'

const ListHeader = () => {
  return (
    <View style={styles.container}>
      <Text style={styles.header}> List by country </Text>
      {/* <Text style={styles.viewAll}> Show All </Text> */}
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    padding: 10,
    flexDirection: 'row',
  },
  header: {
    flex: 4,
    fontSize: FontSizes.EXTREME_LARGE,
    fontWeight: 'bold',
    color: Color.BLUE,
  },
  viewAll: {
    flex: 1,
    textAlign: 'right',
    alignSelf: 'center',
    color: Color.TEXT_BLACK_LIGHT,
    fontWeight: '600',
  },
})

export default ListHeader
