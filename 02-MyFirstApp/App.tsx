import React from 'react'
import { SafeAreaView } from 'react-native-safe-area-context'
import { HelloWorldScreen } from './src/presentation/screens/HelloWorldScreen'
import { CounterScreen } from './src/presentation/screens/CounterScreen'
import { StyleSheet } from 'react-native'
import { PaperProvider } from 'react-native-paper'
import { CounterM3Screen } from './src/presentation/screens/CounterM3';

export const App = () => {
  return (
    <PaperProvider>
        <SafeAreaView style={{flex:1}}>
            {/* <HelloWorldScreen name='Eduardo Córdoba'/> */}
            {/* <CounterScreen/> */}
            <CounterM3Screen/>
        </SafeAreaView>
    </PaperProvider>
  )
}
