import React from 'react';
import { StyleSheet, Text, View } from 'react-native';

import {createDrawerNavigator} from 'react-navigation';

// Screens
import HomeScreen from './screens/HomeScreen';

export default class App extends React.Component {
  render() {
    return (
      <AppDrawNavigator />
    );
  }
}

const AppDrawNavigator = new createDrawerNavigator ({

  HomeScreen: {screen: HomeScreen}
})

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
