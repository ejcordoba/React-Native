import React from 'react'
import { SafeAreaView } from 'react-native-safe-area-context'
import { HelloWorldScreen } from './src/presentation/screens/HelloWorldScreen'
import { CounterScreen } from './src/presentation/screens/CounterScreen'
import { StyleSheet } from 'react-native'

export const App = () => {
  return (
    <SafeAreaView style={{flex:1}}>
        {/* <HelloWorldScreen name='Eduardo Córdoba'/> */}
        <CounterScreen/>
    </SafeAreaView>
  )
}
