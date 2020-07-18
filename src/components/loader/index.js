import React from 'react'
import { View, ActivityIndicator, StyleSheet } from 'react-native'
import { Color } from '../../constants'

const Loader = (props) => {
  const { size } = props
  return (
    <View style={styles.container}>
      <ActivityIndicator size={size} color={Color.BLUE} />
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignSelf: 'center',
    justifyContent: 'center',
  },
})

export default Loader
