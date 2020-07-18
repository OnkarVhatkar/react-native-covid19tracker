import React, { useState, useEffect } from 'react'
import { View, FlatList, StyleSheet, Text } from 'react-native'
import CountryCard from '../countryCard'
import ListHeader from '../listHeader'
import * as API from '../../../../services'
import Loader from '../../../../components/loader'

const renderCountryCard = ({ item }) =>
  item.Country_text !== 'World' ? <CountryCard stats={item} /> : null

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
  const [loading, setLoading] = useState(true)
  const { containerStyle, updateWorldCount } = props

  useEffect(() => {
    setLoading(true)
    API.getCovidData()
      .then((res) => {
        setCovidData(res)
        setApiErr(null)
        setLoading(false)
        updateWorldCount(res[0]['Total Cases_text'], res[0]['New Cases_text'])
      })
      .catch(() => {
        setApiErr('Something went wrong')
        setLoading(false)
      })
  }, [updateWorldCount])

  if (!loading) {
    return (
      <View style={containerStyle}>
        <ListHeader />
        {apiErr ? ErrorComponent() : List(covidData)}
      </View>
    )
  } else {
    return (
      <View style={containerStyle}>
        <Loader size={'small'} />
      </View>
    )
  }
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
