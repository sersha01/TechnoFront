import "./tasks.css";
import React, { useState, useEffect } from "react";
import TodoList from "./TodoList";
import swal from "sweetalert2";
import TextField from "@mui/material/TextField";
window.Swal = swal;

function CreateTodo() {
  const [todo, setTodo] = useState({ title: "", done: false });
  const [todoArr, setTodoArr] = useState([]);
  let todos = localStorage.hasOwnProperty("todos")
    ? JSON.parse(localStorage.getItem("todos"))
    : [];

  const [val, setVal] = useState();

  useEffect(() => {
    setVal();
  }, []);

  const onChange = (event) => {
    setVal(event.target.value);
    let { value } = event.target;
    let obj = {};
    obj.title = value;
    obj.done = false;
    setTodo(obj);
  };
  const createTodo = (event) => {
    const { name } = event.target;
    console.log(name);
    if (event.key === "Enter" || name === "addTodo") {
      if (todo.title !== "") {
        todos.unshift(todo);
        localStorage.setItem("todos", JSON.stringify(todos));
        setTodo({ title: "", done: false });

        setVal("");
      } else {
      }
    }
  };
  const completeTodo = (i) => {
    if (todos[i].done !== true) {
      todos[i].done = true;
      localStorage.setItem("todos", JSON.stringify(todos));
      setTodoArr(todos);
    }
  };
  const deleteTodo = (i) => {
    todos.splice(i, 1);
    localStorage.setItem("todos", JSON.stringify(todos));
    setTodoArr(todos);
  };

  return (
    <>
      <div className="box">
        <div className="container-fluid m-0 p-0 d-flex justify-content-center">
          <TextField
            id="outlined-basic"
            label="Add task"
            variant="outlined"
            placeholder="Enter Task here"
            className="todoinput"
            name="todo"
            value={val}
            onKeyPress={createTodo}
            onChange={onChange}
          />

          <button
            className="btn-addTodo"
            style={{ height: "55px" }}
            type="button"
            name="addTodo"
            onClick={createTodo}
          >
            Add Todo
          </button>
        </div>
      </div>
      <TodoList
        todoArr={todoArr}
        completeTodo={completeTodo}
        deleteTodo={deleteTodo}
      />
    </>
  );
}

export default CreateTodo;
