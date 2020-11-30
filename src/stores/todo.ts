import { makeAutoObservable } from "mobx";

type TodoType = {
  id: string;
  content: string;
  isCompleted: boolean;
};

export class Todo {
  todos: TodoType[] = [];

  constructor() {
    makeAutoObservable(this);
  }

  addTodo(todo: TodoType) {
    this.todos.push(todo);
  }

  completeTodo(id: string) {
    this.todos.forEach((todo) => {
      if (todo.id === id) todo.isCompleted = !todo.isCompleted;
    });
  }

  removeTodo(id: string) {
    this.todos = this.todos.filter((todo) => todo.id !== id);
  }
}
