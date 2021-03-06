import { Button, Container, Paper, TextField } from "@mui/material";
import React, { useEffect } from "react";
import { useRef } from "react";
import { useState } from "react";
import SendIcon from "@mui/icons-material/Send";

export default function Form(props) {
  const [text, setText] = useState();
  const [id, setId] = useState(0);
  const [color, setColor] = useState("#efcb67");

  function useKey(key, cb) {
    const callBackRef = useRef(cb);
    // na vdd é assim
    useEffect(() => {
      callBackRef.current = cb;
    });

    useEffect(() => {
      function handle(event) {
        if (event.code === key) {
          callBackRef.current(event);
        }
      }

      document.addEventListener("keypress", handle);
      return () => document.removeEventListener("keypress", handle);
    }, [key]);
  }

  const todoFiltered = () => {
    const searchedWord = props.todos.filter((task) =>
      task.text.toLowerCase().includes(props.valueSearch)
    );

    if (props.valueSearch) {
      props.wordFiltered(searchedWord);
    } else {
      props.wordFiltered(props.tasks);
    }
  };
  useEffect(() => {
    todoFiltered();
  }, [props.valueSearch]);

  const todoCreate = () => {
    const todoObj = { text: text, id: id, color: color };
    setId(id + 1);

    props.addTodo(todoObj);
    const colors = [
      "#002545",
      "#14808c", //
      "#ed874f",
      "#781e1a",
      "#6f72e3",
      "#674075 ",
      "#703064 ",
      "#2f091e ", //
      "#bc6021",
      "#512948", //
      "#122b4d",
    ];

    const randomIndex = Math.floor(Math.random() * colors.length);
    const randomColor = colors[randomIndex];
    setColor(randomColor);
    document.getElementById("outlined-basic").value = null;
  };

  return (
    <div>
      <Container>
        <Paper
          style={{
            border: "5px solid #fff",
            marginTop: "1em",
            padding: "0.2em",
            marginLeft: "0.5em",
            marginRight: "0.5em",
          }}
        >
          <div
            style={{
              display: "flex",
              justifyContent: "center",
            }}
          >
            <TextField
              style={{ fontFamily: "cursive", marginRight: "0.1em" }}
              id="outlined-basic"
              label=" task..."
              variant="outlined"
              fullWidth
              onChange={(e) => setText(e.target.value)}
              // onChange={(e) => props.todoOrder(e.target.value)}
            />

            <Button
              style={{ border: "1px solid red" }}
              variant="outline"
              endIcon={<SendIcon style={{ color: "#004d59" }} />}
              style={{ color: "#1d97c4" }}
              onKeyPress={useKey("Enter", todoCreate)}
              onClick={() => todoCreate(text)}
            ></Button>
          </div>
        </Paper>
      </Container>
    </div>
  );
}
