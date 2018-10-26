// -*- js-jsx -*-
import React from 'react';
import Greeting from './Greeting';
import BlinkText from './BlinkText';
import MyBox from './MyBox';
import { StyleSheet, Text, Image, View } from 'react-native';

export default class HelloWithImageApp extends React.Component {
  render() {
    let pic = {
      uri: 'https://pbs.twimg.com/profile_images/651417162452611072/xmmxEZO5.jpg'
    };
    return (
      <View style={styles.container}>
        <Image source={pic} style={{width: 270, height: 154}}/>
        <MyBox>
          <Greeting name='This is my project' excited={false}/>
          <Greeting name='The right way' excited={true}/>
          <Greeting name='Liverpool fc'/>
        </MyBox>
        <Text>Appreciate our slogan</Text>
        <BlinkText text='You will never walk alone'/>
        <Text>......</Text>
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
