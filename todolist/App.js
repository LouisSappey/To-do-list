import React, {useState} from 'react';
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, TouchableOpacity, KeyboardAvoidingView, TextInput, Platform, Keyboard } from 'react-native';
import Task from './components/Task';

export default function App() {

  const [task, setTask] = useState();
  const[tasklist, setTasklList] = useState([]);

  const handletask = () => {
    Keyboard.dismiss();
    setTasklList([...tasklist, task])
    setTask(null);
  }

  const deletedtask = (index) => {
    let itemscopy = [...tasklist];
    itemscopy.splice(index, 1);
    setTasklList(itemscopy);
  }

  return (
    <View style={styles.container}>
      <View style={styles.title}>
        <Text style={styles.sectiontitle}>Choses à Faires</Text>
        <View style={styles.all_task}>
          {/* La gestion des add et deleted des Task */}
          {
            tasklist.map((item, index) => {
              return (
                <TouchableOpacity key = {index} onPress={() => deletedtask(index)}>
                  <Task text={item}/>
                </TouchableOpacity>
              )
            })
          }
        </View>
      </View>
      <KeyboardAvoidingView behavior={Platform === "ios" ? "padding" : "height"}
      style={styles.writetasks}>
        <TextInput style={styles.input} placeholder={'Entrer Nouvelles Taches...'} value={task}  onChangeText={text => setTask(text)}/>
        <TouchableOpacity onPress={() => handletask()}>
          <View style={styles.addtasks}>
            <Text style={styles.addtext}>ADD</Text>
          </View>
        </TouchableOpacity>
      </KeyboardAvoidingView>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#00FFFF',
  },
  sectiontitle:{
    paddingTop : 80,
    paddingHorizontal: 20,
  },
  title:{
    fontSize : 34,
    fontWeight : 'bold',
  },
  all_task:{},

  // Ajout de task
  writetasks: {
    position : 'absolute',
    bottom : 60,
    width : '100%',
    flexDirection : 'row',
    justifyContent : 'space-around',
    alignItems : 'center',
  },
  input : {
    paddingVertical: 15,
    paddingHorizontal : 15,
    backgroundColor : '#FFFFFF',
    borderRadius : 68,
    borderColor : '#00FFFF',
    borderWidth : 1,
    width : 250,
  },
  addtasks : {
    width : 50,
    height : 60,
    backgroundColor: '#FFFFFF',
    borderRadius : 100,
    justifyContent : 'center',
    alignItems : 'center',
    borderColor : '#00FFFF',
    borderWidth : 1,
  },
  addtext : {},
});
