import React from 'react'

import { StyleSheet, View } from 'react-native'

const FormRow = props => {
    const { children } = props
    return (
        <View style={styles.container}>
            { children }
        </View>
    )
}

const styles = StyleSheet.create({
    container:{
        padding: 10,
        backgroundColor: '#f7f7f7',
        marginTop: 5,
        marginBottom: 5,
        elevation: 4
    }
})

export default FormRow