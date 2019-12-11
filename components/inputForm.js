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
            <View style={styles.buttonContainer}>
              <View style={styles.button}>
                <Button title="ADD" onPress={() => {
                  props.handleSubmit(newTask);
                  setNewTask('');
              }}/>
              </View>
              <View style={styles.button}>
                <Button title="CANCEL" color="red" onPress={props.onCancel} />
              </View>
            </View>
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

  },
  buttonContainer: {
    flexDirection: 'row',
    width: '50%',
    justifyContent: 'space-around'
  },
  button: {
    width: '40%'
  }

});

export default InputForm;