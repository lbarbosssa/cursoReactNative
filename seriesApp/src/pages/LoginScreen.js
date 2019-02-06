import React, { Component } from 'react';

import { View, Text, TextInput, StyleSheet } from 'react-native';
import FormRow from '../components/FormRow'

export default class LoginPage extends Component {
  render() {
    return (
      <View>
        <FormRow>
          <TextInput
          style={styles.input}
          placeholder="user@email.com" />
        </FormRow>
        <FormRow>
          <TextInput
          style={styles.input}
          placeholder="Senha super segura" 
          secureTextEntry={true}/>
        </FormRow>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  input:{
    paddingLeft: 5,
    paddingRight: 5,
    paddingBottom: 5,
  }
})
