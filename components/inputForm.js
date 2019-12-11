import React, { useState } from 'react';
import { View, TextInput, Button, StyleSheet, Modal } from 'react-native';

const InputForm = props => {
    const [newTask, setNewTask] = useState('');

    const handleInput = userText => {
        setNewTask(userText);
      }


    
    return(
      <Modal visible={props.visible} animationType="slide">
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
            <Button title="CANCEL" color="red" onPress={props.onCancel} />
        
      </View>
      </Modal>

    )
    
}

const styles = StyleSheet.create({
    inputContainer: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
      },
      inputTask: {
        borderColor: 'black',
        borderWidth: 1,
        width: '80%',
        paddingHorizontal: 10,
        marginBottom: 10

      }
});

export default InputForm;