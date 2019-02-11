import React from "react";
import { View, StyleSheet, Button } from "react-native";
import Input from "./Input";

export default class TodoForm extends React.Component {
    render() {
        return (
           <View style={styles.formContainer}>
                <View style={styles.inputContainer}>
                    <Input />
                </View>
                <View style={styles.buttonContainer}>
                    <Button 
                        onPress={() => console.log('me apertaram!!!!')}
                        title="Add"
                    />
                </View>
            </View>
        )
    }
}

const styles = StyleSheet.create({
    formContainer:{
        flexDirection: 'row'
    },
    inputContainer: {
        flex: 4
    },
    buttonContainer: {
        flex: 1
    }
})