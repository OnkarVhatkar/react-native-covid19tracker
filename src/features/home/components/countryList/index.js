import React, { useState, useEffect } from 'react'
import { View, FlatList, StyleSheet, Text } from 'react-native'
import CountryCard from '../countryCard'
import ListHeader from '../listHeader'
import * as API from '../../../../services'

const renderCountryCard = ({ item }) => <CountryCard stats={item} />

const seperator = () => <View style={styles.seperator} />

const List = (covidData) => {
  return (
    <FlatList
      style={styles.listContainer}
      data={covidData}
      renderItem={renderCountryCard}
      horizontal
      keyExtractor={(item) => item.Country_text}
      ItemSeparatorComponent={seperator}
    />
  )
}

const ErrorComponent = () => {
  return <Text> Something went wrong</Text>
}

const CountryList = (props) => {
  const [covidData, setCovidData] = useState({})
  const [apiErr, setApiErr] = useState(null)
  const { containerStyle } = props

  useEffect(() => {
    API.getCovidData()
      .then((res) => {
        setCovidData(res)
        setApiErr(null)
      })
      .catch((err) => setApiErr('Something went wrong'))
  }, [])

  return (
    <View style={containerStyle}>
      <ListHeader />
      {apiErr ? ErrorComponent : List(covidData)}
    </View>
  )
}

const styles = StyleSheet.create({
  listContainer: {
    marginStart: '3%',
  },
  seperator: {
    width: 20,
  },
})

export default CountryList
