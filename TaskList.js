import React from 'react';      // -*- js-jsx -*-
import { StyleSheet, Button, FlatList,ScrollView, TouchableOpacity, 
Text, View, ImageBackground } from 'react-native';
import TaskItem from './TaskItem';
import Task from './Task';
import EditTask from './EditTask'
import {StackNavigator} from 'react-navigation';

class TaskList extends React.Component {
  static navigationOptions = {
    title: 'My Task List',
  };
  constructor(props) {
    super(props)

    this.state = {
     
      taskList:[
         new Task("Get over this semester with a decent gpa")
         .setPriority(1)
         .addTag("#WorkHard")
         .setDeadlineRandomly(),
         new Task("Obtain an internship in the CS field")
         .setPriority(2)
         .addTag("#ThesummerWay")
         .setDeadlineRandomly(),
         new Task("plan to travel to France")
         .setPriority(3)
         .addTag("#ParisSaint")
         .setDeadlineRandomly(),
         new Task("Graduate in the spring of 2019")
         .setPriority(4)
         .addTag("#Graduation 2019")
         .setDeadlineRandomly()
         

]}
  }
  
 editTask(key) {
    console.log("TRYING TO EDIT", key)
    this.state.taskList.map((elem) => {
      if(elem.key == key) {
        this.props.navigation.navigate(
        'edit', 
        {task: elem,
        onChange:task => {this.finishEditing(task)}})
      }
    })
  }

  finishEditing(task){
    console.log("FINISH EDITING", task)
    this.setState(prev =>{return prev})
  }
      
    adjustPriority(newPriority, itemId) {
      this.setState(prev => {
        var newList = prev.taskList.map(task => {
          if(task.key == itemId) { //change if task.key to task.num
            return {...task, priority: newPriority}
          } else {
            return task
          }
        })
        return {...prev, taskList: newList}
      })
    }
  
    createNewTask(){
      this.setState(prev =>{
        var t = new Task ("")
        prev.taskList.push(t)
        this.editTask(t.key)
        return prev
      })
    }
    renderItem(item) {
     return ( 
       <TaskItem 
             key ={item.item.key} 
             task ={item.item}
             editTask={(key) => this.editTask(key)} />
  
      );
    }
    
  sortByDescription(){
    this.setState(prev => {
      prev.taskList.sort (Task.compareByDescription)
      return prev
    })
  }

  sortByPriority() {
    this.setState(prev => {
      prev.taskList.sort(Task.compareByPriority)
      return prev
    })
  }
  
  sortByDeadline() {
    this.setState(prev => {
      prev.taskList.sort(Task.compareByDeadline)
      return prev
    })
  }
  render() {
      return (
        <View style={{paddingTop:20, backgroundColor:"#f5f5f5", flex:1}}>
        <ImageBackground source={require('./office.png')} style={{height: '100%', width: '100%'}}>
        
          <Button
              onPress={() => this.createNewTask()}
              title="Add New Task"/>
          
           <ScrollView>
          <View style={styles.outeritem}>
           <TouchableOpacity onPress = {() => {this.sortByDeadline()}}>
              <Text style={{fontSize:16, fontWeight:'bold',color:"purple"}}>
                  Sort Due</Text>
            </TouchableOpacity>
           
            <TouchableOpacity  onPress={() => {this.sortByDescription()}}>
            <Text style={{fontSize:16, fontWeight:'bold',color:"purple"}}>
                Sort Description </Text>
            </TouchableOpacity>
            
            <TouchableOpacity  onPress={() => {this.sortByPriority()}}>
              <Text style={{fontSize:16, fontWeight:'bold',color:"purple"}}>
                  Sort Priority </Text>
            </TouchableOpacity>
            </View>
                {/* <Button
                    onPress={() => this.sortByDescription()}
                    color="#841584"
                     title="Sort by description"/>
                        <Button
                          onPress={() => this.sortByPriority()}
                          title="Sort by priority"/> */}
          <FlatList
            style={{}}
            data={this.state.taskList}
            renderItem={item => this.renderItem(item)}
            /> 
            
          </ScrollView>
          </ImageBackground>
        </View>
      )
    }
  }
  

  export default MultiScreenApp = StackNavigator({
  home: { screen: TaskList },
  edit: { screen: EditTask },
})
const styles = StyleSheet.create({
  outeritem: {
    flexDirection: 'row',
    paddingLeft: 5,
    marginBottom: 30,
    justifyContent :'space-between'
    },
  })