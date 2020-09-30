import {observable} from 'mobx';

export interface TodoData {
  id: number;
  content: string;
  checked: boolean;
}

export interface Todo {
  todoData: TodoData[];
  currentId: number;
  addTodo: (content: string) => void;
  removeTodo: (id: number) => void;
}

export const todo = observable<Todo>(<Todo>{
  todoData: [],
  currentId: 0,
  addTodo(content) {
    this.todoData.push({id: this.currentId, content, checked: false});
    this.currentId++;
  },
  removeTodo(id) {
    const index = this.todoData.findIndex((todo) => todo.id === id);
    if (id > -1) {
      this.todoData.splice(index, 1);
    }
  },
});
