import React, { Component } from 'react';
import { Text, View, TouchableOpacity, StyleSheet, TextInput} from 'react-native';
import CheckBox from 'react-native-checkbox';
import BlinkText from './BlinkText';
import hdate from 'human-date';
import ModalSelector from 'react-native-modal-selector';
import Icon from 'react-native-vector-icons/Feather';



export default class TaskItem extends React.Component {
  constructor(props) {
    super(props);
    this.state = {task: props.task, isShowingIcon: true};

    setInterval(() => {
      this.setState(previous => {
        return {isShowingIcon: !previous.isShowingIcon};
      });
    }, 300); // milliseconds
  }

  adjustPriority(newPriority) {
  this.setState(prev => {
  var p = newPriority
  if(p < 1) p = 1;
  else if(p > 5) p = 5;



this.props.onAdjustPriority(p, this.props.id) // send to parent

return {...prev, priority: p}

})
  }
  toggleDone() {
    this.setState(prev => {
      prev.task.toggleDone()
      return prev
    })
  }

  render() {
    const task = this.state.task
    const due = task.relativeDeadlineString()


    const isDone = this.state.done != null
    let descStyle = {fontSize:14, fontWeight:'bold'}
    let dueStyle = {fontSize:14, color:'blue'}
    let tagStyle = {fontSize: 14, color :'black'}
    let priStyle = {
      flexDirection: 'row',
      color: 'blue'
    }
    if(task.isDone()) {
      descStyle.textDecorationLine = 'line-through'
      descStyle.textDecorationStyle = 'solid'
      descStyle.color = 'red'
      dueStyle.color ="red"
      dueStyle.textDecorationLine = 'line-through'
      tagStyle.color ="red"
      tagStyle.textDecorationLine = 'line-through'
      priStyle.color ="red"
      priStyle.textDecorationLine = 'line-through'
      

    }
 let index = 0;
        const data = [
            { key: index++, section: true, label: 'Priority levels' },
            { key: index++, label: '1', num: 1},
            { key: index++, label: '2', num: 2 },
            { key: index++, label: '3', num: 3},
            { key: index++, label: '4', num: 4 },
            { key: index++, label: '5', num: 5}

            ];
    return (
     
        <View style={styles.outeritem}>
        
        <CheckBox label=' ' value ={task.isDone} onChange={ () =>this.toggleDone()}/>
        
        <View style={styles.info}>
        <TouchableOpacity style={{height:25, width:25,}}
            onPress={()=>{this.props.editTask(task.key)}}>
             <Icon name={this.state.isShowingIcon? "edit" : ""} size={20} />
       </TouchableOpacity>
         <Text style={descStyle}>Task: {task.getDescription()} </Text>

         <View style={styles.info}>
        <Text style={dueStyle}>Due: {due} </Text> 
        <Text style={tagStyle}>Tags: {task.getTagString()} </Text>
        <View style={styles.item}>
        <Text style={priStyle}>Priority: {task.getPriority()} </Text>
        <View style={styles.item}>
        <ModalSelector
              data={data}
              initValue="Select priority level"
              accessible={true}
              scrollViewAccessibilityLabel={'Scrollable options'}
              cancelButtonAccessibilityLabel={'Cancel Button'}
              onChange={option =>{ 
                task.setPriority(option.num)
                this.setState(prev => prev) // Force update
                }}>
 
         <TextInput
             style={{borderWidth:1, borderColor:'#ccc', padding:10, height:35}}
             editable={false}
             placeholder="Select priority level"
             value={task.getPriority().toString()} />
 
        </ModalSelector>
       
       

        </View>
            </View>
                </View>
                   </View>
                    </View>


    );
  }
}
const styles = StyleSheet.create({
  bottomRow: {},
  info: {
    marginTop: 4,
  },
  item: {
    flexDirection: 'row',
  },
  outeritem: {
    flexDirection: 'row',
    paddingLeft: 10,
    //backgroundColor: 'yellow',
  },
  checkbox: {
    marginLeft: 20,
    marginRight: 20,

  },
  middleRow: {
    flexDirection: 'row',
  },
})
