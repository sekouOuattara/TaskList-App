// MultiScreenApp.js  -*- js-jsx -*-
import React from 'react';
import { StyleSheet, Text, Button, View } from 'react-native';
import {
  StackNavigator,
} from 'react-navigation';

class HomeScreen extends React.Component {
  static navigationOptions = {
    title: 'Welcome',
  };
  render() {
    const { navigate } = this.props.navigation;
    return (
      <View style={styles.container}>
        <Button title="Go to Jane's profile"
                onPress={() =>
          navigate('Profile', {name: 'Jane'})}/>
        <Button title="Go to Bob's profile"
                onPress={() =>
          navigate('Profile', {name: 'Bob'})}/>
        <Text>Changes you make will automatically reload.</Text>
        <Text>You can do inline Javascript like: 3+5 is {3+5}.</Text>
      </View>
    );
  }
}

class ProfileScreen extends React.Component {
  static navigationOptions = ({navigation}) => ({
    title: navigation.state.params.name + "'s Profile"
  })
  constructor(props) {
    super(props)
    console.log('Opening ProfileScreen', this.props)
  }
  render() {
    const name = this.props.navigation.state.params.name;
    return (
      <View style={styles.container}>
        <Text>Welcome to your profile, {name}</Text>
        <Text>Changes you make will automatically reload.</Text>
        <Text>You can do inline Javascript like: 3+5 is {3+5}.</Text>
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

export default MultiScreenApp = StackNavigator({
  Home: { screen: HomeScreen },
  Profile: { screen: ProfileScreen },
});
