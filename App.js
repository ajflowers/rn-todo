import React, { useState } from 'react';
import { StyleSheet, Text, View, TextInput, Button, ScrollView, FlatList } from 'react-native';

export default function App() {
  const [newTask, setNewTask] = useState('');
  const [tasks, setTasks] = useState([]);

  const handleInput = usrTxt => {
    setNewTask(usrTxt);
  }

  const handleSubmit = () => {
    setTasks([...tasks, { task: newTask, key: Date.now() }]);
    // setNewTask('');
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
      <FlatList 
        keyExtractor={(item, index) => item.id}
        data={tasks}
        renderItem={itemData => (
          <View style={styles.task}>
            <Text>{itemData.item.task}</Text>
          </View>
        )}
      />
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
    paddingHorizontal: 10
  },
  task: {
    paddingHorizontal: 10,
    paddingVertical: 5,
    marginTop: 10,
    backgroundColor: '#ccc',
    borderColor: 'black',
    borderWidth: 1
    }
});
