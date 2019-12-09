import React, { useState } from 'react';
import { View, TextInput, Button, StyleSheet } from 'react-native';

const InputForm = props => {
    const [newTask, setNewTask] = useState('');

    const handleInput = userText => {
        setNewTask(userText);
      }
    
    return(
        <View style={styles.inputContainer}>
            <TextInput 
            placeholder="Enter New Task" 
            style={styles.inputTask}
            onChangeText={handleInput}
            value={newTask}
            />
            <Button title="ADD" onPress={() => {
                props.handleSubmit(newTask);
                setNewTask('');
            }}/>
        
      </View>

    )
    
}

const styles = StyleSheet.create({
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
      }
});

export default InputForm;