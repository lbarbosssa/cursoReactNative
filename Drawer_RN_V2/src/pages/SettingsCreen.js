import React, { Component } from "react";
import { StyleSheet, Text, View } from "react-native";
import {
  Icon,
  Header,
  Left,
  Button,
  Container,
  Right,
  Body,
  Title,
  StyleProvider
} from "native-base";
import Info from "../components/Info";

export default class SettingsScreen extends Component {
  render() {
    return (
      <Container>
        <Header>
          <Left>
            <Button transparent>
              <Icon
                name="arrow-back"
                onPress={() => this.props.navigation.goBack()}
              />
            </Button>
          </Left>
          <Body>
            <Title>Settings</Title>
          </Body>
          <Right />
        </Header>
        <Info texto="Settings Page" />
      </Container>
    );
  }
}
