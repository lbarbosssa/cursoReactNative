import { createAppContainer, createStackNavigator } from 'react-navigation'

import PeoplePage from './src/pages/PeoplePage'

const StackNavigator = createStackNavigator ({
    'Main': {
      screen: PeoplePage
    }
}, {
  defaultNavigationOptions: {
    title: 'Pessoas!',
    headerStyle: {
      backgroundColor: '#6ca2f7',
      borderBottomWidth: 1,
      botderBottomColor: '#C5C5C5'
    },
    headerTitleStyle: {
      color: 'white',
      fontSize: 30,
      flexGrow: 1, 
      textAlign: 'center'
    }
  }
})

const AppContainer = createAppContainer(StackNavigator)

export default AppContainer

