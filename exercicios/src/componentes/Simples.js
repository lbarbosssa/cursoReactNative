import React from "react";
import { Text } from "react-native";

// export default function(props) {
//   return <Text>{ props.texto }!</Text>;
// }

//Com Arrow se for passar apenas um parametro não precisa por entre parenteses
// export default props => {
//    return <Text>{ props.texto }!</Text>  
// }

//Se for devolver uma linha de codigo, não precisa envover em chaves e nem informar return
export default props => 
    <Text>Arrow 1: { props.texto }!</Text> 

//Uma forma de devolver mais que um elemeto sem View, é num array
// export default props => [
//     <Text key={1}>Arrow 1 { props.texto }!</Text>,
//     <Text key={2}>Arrow 2 { props.texto }!</Text> 
// ]
