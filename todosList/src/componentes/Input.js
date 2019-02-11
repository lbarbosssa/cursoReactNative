import React from "react";
import { StyleSheet, TextInput } from "react-native";

const Input = ({ onChangeText, value }) => (
    <TextInput 
        style={styles.input}
        onChangeText={onChangeText}
        value={value}
    />
)

const styles = StyleSheet.create({
    input:{
        paddingLeft: 15,
        paddingTop: 15
    }
})

export default Input