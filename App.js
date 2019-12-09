import React, { useState } from 'react';
import { StyleSheet, Text, View, TextInput, Button, ScrollView, FlatList } from 'react-native';

import TodoItem from './components/todoItem';
import InputForm from './components/inputForm';

export default function App() {
  const [tasks, setTasks] = useState([]);


  const handleSubmit = newTask => {
    setTasks([...tasks, { task: newTask, id: Date.now().toString() }]);
  }

  const handleDelete = id => {
    setTasks(currentTasks => {
      return currentTasks.filter(task => task.id !== id);

    });
  }
  
  return (
    <View style={styles.screen}>
      <InputForm handleSubmit={handleSubmit} />
      <FlatList 
        keyExtractor={(item, index) => item.id}
        data={tasks}
        renderItem={itemData => <TodoItem task={itemData.item.task} onDelete={() => handleDelete(itemData.item.id)} />}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  screen: {
    padding: 30
  },

});
