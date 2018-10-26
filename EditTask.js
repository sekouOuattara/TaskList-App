// EditTask.js
import React from 'react'; // -*- js-jsx -*-
import { Button, FlatList, Text, TextInput, View } from 'react-native';
import DatePicker from 'react-native-datepicker'
import ModalSelector from 'react-native-modal-selector';

export default class EditTask extends React.Component {
  static navigationOptions = {
    title: 'Edit Task',
  };
  constructor(props) {
    super(props)
    const task = this.props.navigation.state.params.task
    // Execute some code on leaving this page
    this.state = {description: task.getDescription(),
                  deadline: task.getDeadline(),
                  Tags: task.getTagString()}
    this.props.navigation.addListener(
      'didBlur',
      arg => {
        task.setDescription(this.state.description)
        task.setDeadline(this.state.deadline)
        task.setTags(this.state.Tags)
        this.props.navigation.state.params.onChange(task)
      }
    )
  }
  setDescription(text) {
    this.setState(prev => {
      return {...prev, description:text}
    })
  } 
  setTags(text) {
    this.setState(prev => {
      return {...prev, Tags:text}
    })
  } 
  
  render() {
    let index = 0;
        const data = [
            { key: index++, section: true, label: 'Priority levels' },
            { key: index++, label: '1', num: 1},
            { key: index++, label: '2', num: 2 },
            { key: index++, label: '3', num: 3},
            { key: index++, label: '4', num: 4 },
            { key: index++, label: '5', num: 5}

            ];
    const task = this.props.navigation.state.params.task
    return (
      <View>
        <TextInput
          maxLength={80}
          placeholder="Description"
          value={this.state.description}
          style={{width:"100%", height:40, fontSize:24}}
          onChangeText={text => this.setDescription(text)}
          />

          <TextInput
          maxLength={80}
          placeholder="Add Tags"
          value={this.state.Tags}
          style={{width:"100%", height:40, fontSize:24}}
          onChangeText={text => this.setTags(text)}


          />
<DatePicker
        style={{width: 200}}
        date={this.state.deadline}
        mode="date"
        placeholder="select date"
        format="YYYY-MM-DD"
        confirmBtnText="Confirm"
        cancelBtnText="Cancel"
        customStyles={{
          dateIcon: {
            position: 'absolute',
            left: 0,
            top: 4,
            marginLeft: 0
          },
          dateInput: {
            marginLeft: 36
          }
        }}
        onDateChange={(date) => {this.setState({deadline: date})}}
  />
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
    )
  }
}
