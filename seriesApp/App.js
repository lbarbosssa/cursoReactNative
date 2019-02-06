import { createAppContainer, createStackNavigator } from 'react-navigation'

import LoginPage from './src/pages/LoginPage'

const AppNavigator = createStackNavigator ({
  'Login': {
    screen: LoginPage,
    navigationOptions: {
      title: 'Bem vindo!'
    }
  }
  }, {
    defaultNavigationOptions: {
      title: 'Series',
      headerTintColor: 'white',     
      headerStyle: {
        backgroundColor: '#6ca2f7',
        borderBottomWidth: 1,
        borderBottomColor: '#c5c5c5'
      },
      headerTitleStyle: {
        color: 'white',
        fontSize: 30,
      }
    }
})

const AppContainer = createAppContainer(AppNavigator)

export default AppContainer