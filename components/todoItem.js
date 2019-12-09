import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

const TodoItem = props => {
    return (
        <View style={styles.todoItem}>
            <Text>{props.task}</Text>
        </View>
    )


}

const styles = StyleSheet.create({
    todoItem: {
        paddingHorizontal: 10,
        paddingVertical: 5,
        marginTop: 10,
        backgroundColor: '#ccc',
        borderColor: 'black',
        borderWidth: 1
        }
});

export default TodoItem;