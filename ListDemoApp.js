import React from 'react';      // -*- js-jsx -*-
import { StyleSheet, FlatList, Text, View } from 'react-native';

export default class ListDemoApp extends React.Component {
  constructor(props) {
    super(props);
    this.data = []
    var x = 1
    for(var i = 0; i < 30; i++, x *= 2)
    {
      this.data.push({num: x});
    }
  }
  renderItem(item) {
    const itemStyle = {
      fontSize: 20,
      textAlign: 'right',
      paddingTop: 15,
      paddingBottom: 15,
      paddingRight: 25,
      backgroundColor: item.index%2 == 0? '#eee' : '#fff',
    }
    return <Text style={itemStyle}>{item.item.num}</Text>
  }
  render() {
    return (
      <View style={styles.container}>
        <Text>Open up App.js to start working on your app!</Text>
        <FlatList
          style={{width: '100%'}}
          data={this.data}
          renderItem={item => this.renderItem(item)} />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
