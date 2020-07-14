import React from 'react'
import { View, Text } from 'react-native'

const Home = () => {
  return (
    <View style={styles.container}>
      <Text>Home</Text>
    </View>
  )
}

const styles = {
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
}
export default Home
