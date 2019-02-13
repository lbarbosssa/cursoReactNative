import React, { Component } from 'react'
import { Text, View, ScrollView, FlatList } from 'react-native'

const alunos = [
    { id: 1, nome: 'João', nota: 7.9 },
    { id: 2, nome: 'Ana', nota: 7.4 },
    { id: 3, nome: 'Bia', nota: 8.5 },
    { id: 4, nome: 'Claudia', nota: 6.5 },
    { id: 5, nome: 'Roberto', nota: 9.4 },
    { id: 6, nome: 'Rafael', nota: 10.0 },
    { id: 7, nome: 'Guilherme', nota: 8.0 },
    { id: 8, nome: 'Pedro', nota: 9.0 },
    { id: 9, nome: 'Rafael', nota: 8.4 },
    { id: 10, nome: 'Lucas', nota: 10.0 },
    { id: 11, nome: 'João', nota: 7.9 },
    { id: 12, nome: 'Ana', nota: 7.4 },
    { id: 13, nome: 'Bia', nota: 8.5 },
    { id: 14, nome: 'Claudia', nota: 6.5 },
    { id: 15, nome: 'Roberto', nota: 9.4 },
    { id: 16, nome: 'Rafael', nota: 10.0 },
    { id: 17, nome: 'Guilherme', nota: 8.0 },
    { id: 18, nome: 'Pedro', nota: 9.0 },
    { id: 19, nome: 'Rafael', nota: 8.4 },
    { id: 20, nome: 'Lucas', nota: 10.0 },
]

const itemEstilo = {
    paddingHorizontal: 15,
    height: 50,
    backgroundColor: '#DDD',
    borderWidth: 0.5,
    borderColor: '#222',

    //Flex
    //justifyContent: 'center'
    alignItems: 'center',
    flexDirection: 'row',
    justifyContent: 'space-between'
}

export const Aluno = props =>
    <View style={itemEstilo}>
        <Text>Nome: {props.nome}</Text>
        <Text style={{ fontWeight: 'bold' }}>Nota: {props.nota}</Text>
    </View>

export default props => {
    const renderItem = ({ item }) => {
        return <Aluno {...item} />
    }

    return (
        <ScrollView>
            <FlatList data={alunos} renderItem={renderItem}
                keyExtractor={(_, index) => index.toString()} />
        </ScrollView>
    )
}