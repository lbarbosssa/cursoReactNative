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
  Title
} from "native-base";
import Info from "../components/Info";

export default class HomeScreen extends Component {
  render() {
    return (
      <Container>
        
        <Header>
          <Left>
            <Button transparent>
              <Icon
                name="menu"
                onPress={() => this.props.navigation.openDrawer()}
              />
            </Button>
          </Left>
          <Body>
            <Title>Home</Title>
          </Body>
          <Right />
        </Header>
        <Info texto="Home Page" />
      </Container>
    );
  }
}
