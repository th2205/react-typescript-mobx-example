import React, { useState } from "react";
import { useStore } from "../stores";
import { useObserver } from "mobx-react";
import { v4 as uuidv4 } from "uuid";
import "./Todo.scss";

export default function Todo() {
  const { todo: todoStore } = useStore();
  const [text, setText] = useState("");

  const onSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    const todo = {
      id: uuidv4(),
      content: text,
      isCompleted: false,
    };

    todoStore.addTodo(todo);
    setText("");
  };

  return useObserver(() => (
    <div className="todo-bg">
      <div className="todo-container">
        <p className="todo-title">{`오늘 할일 ${todoStore.todos.length}`}</p>
        <section className="todo-section">
          {todoStore.todos.length ? (
            todoStore.todos.map((todo) => (
              <div key={todo.id} className="todo-content">
                <input
                  type="checkbox"
                  checked={todo.isCompleted}
                  onChange={() => todoStore.completeTodo(todo.id)}
                />
                <span className={todo.isCompleted ? "todo-through" : ""}>
                  {todo.content}
                </span>
                <button onClick={() => todoStore.removeTodo(todo.id)}>x</button>
              </div>
            ))
          ) : (
            <p>완료!</p>
          )}
        </section>
        <form onSubmit={onSubmit}>
          <input
            type="text"
            placeholder="입력"
            value={text}
            onChange={(e) => setText(e.target.value)}
          />
          <button type="submit">등록</button>
        </form>
      </div>
    </div>
  ));
}
