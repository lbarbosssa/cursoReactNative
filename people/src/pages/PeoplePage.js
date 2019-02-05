import React, { Component } from 'react';
import { View, ActivityIndicator } from 'react-native';

import PeopleList from '../components/PeopleList'

import axios from 'axios';



export default class PeoplePage extends Component {
  constructor(props) {
    super(props)

    this.state = {
      peoples: [],
      loading: false
    }
  }

  componentDidMount() {
    this.setState({loading: true})
    axios
      .get('https://randomuser.me/api?nat=br&results=100')
      .then(response => {
        const { results } = response.data
        this.setState({
          peoples: results,
          loading: false
        })
      })
  }

  renderLoading(){
    if (this.state.loading){
      return <ActivityIndicator size="large" color="#6ca2f7" />
    }
    return null
  }


  render() {
   // this.props.navigation.navigate('PeopleDetail')
   return (
     <View>
     {this.renderLoading()}
        <PeopleList peoples={this.state.peoples} onPressItem={pageParams => {
          this.props.navigation.navigate('PeopleDetail', pageParams)
        }} />
      </View>
    )
  }
}