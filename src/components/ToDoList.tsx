import React, { useState } from "react";
import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';

import { ToDoItem } from "./ToDoItem";

export function ToDoList() {
  const [todos, setTodos] = useState<string[]>([]);


  function addNewTodo(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault();
    const todoInput = event.currentTarget.elements.namedItem("todo")! as HTMLInputElement;
    const todo = todoInput.value;
    setTodos((t) => {
      if (!todo) {
        return t;
      }
      return [...t, todo];
    });

    todoInput.value = "";
  }

  function resetAllTodos() {
    setTodos([]);
  }

  function deleteTodo(index: number) {
    setTodos((t) => {
      return t.filter((t, i) => {
        return i !== index;
      });
    });
  }

  return (
    <div>
      <form onSubmit={addNewTodo}>
        <TextField name="todo"  id="standard-basic" size="small"  label="Add Task..." variant="standard"/>{' '}
        <Button type="submit" variant="contained">send</Button>{' '}
        <Button type="button" variant="contained" onClick={resetAllTodos}>
          reset
        </Button>
      </form>
	  
      <ul>
        {todos.map((todo, index) => {
          return (
            <ToDoItem
              key={index}
              index={index}
              todo={todo}
              onDelete={deleteTodo}
			  isChecked={false}
            />
          );
        })}
      </ul>
    </div>
  );
}
