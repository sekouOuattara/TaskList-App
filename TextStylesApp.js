// -*- js-jsx -*-
import React from 'react';
import { StyleSheet, Text, View } from 'react-native';

// I'm using an array of strings here and then including them with
// styling into the <Text> nodes. The main reason (rather than doing
// all the text inline) is for simpler control of the spacing. I can
// put spaces at the end of each string here, but those spaces can be
// tricky to preserve when using inline strings in XML. (This is just
// generated "Lorem ipsum" filler text.)
const phrases = [
  "Fusce suscipit, wisi nec facilisis facilisis, est ", // 0
  "dui fermentum leo ",                                 // 1
  "quis tempor ligula erat quis odio. ",                // 2
  "Proin quam nisl, tincidunt et, ",                    // 3
  "mattis eget, ",                                      // 4
  "convallis nec, purus. ",                             // 5
  "Pellentesque dapibus suscipit ligula. ",             // 6
  "Nunc eleifend leo vitae magna.",                     // 7
];

export default class TextStylesApp extends React.Component {
  render() {
    return (
      <View style={styles.container}>
        <Text style={styles.basic}>
          {phrases[0]}
          <Text style={styles.bold}>{phrases[1]}</Text>
          {phrases[2]}
          {phrases[3]}
          <Text style={styles.emph}>{phrases[4]}</Text>
          {phrases[5]}
          <Text style={styles.defn}>{phrases[6]}</Text>
          {phrases[7]}
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
    padding: 10,
  },
  basic: {
    fontSize: 20,
    fontFamily: 'serif',
    lineHeight: 26,
    backgroundColor: '#eee',
    padding: 10,
  },
  bold: {
    fontWeight: 'bold',
  },
  emph: {
    fontStyle: 'italic',
  },
  defn: {
    color: '#3a3',
  }
});
