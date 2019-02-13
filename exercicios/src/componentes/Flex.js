import React, { Component } from "react"
import { View, StyleSheet} from "react-native"

const styles = StyleSheet.create({
    container:{
        height: '100%'
    },
    superior: {
        flex: 1,
        backgroundColor: '#bdf9ed',
        alignItems: 'center',
        justifyContent: 'center'
    },
    central: {
        flex: 2,
        flexDirection: 'row',
        backgroundColor: '#f2f9ed',
        alignItems: 'center',
        justifyContent: 'space-between',
        paddingHorizontal: 15
    },
    inferior: {
        flex: 1,
        backgroundColor: '#bdf9c4',
        alignItems: 'center',
        justifyContent: 'center'
    },
    circulo: {
        width: 100,
        height: 100,
        backgroundColor: '#f47f61',
        borderRadius: 50
    }
})

const Circulo = props => <View style={styles.circulo}></View>

export default props => {
    return (
        <View style={styles.container}>
            <View style={styles.superior}>
                <Circulo />
            </View>

            <View style={styles.central}>
                <Circulo />
                <Circulo />
                <Circulo />
            </View>

            <View style={styles.inferior}>
                <Circulo />
            </View>

        </View>
    )
}