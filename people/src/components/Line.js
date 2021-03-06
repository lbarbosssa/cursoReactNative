import React from 'react'
import { View, Text, StyleSheet } from 'react-native'

const Line = ({ label = "", content = "-"}) => {
    return (
        <View style={styles.line} >
            <Text style={[
                styles.cell, 
                styles.label,
                label.length > 8 ? styles.longLabel : null
                ]} >{label}</Text>
            <Text style={[styles.cell, styles.content]} >{content}</Text>
        </View>
    )
}

const styles = StyleSheet.create({
    line: {
        flexDirection: 'row',
        paddingTop: 3,
        paddingBottom: 3,
    },
    label: {
        fontWeight: 'bold',
        flex: 1
    },
    longLabel: {
        fontSize: 11
    },
    cell: {
        fontSize: 16,
        paddingLeft: 5
    },
    content: {
        flex: 3
    }
})

export default Line