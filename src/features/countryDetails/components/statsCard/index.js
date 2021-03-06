import React from 'react'
import { View, Text, StyleSheet } from 'react-native'
import { FontFamily, FontSizes } from '../../../../constants'

const StatsCard = (props) => {
  const { count, cases, statsColor, change } = props
  return (
    <View style={styles.container}>
      <Text style={[styles.caseType, statsColor]}>{cases}</Text>
      <Text style={[styles.statsCount, statsColor]}>{count}</Text>
      <Text style={[styles.changeCount, statsColor]}>{change ? `(${change})` : '(N.A.)'}</Text>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    width: 150,
    height: 150,
    flexDirection: 'column',
    justifyContent: 'flex-start',
    alignItems: 'center',
    backgroundColor: 'white',
    borderRadius: 15,
    paddingTop: 30,
    shadowOffset: {
      width: 0,
      height: 5,
    },
    shadowOpacity: 0.36,
    shadowRadius: 6.68,
    elevation: 11,
  },
  caseType: {
    fontFamily: FontFamily.FontFamily,
    fontSize: FontSizes.SMALL,
    letterSpacing: 1,
  },
  statsCount: {
    fontFamily: FontFamily.FontFamily_Bold,
    fontSize: FontSizes.LARGE,
    marginTop: 30,
    letterSpacing: 1,
  },
  changeCount: {
    fontFamily: FontFamily.FontFamily,
    fontSize: FontSizes.MEDIUM,
    marginTop: 10,
    letterSpacing: 1,
  },
})

export default StatsCard
