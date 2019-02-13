import React from 'react';
import { StyleSheet, View} from 'react-native';

import Simples from './componentes/Simples'
import PareImpar from './componentes/PareImpar'
import Inverter, { MegaSena } from './componentes/Multi'
import Contador from './componentes/Contador'
import Plataforma from './componentes/Plataformas'

import { createDrawerNavigator } from 'react-navigation'

export default createDrawerNavigator({
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