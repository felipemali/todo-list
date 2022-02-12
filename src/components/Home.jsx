import React, { useState, useEffect } from "react";
import { Container, Paper } from "@mui/material";
import "./notes.css";
import Form from "./Form";
import Notes from "./Notes";
import MenuBookIcon from "@mui/icons-material/MenuBook";
import Snackbar from "./Snackbar";

export default function Home() {
  const [todos, setTodos] = useState([]);
  const [todoexcluded, setTodoexcluded] = useState([]);
  const [tasks, setTasks] = useState([]);
  const [valueSearch, setValueSearch] = useState("");

  const addTodo = (todo) => {
    setTodos([...todos, todo]);
    setTasks([...tasks, todo]);
  };

  // Tem o useSate [todos/setTodos] ele é o arrray principal.
  // é criado um onChange no texField pegando o valor digitado e é enviado para
  // outro useState o [text/setText].
  // no click do button é passado pelo evento onClick o [text] para uma function
  //  chamada todoCreate, nessa function é criada uma const e lá em cima é criado um useState [id/setId] para colocar
  // um id em cada todoItem criado, nessa const possui
  // um objeto text: (com valor text passado) e o id: (id)
  // o id foi feito como, chamando o setID(id +1) toda vez que a function for chamada no evento do click do button
  // a function vai pegar o valor do id e somar + 1.
  // Agora
  // Aqui em cima tem uma function chamada addTodo que recebe a const com o objeto criada no form que acabei de citar
  // com o valor text e o id.
  // essa function vai pegar o que tem no array [todos] e adicionar um novo valor a cada vez que eu clicar no button

  // REFORÇANDO:
  // Cada vez que eu clico no button chama a function createTodo e a createTodo passa a info pra addTodo que está aqui.
  //.

  // agora
  // na Lista ali em baixo eu vou fazer um MAP com o array [todos] que possui os 2 valores o text e o id
  // em cada item que o map passa ele cria uma div com um todoItem passando a key que vai ser o id
  // e na todoItem passa uma info que é a "tarefa", a tarefa é o todo, eu recebo essa tarefa no todoItem.jsx,
  // no icone da lixera que fica no todoItem.jsx tem um evento de onClick que recebe a function (deleteTodo)
  // recebendo como parametro o id e na function (deleteTodo) tem um
  // um filter que é percorido pelo array [todos] e ele percorre até que quando o id daquele momento for igual o id
  // que está no array [todos] e o todoItem é excluido.

  // Onchange do TextField > [text]
  // Onclick do button > todoCreate > addTodo > pro List aqui embaixo > Delete Icon

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
  //#e2e2e2

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
      <Snackbar valueInputSearch={valueInputSearch} />

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
