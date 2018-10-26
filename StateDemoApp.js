import React from 'react';   // -*- js-jsx -*-
import { Button, Text, View } from 'react-native';

export default class StateDemoApp extends React.Component {
  constructor(props) {
    // Initialization code
    super(props);
    this.state = {num: 13};
  }

  increment() {
    this.setState(prev => {
      console.log("setState, prev=", prev);
      return {num: prev.num + 1};
    });
  }

  render() {
    console.log("RENDERING");
    return (
      <View style={{marginTop: 100}}>
        <Text>StateDemoApp</Text>
        <Button title={"Clicked "+this.state.num+" times"} color="#158484"
                onPress={() => this.increment()} />
      </View>
    );
  }
}
