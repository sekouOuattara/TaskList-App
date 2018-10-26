// -*- js-jsx -*-
import React from 'react';
import { Text } from 'react-native';

export default class BlinkText extends React.Component {
  constructor(props) {
    super(props);
    this.state = {isShowingText: true};

    setInterval(() => {
      this.setState(previous => {
        return {isShowingText: !previous.isShowingText};
      });
    }, 250); // milliseconds
  }

  render() {
    let display = this.state.isShowingText? this.props.text : ' ';
    return (
      <Text>{display}</Text>
    );
  }
}
  