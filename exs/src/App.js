import React, {Component} from 'react'
import { View, Text, StyleSheet } from 'react-native'

import Simples from './componentes/Simples'
import ParImpar from './componentes/Pareimpar'
import { Inverter, MegaSena } from './componentes/Multi';

export default class App extends Component {
  render() {
    return (
      <View style={styles.container}>
        <Text style={styles.f20}>App!</Text>
        <Simples texto="Bem Simples!"/>
        <ParImpar numero={2} />
        <Inverter texto='React Native!' />
        <MegaSena numeros={7} />
      </View>
    )
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F5FCFF',
  },
  f20: {
    fontSize: 40
  }
})
