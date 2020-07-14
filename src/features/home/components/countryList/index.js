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
    marginHorizontal: '3%',
  },
})

export default CountryList
