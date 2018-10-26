// TaskItemApp.js
import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import TaskItem from './TaskItem';

export default class TaskItemApp extends React.Component {
  render() {
    return (
       <View style={{backgroundColor:"white", height:"100%", paddingTop:25}}>
        <View style={{backgroundColor:"purple", flex:0.5, flexDirection:"column"}}>
         <View style={{flex:3, margin:5, backgroundColor:"white"}}>
          <TaskItem
          description="Draft 3 ideas for seminar presentation"
          done={new Date()}
          deadline={new Date(2018,3,23,12)}
          tags={["#brainstorm", "#focus"]}
          />
         </View>
          <View style={{flex:3, margin:5, backgroundColor:"white"}}>
          <TaskItem
          description="Buy milk"
          done={new Date()}
          deadline={new Date(2018,3,6,12)}
          tags={["#errand"]}
          />
          </View>
         </View>
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