import React, { Component } from "react";
import { StyleSheet, Text, View, TextInput, Button } from "react-native";
import { AppConsumer } from "../../context/app-context";
import FavAnimal from "../components/FavAnimal";

export default class HomePage extends Component {
    constructor(props){
        super(props)
        this.state = {
            favoriteAnimal: '',
        }
    }

  render() {
    return (
      <AppConsumer>
        {context => (
          <View style={styles.container}>
            <Text>Qual o seu animal favorito?</Text>
            <Text>{context.favoriteAnimal}</Text>

            <TextInput 
                style={{ width: '80%', height: 40, borderWidth: 1, borderRadius: 10}}
                value={this.state.setFavoriteAnimal}
                onChangeText={(text) => {this.setState({favoriteAnimal: text})}}
            />
            
            <Button 
                title='Setar animal favorito'
                onPress={() => {
                    context.setFavoriteAnimal(this.state.favoriteAnimal)
                }}
            />

          </View>
        )}
      </AppConsumer>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#F5FCFF"
  },
  welcome: {
    fontSize: 20,
    textAlign: "center",
    margin: 10
  }
});
