import React, { useState } from 'react';
import { StyleSheet, Text, View, TextInput, Button, ScrollView, FlatList } from 'react-native';

import TodoItem from './components/todoItem';
import InputForm from './components/inputForm';

export default function App() {
  const [tasks, setTasks] = useState([]);
  const [addMode, setAddMode] = useState(false);


  const handleSubmit = newTask => {
    setTasks([...tasks, { task: newTask, id: Date.now().toString() }]);
    setAddMode(false);
  }

  const handleDelete = id => {
    setTasks(currentTasks => {
      return currentTasks.filter(task => task.id !== id);

    });
  }

  const handleCancel = () => {
      setAddMode(false);
  }
  
  return (
    <View style={styles.screen}>
      <Button title="add new task" onPress={() => setAddMode(true)} />
      <InputForm 
        visible={addMode} 
        handleSubmit={handleSubmit}
        onCancel={handleCancel}
      />
      <FlatList 
        keyExtractor={(item, index) => item.id}
        data={tasks}
        renderItem={itemData => 
          <TodoItem 
            task={itemData.item.task} 
            onDelete={handleDelete} 
            taskId={itemData.item.id} 
          />
        }
      />
    </View>
  );
}

const styles = StyleSheet.create({
  screen: {
    padding: 30
  },

});
