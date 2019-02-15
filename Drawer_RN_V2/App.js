import React, {Component} from 'react';
import { StyleSheet, Text, View, SafeAreaView, ScrollView} from 'react-native';
import { createDrawerNavigator, DrawerItems } from 'react-navigation'
import HomeScreen from './src/pages/HomeScreen';
import SettingsScreen from './src/pages/SettingsCreen';
import { Icon } from 'native-base';


const customDrawerComponent = (props) => (
  <SafeAreaView style={{flex: 1}}>
    <View style={styles.headerDrawer}>
      <View style={styles.headerDrawerImg} />
    </View>
    <ScrollView>
      <DrawerItems {...props} />
    </ScrollView>

  </SafeAreaView>
)


class App extends Component {
  render() {
    return <AppDrawerNavigator /> 
}
}
export default App


const AppDrawerNavigator = createDrawerNavigator({
  Home: {
    screen: HomeScreen,
    navigationOptions: {
        drawerIcon: ({tintColor}) =>  (
            <Icon name='home'/>
        )
    }
  },
  Settings: {
    screen: SettingsScreen,
    navigationOptions: {
        drawerIcon: ({tintColor}) =>  (
            <Icon name='md-build'/>
        )
    }
  }
},{
  contentComponent: customDrawerComponent
})

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  headerDrawer: {
    height: 150,
    backgroundColor: '#fffffe',
    alignItems: 'center',
    justifyContent: 'center'
  },
  headerDrawerImg: {
    backgroundColor: '#ddd',
    height: 120,
    width: 120,
    borderRadius: 60,
  }
  
});
