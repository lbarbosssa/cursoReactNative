import React from 'react';

import Simples from './componentes/Simples'
import PareImpar from './componentes/PareImpar'
import Inverter, { MegaSena } from './componentes/Multi'
import Contador from './componentes/Contador'
import Plataforma from './componentes/Plataformas'
import ValidarProps from './componentes/ValidarProps'
import Evento from './componentes/Evento'
import Avo from './componentes/ComunicacaoDireta'
import TextoSincronizado from './componentes/ComunicacaoIndireta'
import ListaFlex from './componentes/ListaFlex'
import Flex from './componentes/Flex' 


import { createDrawerNavigator } from 'react-navigation'

export default createDrawerNavigator({
    Flex: {
        screen: Flex
    },
    ListaFlex: {
        screen: ListaFlex,
        navigationOptions: { title: 'Lista de Alunos' }
    },
    TextoSincronizado: {
        screen: TextoSincronizado
    },
    Avo: {
        screen: () => <Avo nome='João' sobrenome="da Silva" />
    },
    Evento: {
        screen: Evento
    },
    ValidarProps: {
        screen: () => <ValidarProps ano={18} />
    },
    Plataforma: {
        screen: Plataforma
    },
    Contador: {
        screen: () => <Contador numeroInicial={100} />
    },
    MegaSena: {
        screen: () => <MegaSena />,
        navigationOptions: { title: 'Mega Sena' }
    },
    Inverter: {
        screen: () => <Inverter texto="React Native" />
    },
    PareImpar: {
        screen: () => <PareImpar numero={3} />,
        navigationOptions: { title: 'Par & Impar' }
    },
    Silpmes: {
        screen: () => <Simples texto="Texto via props" />
    },

}, { drawerWidth: 300 })