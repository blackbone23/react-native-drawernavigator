import React, { Component } from 'react'
import { Text, StyleSheet, View } from 'react-native'
import HomeScreen from './screens/HomeScreen'
import DrawerNavigator from './navigation/DrawerNavigator'

export default class App extends Component {
  render() {
    return (
      <View style={styles.container}>
        <DrawerNavigator />
      </View>
    )
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  }
})
