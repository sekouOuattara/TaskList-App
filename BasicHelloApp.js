import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import Blinktext from './BlinkText';

export default class BasicHelloApp extends React.Component {
  render() {
    return (
      <View style={styles.container}>
        <Text>This is sekou Ouattara!</Text>
        <Text>You will never walk alone.</Text>
        <Text>The Liverpool way.</Text>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#0000ff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
