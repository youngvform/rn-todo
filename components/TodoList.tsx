import React from 'react';
import useStore from '../useStore';
import {useObserver} from 'mobx-react-lite';
import {ScrollView, StyleSheet} from 'react-native';
import TodoItem from './TodoItem';

const TOdoList = () => {
  const {
    todo: {todoData},
  } = useStore();
  return useObserver(() => (
    <ScrollView style={styles.container}>
      {todoData.map((todo) => (
        <TodoItem data={todo} key={todo.id} />
      ))}
    </ScrollView>
  ));
};

const styles = StyleSheet.create({
  container: {
    margin: 50,
  },
});

export default TOdoList;
