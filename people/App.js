import React, {Component} from 'react';
import { StyleSheet, Text, View} from 'react-native';

import Header from './src/components/Header'



export default class App extends Component {
  renderList() {
    const names = [
      'eddie Van Halen',
      'Jimi Hendrix',
      'Chimbinha',
      'Steve Vai'
    ]

    const textElemntes = names.map((name, index) => {
      return <Text key={index}>{name}</Text>
    })

    return textElemntes 
    
  }

  render (){
    return (
      <View>
        <Header title="Pessoas!"/>
        {this.renderList()}
      </View>
    )
  }
}