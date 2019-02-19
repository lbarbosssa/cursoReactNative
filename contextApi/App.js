import React, {Component} from 'react';
import { StyleSheet, Text, View} from 'react-native';
import { AppProvider } from './context/app-context';
import HomePage from './src/pages/Home';
import FavAnimal from './src/components/FavAnimal';

export default class App extends Component{
  render() {
    return (
      <AppProvider>
        <HomePage />
        <FavAnimal />
      </AppProvider>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F5FCFF',
  },
  welcome: {
    fontSize: 20,
    textAlign: 'center',
    margin: 10,
  },
});
