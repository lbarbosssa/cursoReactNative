import React, { Component } from 'react';

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

  onChangeHandler(field, value){
    this.setState({
      [field]: value
    })
  }

  tryLogin(){
    //Aqui podemos executar uma validação, ou enviar um user para api e etc
  }

  render() {
    return (
      <View>
        <FormRow>
          <TextInput
            style={styles.input}
            placeholder="user@email.com"
            value={this.state.mail}
            onChangeText={value => this.onChangeHandler('mail', value)} />
        </FormRow>
        <FormRow>
          <TextInput
            style={styles.input}
            placeholder="Senha super segura"
            value={this.state.password}
            onChangeText={value => this.onChangeHandler('password', value)}
            secureTextEntry={true} />
        </FormRow>

        <Button
        title="Entrar"
        onPress={() => this.tryLogin()} />

      </View>
    );
  }
}

const styles = StyleSheet.create({
  input: {
    paddingLeft: 5,
    paddingRight: 5,
    paddingBottom: 5,
  }
})
