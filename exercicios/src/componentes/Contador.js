import React, { Component } from "react"
import { Text, View, TouchableOpacity } from "react-native"

export default class Contador extends Component{
    state = {
        numero: this.props.numeroInicial
    }
    maisUm = () => {
        this.setState({numero: this.state.numero + 1})
    }
    zerar = () => {
        this.setState({numero: 0})
    }

    render(){
        return (
            <View>
                <Text style={{fontSize: 40}}>{this.state.numero}</Text>

                <TouchableOpacity
                    onPress={this.maisUm}
                    onLongPress={this.zerar}>
                    <Text>Incrementar / Zerar</Text>
                </TouchableOpacity>

            </View>
        )
    }
}