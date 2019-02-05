import React from 'react'
import { ScrollView, Text, StyleSheet } from 'react-native'

import PeopleListItem from './PeopleListItem'

const PeopleList = props => {
    const { peoples, onPressItem } = props

    const items = peoples.map(people => {
        return <PeopleListItem 
        key={people.name.first} 
        people={people} 
        navigateToPeopleDetail={onPressItem} />
    })

    return (
        <ScrollView style={styles.container}>
            { items }
        </ScrollView>
    )
}

const styles = StyleSheet.create({
    container: {
        backgroundColor: '#ededed',

    }
})

export default PeopleList