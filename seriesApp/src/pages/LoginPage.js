import React, { Component } from 'react';

import firebase from '@firebase/app'
import '@firebase/auth'

import {
  View,
  Text,
  TextInput,
  StyleSheet,
  Button,
  Alert,
  ActivityIndicator
} from 'react-native';
import FormRow from '../components/FormRow'



export default class LoginPage extends Component {
  constructor(props) {
    super(props)

    this.state = {
      mail: '',
      password: '',
      isLoading: false,
      message: ''
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
    this.setState({ isLoading: true, message: '' })
    const { mail, password } = this.state

    const loginUserSucess = user => {
      this.setState({ message: 'Sucesso!' })
    }

    const loginUserFailed = error => {
      this.getMessageByErrrorCode(error.code)
    }

    firebase
      .auth()
      .signInWithEmailAndPassword(mail, password)
      .then(loginUserSucess).catch(error => {
        if (error.code === 'auth/user-not-found') {
          Alert.alert(
            'usuário, não encontrado',
            'Deseja criar um cadastro com as infromações inseridas?',
            [
              {
                text: 'Não',
                onPress: () => { },
                style: 'cancel' //IOS
              },
              {
                text: 'Sim',
                onPress: () => {
                  firebase
                    .auth()
                    .createUserWithEmailAndPassword(mail, password)
                    .then(loginUserSucess)
                    .catch(loginUserFailed)
                }
              }
            ],
            { cancelable: false }
          )
          return
        }
        loginUserFailed(error)
      }).then(() => this.setState({ isLoading: false }))
  }

  getMessageByErrrorCode(errorCode) {
    switch (errorCode) {
      case 'auth/wrong-password':
        return 'Senha incorreta'
      case 'auth/user-not-found':
        return 'Usuário não encontrado'
      default:
        return 'Error desconhecido'

    }
  }

  renderMessage() {
    const { message } = this.state;
    if (!message) {
      return null
    }

    return (
      <View>
        <Text>{message}</Text>
      </View>
    )
  }

  renderButton() {
    if (this.state.isLoading) {
      return <ActivityIndicator size="large" color="#6ca2f7" />
    }
    return (
      <Button
        title="Entrar"
        onPress={() => this.tryLogin()} />
    )
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

        {this.renderButton()}
        {this.renderMessage()}


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
