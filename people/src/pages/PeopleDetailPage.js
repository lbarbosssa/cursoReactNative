import React, { Component } from 'react'
import { View, Text, Image, StyleSheet } from 'react-native'


class PeopleDetailPage extends Component {
    render (){
        const { people } = this.props.navigation.state.params

        return (
            <View style={styles.container} >
                <Image 
                    source={{uri: people.picture.large}}
                    style={styles.avatar} />
                <View style={styles.detailContainer} >
                    <View style={styles.line} >
                        <Text style={[styles.cell, styles.textBold]} >Email:</Text>
                        <Text style={styles.cell} >{ people.email }</Text>
                    </View>
                    
                
                </View>

            </View>
        )
    }

}

const styles = StyleSheet.create({
    container: {
        padding: 15
    },
    avatar: {
       aspectRatio: 1,
       borderRadius: 300 
    },
    detailContainer: {
        backgroundColor: '#E2F9FF',
        marginTop: 20,
        elevation: 1,
        borderRadius: 5
    },
    line: {
        flexDirection: 'row',
        paddingTop: 3,
        paddingBottom: 3,
    },
    textBold: {
        fontWeight: 'bold'
    },
    cell: {
        fontSize: 18,
        paddingLeft: 5
    }
})

export default PeopleDetailPage