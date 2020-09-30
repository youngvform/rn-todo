import useStore from '../useStore';
import React, {useState} from 'react';
import {Button, StyleSheet, TextInput, View} from 'react-native';

const TodoInput = () => {
  const {todo} = useStore();
  const [content, setContent] = useState<string>('');

  const onClick = () => {
    todo.addTodo(content);
    setContent('');
  };

  const onChange = (text: string) => {
    setContent(text);
  };

  return (
    <View style={styles.container}>
      <TextInput
        value={content}
        onChangeText={onChange}
        placeholder="Please type a todo"
        style={styles.input}
      />
      <Button title="Insert" onPress={onClick} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    margin: 20,
  },
  input: {
    flex: 1,
  },
});

export default TodoInput;
