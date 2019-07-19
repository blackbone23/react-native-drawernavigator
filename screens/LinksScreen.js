import React, { Component } from 'react'
import { Text, StyleSheet, View } from 'react-native'
import MenuButton from '../components/MenuButton'

export default class LinksScreen extends Component {
  render() {
    return (
      <View style={styles.container}>
        <MenuButton navigation={this.props.navigation} />
        <Text style={styles.text}> Links </Text>
      </View>
    )
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  text : {
    fontSize: 30,
  },
})
