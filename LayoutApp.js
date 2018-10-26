import React from 'react'; // -*- js-jsx -*-
import { StyleSheet, Text, View } from 'react-native';
import TaskItemApp from './TaskItemApp';
import TaskItem from './TaskItem';

export default class LayoutApp extends React.Component {
  render() {
    return (
   <View style={{backgroundColor:"white", height:"100%", flex:1,paddingTop:50,paddingBottom:20,alignItems:'center',
              flexDirection:"row"}}>
          <View style={{flex:1, margin:5, justifyContent:"center", paddingTop:5, backgroundColor:"gold"}}>
          <View style= {{flex:0.8, margin:5, height:"100%", alignItems:"center",paddingTop:50,
          paddingLeft:80,paddingRight:80,paddingBottom:30,backgroundColor:"lightgreen"}}>
          
          <Text style={{color:'ghostwhite',fontWeight:'900'}}> "Ideas for seminar by sekou " </Text>
          
          <TaskItem
          description="Get over this semester with a decent grade." 
          done={new Date() }
          priority={1}
          deadline={new Date(2018,5,10,12)}
          tags={["#School way"]}
          />
           <TaskItem
          description="Get an intership in the computer science field." 
          done={new Date() }
          priority={2}
          deadline={new Date(2018,5,15,12)}
          tags={["#Experience2019"]}
          />
          
          <TaskItem
          description="Get a good paying job."
          done={new Date() }
          priority={3}
          deadline={new Date(2019,5,10,12)}
          tags={["#ThemoneyWay"]}
          />

           <TaskItem
          description="Plan to travel to France over the summer as well"
          done={new Date() }
          priority={4}
          deadline={new Date(2018,7,10,12)}
          tags={["#Bonjour&Bonsoir"]}
          />

           <TaskItem
          description="Return after the summer in order to obtain my bachelor degree."
          done={new Date() }
          priority={5}
          deadline={new Date(2019,5,10,12)}
          tags={["#NeedAjob"]}
          />
          
          </View>
          </View>
        </View>
    
    );
  }
}
const styles = StyleSheet.create({
  container: {
    flex: 2,
    backgroundColor:'powderblue',
    alignItems: 'flex-end', 
    justifyContent: 'space-between',
    flexDirection:'row',
    flexWrap :'wrap',

  },
});
