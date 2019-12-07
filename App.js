import React, { useState } from 'react';
import { StyleSheet, Text, View, TextInput, Button, ScrollView } from 'react-native';

export default function App() {
  const [newTask, setNewTask] = useState('');
  const [tasks, setTasks] = useState([]);

  const handleInput = usrTxt => {
    setNewTask(usrTxt);
  }

  const handleSubmit = () => {
    setTasks([...tasks, {todo: newTask, id: Date.now()}]);
    setNewTask('');
  }
  
  return (
    <View style={styles.screen}>
      <View style={styles.inputContainer}>
        <TextInput 
          placeholder="Enter New Task" 
          style={styles.inputTask}
          onChangeText={handleInput}
          value={newTask}
        />
        <Button title="ADD" onPress={handleSubmit}/>
        
      </View>
      <ScrollView>
        {tasks.map((task) => 
          <View style={styles.task} key={task.id}>
            <Text>{task.todo}</Text>
          </View>
        )}
      </ScrollView>
    </View>
  );
}

const styles = StyleSheet.create({
  screen: {
    padding: 30
  },
  inputContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center'
  },
  inputTask: {
    borderColor: 'black',
    borderWidth: 1,
    width: '80%',
    padding: 10
  },
  task: {
    padding: 10,
    marginTop: 10,
    backgroundColor: '#ccc',
    borderColor: 'black',
    borderWidth: 1
    }
});
