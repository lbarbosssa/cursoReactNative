import React, { Component } from 'react';

import firebase from '@firebase/app'
import'@firebase/auth'

import { View, Text, TextInput, StyleSheet, Button, Alert } from 'react-native';
import FormRow from '../components/FormRow'



export default class LoginPage extends Component {
  constructor(props) {
    super(props)

    this.state = {
      mail: '',
      password: ''
    }

  }

  componentDidMount() {
    var config = {
      apiKey: "AIzaSyBncTRkbUCstS9hePv2XrM15lfEHqj-Sq0",
      authDomain: "series-99b44.firebaseapp.com",
      databaseURL: "https://series-99b44.firebaseio.com",
      projectId: "series-99b44",
      storageBucket: "series-99b44.appspot.com",
      messagingSenderId: "1019745143315",
      
    };
    firebase.initializeApp(config);
    
    
  }

  onChangeHandler(field, value) {
    this.setState({
      [field]: value
    })
  }

  tryLogin() {
    //Aqui podemos executar uma validação, ou enviar um user para api e etc

    firebase
    .auth()
    .signInWithEmailAndPassword('admin@email.com', '123456')
      .then(user => {
        
      }).catch(error => {
        
    }) 
  }

  render() {
    return (
      <View style={styles.container}>
        <FormRow first>
          <TextInput
            style={styles.input}
            placeholder="user@email.com"
            value={this.state.mail}
            onChangeText={value => this.onChangeHandler('mail', value)} />
        </FormRow>

        <FormRow last>
          <TextInput
            style={styles.input}
            placeholder="Senha super segura"
            value={this.state.password}
            onChangeText={value => this.onChangeHandler('password', value)}
            secureTextEntry />
        </FormRow>

        <Button
          title="Entrar"
          onPress={() => this.tryLogin()} />

      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    paddingRight: 10,
    paddingLeft: 10
  },
  input: {
    paddingLeft: 5,
    paddingRight: 5,
    paddingBottom: 5,
  }
})
