import React, { Component } from 'react';

import { View, Text, TextInput } from 'react-native';
import FormRow from '../components/FormRow'

export default class LoginPage extends Component {
  render() {
    return (
      <View>
        <FormRow>
          <TextInput></TextInput>
        </FormRow>
      </View>
    );
  }
}
