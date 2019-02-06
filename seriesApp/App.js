import { createAppContainer, createStackNavigator } from 'react-navigation'

import LoginPage from './src/pages/LoginScreen'

const AppNavigator = createStackNavigator ({
  'Login': {
    screen: LoginPage
  }
})

const AppContainer = createAppContainer(AppNavigator)

export default AppContainer