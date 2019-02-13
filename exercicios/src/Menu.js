import React from 'react';

import Simples from './componentes/Simples'
import PareImpar from './componentes/PareImpar'
import Inverter, { MegaSena } from './componentes/Multi'
import Contador from './componentes/Contador'
import Plataforma from './componentes/Plataformas'
import ValidarProps from './componentes/ValidarProps'
import Evento from './componentes/Evento'

import { createDrawerNavigator } from 'react-navigation'

export default createDrawerNavigator({
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
        screen: () => <Contador numeroInicial={100}/>
    },
    MegaSena:{
        screen: () => <MegaSena />,
        navigationOptions: { title: 'Mega Sena'}
    },
    Inverter: {
        screen: () =>  <Inverter texto="React Native" />
    },
    PareImpar: {
        screen: () =>  <PareImpar numero={3}/>,
        navigationOptions: { title: 'Par & Impar'}
    },
    Silpmes: {
        screen: () =>  <Simples texto="Texto via props"/>
    },
    
}, {drawerWidth: 300})