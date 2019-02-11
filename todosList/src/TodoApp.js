import React from "react";
import { View, Text, StyleSheet } from "react-native";
import TodoForm from "./componentes/TodoForm";


export default class TodoApp extends React.Component {
    render() {
        return (
            <View style={styles.container}>
                <TodoForm />
            </View>
        )
    }
}

const styles = StyleSheet.create({
    container:{
        paddingTop: 50
    }
})