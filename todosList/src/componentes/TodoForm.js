import React from "react";
import { View, Text, StyleSheet } from "react-native";

export default class TodoForm extends React.Component {
    render() {
        return (
            <View style={styles.container}>
                <Text>TodoForm!</Text>
            </View>
        )
    }
}

const styles = StyleSheet.create({
    container:{
        paddingTop: 50
    }
})