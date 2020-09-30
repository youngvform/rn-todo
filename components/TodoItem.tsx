import React from 'react';
import {Button, StyleSheet, Text, View} from 'react-native';
import {TodoData} from '../store/todo';
import useStore from '../useStore';

interface Props {
  data: TodoData;
}

const TodoItem = ({data}: Props) => {
  const {todo} = useStore();

  const removeItem = () => {
    todo.removeTodo(data.id);
  };

  return (
    <View style={styles.container}>
      <Text style={styles.content}>{data.content}</Text>
      <Button title="X" onPress={removeItem} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    margin: 10,
    borderColor: 'black',
    borderBottomWidth: 1,
    alignItems: 'center',
  },
  content: {
    flex: 1,
    fontSize: 24,
  },
});

export default TodoItem;
