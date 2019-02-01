import React from 'react'

import { createDrawerNavigator} from 'react-navigation'

import Simples from './componentes/Simples'
import ParImpar from './componentes/Pareimpar'
import { Inverter, MegaSena } from './componentes/Multi';



export default createDrawerNavigator({
    MegaSena: {
        screen: () => <MegaSena numeros={8} />,
        navigationOptions: {title: "Mega Sena"}
    },
    Inverter: {
        screen: () => <Inverter texto="React é Baum!!" />
    },
    ParImpar: {
        screen: () => <ParImpar numero={30} />,
        navigationOptions: {title: "Par e Impar"}
    },
    Simples: {
        screen: () => <Simples texto="Está Flexivel!!!" />
    }

}, { drawerWidth: 300})