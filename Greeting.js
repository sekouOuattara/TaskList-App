// -*- js-jsx -*-
import React from 'react';
import { Text } from 'react-native';

export default class Greeting extends React.Component {
  render() {
    const punct = this.props.excited? '!' : '.';
    return (
      <Text> {this.props.name}{punct}</Text>
    );
  }
}
