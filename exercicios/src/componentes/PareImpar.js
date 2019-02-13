import React from "react";
import { Text, View } from "react-native";
import Padrao from '../estilo/Estilo'

function parOuImpar(num) {
    // if (num % 2 == 0 )
    //     return <Text style={Padrao.ex}>{num} é: Par</Text>
    // else
    //     return <Text style={Padrao.ex}>{num} é: Impar</Text>

    const v = num % 2 == 0 ? 'Par' : 'Impar'
    return <Text style={Padrao.ex}>{num} é: {v}</Text>
}

export default props => 
    <View>
        {/* {parOuImpar(props.numero)} */}
        {
            props.numero % 2 == 0
            ? <Text style={Padrao.ex}>{props.numero} é: Par</Text>
            : <Text style={Padrao.ex}>{props.numero} é: Impar</Text>
        }
    </View>