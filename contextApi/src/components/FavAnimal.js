import React from "react";
import { StyleSheet, Text, View } from "react-native";
import { AppConsumer } from "../../context/app-context";

export default props => {
  return (
    <AppConsumer>
      {context => (
        <View style={styles.container}>
            {
                context.anterior
                ? <Text style={styles.text}>Anterior: {context.anterior}</Text>
                : null
            }        
          
        </View>
      )}
    </AppConsumer>
  );
};

const styles = StyleSheet.create({
  container: {
    justifyContent: "flex-end",
    alignItems: "center",
    backgroundColor: "#F5FCFF"
  },
  text: {
    textAlign: "center",
    paddingBottom: 20
  }
});
