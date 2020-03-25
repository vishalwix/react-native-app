import React, { Component } from 'react';
import {
  Platform,
  StyleSheet,
  Text,
  View,
  StatusBar
} from 'react-native';

const instructions = Platform.select({
  ios: 'Bringing your brand online, \n' +
  'automating the process, caterring your clients \n' + 
  'worldwide and giving you an amazing lead in your business',
  android: 'Bringing your brand online, \n' +
  'automating the process, caterring your clients \n' + 
  'worldwide and giving you an amazing lead in your businesss',
});

export default class App extends Component {
  render() {
    return (
      <View style={styles.container}>
        <StatusBar
          barStyle="light-content"
          backgroundColor="#4F6D7A"
        />
        <Text style={styles.welcome}>
          Welcome to Infinity Web!
        </Text>
        <Text style={styles.instructions}>
          To get started
        </Text>
        <Text style={styles.instructions}>
          {instructions}
        </Text>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#e82525',
  },
  welcome: {
    fontSize: 20,
    textAlign: 'center',
    margin: 10,
    color: '#F5FCFF',
  },
  instructions: {
    textAlign: 'center',
    color: '#F5FCFF',
    marginBottom: 5,
  },
});