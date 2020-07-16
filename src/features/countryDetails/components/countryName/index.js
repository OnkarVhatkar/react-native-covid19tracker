import React from 'react'
import { View, Text } from 'react-native'

const CountryName = (props) => {
  const { containerStyle, name } = props
  return (
    <View style={containerStyle}>
      <Text>{name}</Text>
    </View>
  )
}

export default CountryName
