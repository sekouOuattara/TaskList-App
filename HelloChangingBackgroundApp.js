// -*- js-jsx -*-
import React from 'react';
import Greeting from './Greeting';
import { hsl } from 'color-convert';
import { StyleSheet, Text, Image, View } from 'react-native';

export default class HelloChangingBackgroundApp extends React.Component {
  constructor(props) {
    super(props);
    this.state = {backgroundHue: 0}

    setInterval(() => {
      this.setState(previous => {
        return {backgroundHue: (previous.backgroundHue + 5)%360}
      });
    }, 100);
  }

  render() {
    console.log('Hue', this.state.backgroundHue);
    let color = '#' + hsl.hex(this.state.backgroundHue, 90, 90);
    console.log('Background', color);
    let styles = StyleSheet.create({
      container: {
        flex: 1,
        backgroundColor: color,
        alignItems: 'center',
        justifyContent: 'center',
      },
    });
    return (
      <View style={styles.container}>
        <Greeting name="World"/>
        <Text>Is the background changing?</Text>
      </View>
    );
  }
}
