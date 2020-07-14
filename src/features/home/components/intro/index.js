import React from 'react'
import { View, Text } from 'react-native'

const IntroSection = (props) => {
  const { containerStyle } = props
  return (
    <View style={containerStyle}>
      <Text> IntroSection </Text>
    </View>
  )
}

// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     justifyContent: 'center',
//     alignItems: 'center',
//   },
// })

export default IntroSection
