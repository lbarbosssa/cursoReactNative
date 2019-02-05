import React, { Component } from 'react';
import { View } from 'react-native';

import Header from '../components/Header'
import PeopleList from '../components/PeopleList'

import axios from 'axios';



export default class PeoplePage extends Component {
  constructor(props) {
    super(props)

    this.state = {
      peoples: []
    }
  }

  componentDidMount() {
    axios
      .get('https://randomuser.me/api?nat=br&results=5')
      .then(response => {
        const { results } = response.data
        this.setState({
          peoples: results
        })
      })
  }


  render() {
    return (
      <View>
        <Header title="Pessoas!" />
        <PeopleList peoples={this.state.peoples} />
      </View>
    )
  }
}