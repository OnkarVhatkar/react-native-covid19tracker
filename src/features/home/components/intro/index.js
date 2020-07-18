import React from 'react'
import { View, Text, StyleSheet, Image } from 'react-native'
import { FontFamily, FontSizes, Color } from '../../../../constants'
const IntroSection = (props) => {
  const { containerStyle, worldCount, worldCountChange, loading } = props
  let totalCount = loading ? '' : worldCountChange
  return (
    <View style={containerStyle}>
      <View style={styles.appMetaContainer}>
        <Text style={styles.appName}> COVID-19 Tracker</Text>
      </View>
      <View style={styles.worldCountContainer}>
        <View style={styles.countContainer}>
          <Text style={styles.world}> Total active cases </Text>
          <Text style={styles.worldCount}> {worldCount} </Text>
          <Text style={styles.worldCountChange}>
            {totalCount.length > 0 ? `(${totalCount})` : ''}
          </Text>
        </View>
        <View style={styles.imgContainer}>
          <Image source={require('../../../../assets/sick-person.png')} style={styles.sickImage} />
        </View>
      </View>
      <View style={styles.precautionContainer}>
        <Text style={styles.precaution}>Stay Home Stay Safe!!</Text>
      </View>
    </View>
  )
}

const styles = StyleSheet.create({
  worldCountContainer: {
    flex: 1,
    flexDirection: 'row-reverse',
  },
  countContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  imgContainer: {
    flex: 1,
    alignSelf: 'flex-start',
  },
  precautionContainer: {
    padding: 30,
  },
  precaution: {
    fontFamily: FontFamily.FontFamily_Bold,
    fontSize: FontSizes.LARGE,
    letterSpacing: 1,
    textAlign: 'center',
    color: Color.WHITE,
  },
  appName: {
    fontFamily: FontFamily.FontFamily_Bold,
    fontSize: 36,
    color: Color.WHITE,
    padding: 30,
  },
  worldCount: {
    fontFamily: FontFamily.FontFamily_Bold,
    fontSize: FontSizes.EXTREME_LARGE,
    letterSpacing: 1,
    textAlign: 'center',
    color: Color.WHITE,
  },
  world: {
    fontFamily: FontFamily.FontFamily_Bold,
    fontSize: FontSizes.EXTREME_LARGE,
    letterSpacing: 1,
    color: Color.WHITE,
    textAlign: 'center',
    marginBottom: 10,
  },
  worldCountChange: {
    fontFamily: FontFamily.FontFamily_Bold,
    fontSize: FontSizes.LARGE,
    letterSpacing: 1,
    color: Color.WHITE,
    textAlign: 'center',
  },
  sickImage: {
    height: 300,
    width: 250,
  },
})

export default IntroSection
