import React, { Component } from 'react';
import { View, ActivityIndicator, StyleSheet } from 'react-native';

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
    this.setState({ loading: true })
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

  renderPage() {
    if (this.state.loading) {
      return <ActivityIndicator size="large" color="#6ca2f7" />
    }
    return (
      <PeopleList peoples={this.state.peoples} onPressItem={pageParams => {
        this.props.navigation.navigate('PeopleDetail', pageParams)
      }} />
    )
  }


  render() {
    // this.props.navigation.navigate('PeopleDetail')
    return (
      <View style={styles.container} >
        {this.renderPage()}
      </View>
    )
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center'
  }
})