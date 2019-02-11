import React from "react";
import { View, Text, StyleSheet } from "react-native";
import Input from "./Input";

export default class TodoForm extends React.Component {
    render() {
        return (
           <View style={styles.container}>
                <View>
                    <Input />
                </View>
                <View>
                    {/* Button */}
                </View>
            </View>
        )
    }
}

const styles = StyleSheet.create({
    container:{
        
    }
})