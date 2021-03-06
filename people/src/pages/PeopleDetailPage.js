import React, { Component } from "react";
import { View, Text, Image, StyleSheet, Platform } from "react-native";
import Line from "../components/Line";

class PeopleDetailPage extends Component {
  render() {
    const { people } = this.props.navigation.state.params;

    return (
      <View style={styles.container}>
        <Image source={{ uri: people.picture.large }} style={styles.avatar} />
        <View style={styles.detailContainer}>
          <Line label="Email:" content={people.email} />
          <Line label="Cidade:" content={people.location.city} />
          <Line label="Estado:" content={people.location.state} />
          <Line label="Tel:" content={people.phone} />
          <Line label="Cel:" content={people.cell} />
          <Line label="Nacionalidade:" content={people.nat} />
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    padding: 15
  },
  avatar: {
    aspectRatio: 1,
    borderRadius: Platform.OS === "ios" ? 170 : 300
  },
  detailContainer: {
    backgroundColor: "#E2F9FF",
    marginTop: 20,
    borderRadius: 8,
    elevation: 15,
    shadowOffset: {
      width: -5,
      height: 5
    },
    shadowColor: "black",
    shadowOpacity: 0.2
  }
});

export default PeopleDetailPage;
