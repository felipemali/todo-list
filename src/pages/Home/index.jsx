import React, { useState, useEffect } from "react";
import { Container, Paper } from "@mui/material";
import Form from "../../components/Form";
import Notes from "../../components/Notes";
import MenuBookIcon from "@mui/icons-material/MenuBook";
import Appbar from "../../components/Appbar";

export default function Home() {
  const [todos, setTodos] = useState([]);
  const [todoexcluded, setTodoexcluded] = useState([]);
  const [tasks, setTasks] = useState([]);
  const [valueSearch, setValueSearch] = useState("");

  const addTodo = (todo) => {
    setTodos([...todos, todo]);
    setTasks([...tasks, todo]);
  };

  const deleteTodo = (id) => {
    const filteredTodos = todos.filter((todo) => todo.id !== id);
    setTodos(filteredTodos);

    const filteredTask = tasks.filter((todo) => todo.id !== id);
    setTasks(filteredTask);
  };

  const deleteTodoDone = (id) => {
    const filtered = todoexcluded.filter((todo) => todo.id !== id);
    setTodoexcluded(filtered);
  };

  const editTodo = (id, newText, color) => {
    let todosArray = [...todos];

    for (let i in todosArray) {
      if (todosArray[i].id === id) {
        todosArray[i].text = newText;
      }
    }

    setTodos(todosArray);
  };

  const marketTodo = (obj) => {
    const marketTodos = todos.filter((todo) => todo.id !== obj.id);
    setTodos(marketTodos);
    setTodoexcluded([...todoexcluded, obj]);

    const marketTask = tasks.filter((todo) => todo.id !== obj.id);
    setTasks(marketTask);
  };

  const wordFiltered = (e) => {
    setTodos(e);
  };

  const valueInputSearch = (e) => {
    setValueSearch(e);
  };

  return (
    <div>
      <Appbar valueInputSearch={valueInputSearch} />

      <h2 style={{ color: "#fff" }}>
        <span
          style={{
            marginRight: "0.3em",
            borderBottom: "1.5px dashed #fff",
            color: "#fff",
          }}
        >
          Notepad
        </span>
        <MenuBookIcon />
      </h2>

      <Form
        addTodo={addTodo}
        todos={todos}
        tasks={tasks}
        wordFiltered={wordFiltered}
        valueSearch={valueSearch}
      />

      <Notes
        todos={todos}
        todoexcluded={todoexcluded}
        style={todoexcluded.color}
        deleteTodoDone={deleteTodoDone}
        editTodo={editTodo}
        deleteTodo={deleteTodo}
        marketTodo={marketTodo}
      />
    </div>
  );
}
