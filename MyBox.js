// -*- js-jsx -*-
import React from 'react';
import { Text, View } from 'react-native';

export default class MyBox extends React.Component {
  render() {
    return (
      <View>
        <Text>.........**********.........</Text>
        {this.props.children}
        
      </View>
    );
  }
}
