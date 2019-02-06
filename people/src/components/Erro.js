import React, { Component } from "react";
import { View, StyleSheet, Text } from "react-native";

const Erro = props => {
  return (
    <View style={styles.container}>
      <Text style={styles.text}>Oh não, algo deu errado =(</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    alignSelf: "center",
    backgroundColor: "red",
    borderRadius: 10,
    elevation: 15,
    opacity: 0.6,
    shadowOffset: {
      width: -5,
      height: 5
    },
    shadowColor: "black",
    shadowOpacity: 0.5,
    
  },
  text: {
    color: "white",
    fontSize: 18,
    padding: 25
  }
});

export default Erro;
