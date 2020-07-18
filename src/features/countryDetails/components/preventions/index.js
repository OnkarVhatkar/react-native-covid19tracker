import React, { useEffect, useState } from 'react'
import { View, Text, StyleSheet } from 'react-native'
import { Precautions, Color } from '../../../../constants'
import { FontFamily, FontSizes } from '../../../../constants'

const Preventions = (props) => {
  const { containerStyle } = props
  const [precaution, setPrecaution] = useState('')
  useEffect(() => {
    const timer = setInterval(() => {
      const index = Math.floor(Math.random() * (Precautions.length - 0) + 0)
      setPrecaution(Precautions[index])
    }, 2000)
    return () => clearTimeout(timer)
  }, [])

  return (
    <View style={containerStyle}>
      <Text style={styles.precautionText}> {precaution} </Text>
    </View>
  )
}

const styles = StyleSheet.create({
  precautionText: {
    fontFamily: FontFamily.FontFamily_Bold,
    fontSize: FontSizes.SMALL,
    letterSpacing: 1,
    color: Color.WHITE,
  },
})

export default Preventions
