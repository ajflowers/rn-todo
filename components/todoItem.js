import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';

const TodoItem = props => {
    return (
        <TouchableOpacity activeOpacity={0.8} onPress={props.onDelete} >
            <View style={styles.todoItem} >
                <Text>{props.task}</Text>
            </View>
        </TouchableOpacity>
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