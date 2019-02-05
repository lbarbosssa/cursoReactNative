import React, { Component } from 'react';
import { View, StyleSheet, Text } from 'react-native';

const Erro = props =>{
    return (
        <View style={styles.container}>
            <Text style={styles.text}>Oh não, algo deu errado =(</Text>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        alignSelf: 'center'
    },
    text: {
       color: 'white',
       fontSize: 18,
       backgroundColor: 'red',
       padding: 25,
       borderRadius: 10,
       opacity: 0.7,
       elevation: 12

    }
})

export default Erro