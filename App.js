import React, { useState } from 'react';
import { StyleSheet, Text, View, TextInput, Button, ScrollView, FlatList } from 'react-native';

import TodoItem from './components/todoItem';
import InputForm from './components/inputForm';

export default function App() {
  const [tasks, setTasks] = useState([]);


  const handleSubmit = newTask => {
    setTasks([...tasks, { task: newTask, key: Date.now() }]);
    // setNewTask('');
  }
  
  return (
    <View style={styles.screen}>
      <InputForm handleSubmit={handleSubmit} />
      <FlatList 
        keyExtractor={(item, index) => item.id}
        data={tasks}
        renderItem={itemData => <TodoItem task={itemData.item.task}/>}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  screen: {
    padding: 30
  },

});
