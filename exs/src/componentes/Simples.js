import React from 'react'
import { Text } from 'react-native'

/*
export default function (props) {
      return <Text>{props.texto}</Text>
}

  export default props => <Text>Arrow 1: {props.texto}</Text>
*/
//outra forma de devolvar o componente é com arrow function e array. Tbm pode usar a View como div no react

export default props => {
    return [
        <Text key={0}>Arrow 1: {props.texto}</Text>,
        <Text key={1}>Arrow 2: {props.texto}</Text>
    ]
}