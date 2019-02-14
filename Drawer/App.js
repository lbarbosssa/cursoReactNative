import React, { Component } from "react";
import { StyleSheet, Text, View, Button } from "react-native";

import {
  createSwitchNavigator,
  createAppContainer,
  createDrawerNavigator,
  createStackNavigator
} from "react-navigation";
class App extends Component {
  render() {
    return <AppContainer />;
  }
}
export default App;

class WelcomeScreen extends Component {
  render() {
    return (
      <View style={{ flex: 1, alignItems: "center", justifyContent: "center" }}>
        <Button
          title="Dashboard"
          onPress={() => this.props.navigation.navigate("Dashboard")}
        />
        <Button title="Press me" onPress={() => alert("button pressed")} />
      </View>
    );
  }
}

class DashboardScreen extends Component {
  render() {
    return (
      <View style={{ flex: 1, alignItems: "center", justifyContent: "center" }}>
        <Text>Dashboard Screen</Text>
      </View>
    );
  }
}

class SettingsScreen extends Component {
  render() {
    return (
      <View style={{ flex: 1, alignItems: "center", justifyContent: "center" }}>
        <Text>Settings Screen</Text>
      </View>
    );
  }
}

const AppStackNavigator = createStackNavigator({
    'Dashboard': DashboardScreen,
    'Settings': {
      screen: SettingsScreen,
      navigationOptions: {
        title: 'Settings'}
      }
  }, {
    defaultNavigationOptions: {
      title: 'Dash'
    }
  });

const AppDrawerNavigator = createDrawerNavigator({
  Dashboard: {
    screen: AppStackNavigator
  },
  Settings: {
    screen: SettingsScreen,
  }
});

const AppSwitchNavigator = createSwitchNavigator({
  Welcome: { screen: WelcomeScreen },
  Dashboard: { screen: AppDrawerNavigator }
});

const AppContainer = createAppContainer(AppSwitchNavigator);

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center"
  }
});
