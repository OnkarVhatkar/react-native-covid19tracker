import React from 'react'
import { View, FlatList, StyleSheet } from 'react-native'
import CountryCard from '../countryCard'
import ListHeader from '../listHeader'

const data = [
  {
    id: 1,
    country: 'India',
  },
  {
    id: 2,
    country: 'Italy',
  },
  {
    id: 3,
    country: 'France',
  },
]

const renderCountryCard = ({ item }) => <CountryCard country={item} />

const seperator = () => <View style={styles.seperator} />

const CountryList = (props) => {
  const { containerStyle } = props
  return (
    <View style={containerStyle}>
      <ListHeader />
      <FlatList
        style={styles.listContainer}
        data={data}
        renderItem={renderCountryCard}
        horizontal
        keyExtractor={(item) => item.id.toString()}
        ItemSeparatorComponent={seperator}
      />
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  listContainer: {
    marginStart: '3%',
  },
  seperator: {
    width: 20,
  },
})

export default CountryList
