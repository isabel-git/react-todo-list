import React, { useState } from "react";
import { ToDoItem } from "./ToDoItem";

export function ToDoList() {
  const [todos, setTodos] = useState<string[]>([]);

  function addNewTodo(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault();
    const todoInput = event.currentTarget.elements.namedItem("todo")! as HTMLInputElement;
	const todo =  todoInput.value
    setTodos((t) => {
      return [...t, todo];
    });

    todoInput.value = ''
  }
  function resetAllTodos() {
    setTodos([]);
  }
  return (
    <div>
      <form onSubmit={addNewTodo}>
        <input type="text" name="todo" placeholder="Add Task..." />
        <button>send</button>
        <button type="button" onClick={resetAllTodos}>
          reset
        </button>
      </form>
      <ul>
        {todos.map((todo, i) => {
          return <ToDoItem key={i} todo={todo} />;
        })}
      </ul>
    </div>
  );
}
