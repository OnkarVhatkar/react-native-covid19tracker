import React from 'react'
import { Text, StyleSheet } from 'react-native'
import { Color, Custom, ScreenNames } from '../../../../constants'
import { TouchableOpacity } from 'react-native-gesture-handler'
import { useNavigation } from '@react-navigation/native'

const CountryCard = (props) => {
  const { stats } = props
  const newCases = stats['New Cases_text']
  const navigation = useNavigation()

  return (
    <TouchableOpacity
      activeOpacity={Custom.ACTIVE_OPACITY}
      style={styles.container}
      onPress={() =>
        navigation.navigate(ScreenNames.CountryDetails, {
          stats: stats,
        })
      }
    >
      <Text style={styles.country}> {stats.Country_text} </Text>
      <Text style={styles.newCases}> {`(${newCases.length > 0 ? newCases : 'N.A'})`} </Text>
    </TouchableOpacity>
  )
}

const styles = StyleSheet.create({
  container: {
    // flex: 1,
    height: 220,
    width: 165,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'white',
    borderRadius: 15,
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 1,
    },
    shadowOpacity: 0.2,
    shadowRadius: 1.41,

    elevation: 2,
  },
  country: {
    textAlign: 'center',
    color: Color.TEXT_BLACK,
    fontWeight: '600',
    letterSpacing: 1,
  },
  newCases: {
    color: Color.TEXT_BLACK,
    fontWeight: '500',
  },
})

export default CountryCard
