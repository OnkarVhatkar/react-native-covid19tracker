import React from 'react'
import { NavigationContainer } from '@react-navigation/native'
import { createStackNavigator } from '@react-navigation/stack'
import Home from '../../src/features/home'
import { ScreenNames } from '../constants'

const Stack = createStackNavigator()

const Navigator = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name={ScreenNames.HomeScreen} component={Home} />
      </Stack.Navigator>
    </NavigationContainer>
  )
}

export default Navigator
