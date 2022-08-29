import React, { useState } from "react";
import ListItem from "@mui/material/ListItem";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemText from "@mui/material/ListItemText";
import IconButton from "@mui/material/IconButton";
import DeleteIcon from "@mui/icons-material/Delete";
import { Checkbox, ListItemIcon, Paper } from "@mui/material";
import EditTodoDialog from "./../EditTodoDialog";

export default function TodoItem(props) {
  const [openDialog, setOpenDialog] = useState(false);

  const dialogHandler = () => {
    setOpenDialog(!openDialog);
  };
  //a
  return (
    <>
      <EditTodoDialog
        openDialog={openDialog}
        dialogHandler={dialogHandler}
        noteOld={props.todo}
        editTodo={props.editTodo}
        style={props.style}
      />

      <Paper style={{ padding: "0.1em 0em", background: props.style }}>
        <ListItem
          style={{ background: props.style }}
          secondaryAction={
            <IconButton
              edge="end"
              aria-label="delete"
              onClick={() => props.deleteTodo(props.todo.id)}
            >
              <DeleteIcon style={{ color: "white" }} />
            </IconButton>
          }
          disablePadding
        >
          <ListItemButton role={undefined} dense>
            <ListItemIcon>
              <Checkbox
                checked={props.checked}
                onClick={() => props.marketTodo(props.todo)}
                edge="start"
                tabIndex={-1}
                style={{ color: "white" }}
                disableRipple
              />
            </ListItemIcon>
            <ListItemText
              primary={props.todo.text}
              style={{
                color: "white",
                padding: "0.3em",
                display: "flex",
                alignItems: "center",
              }}
              onClick={() => setOpenDialog(true)}
            />
          </ListItemButton>
        </ListItem>
      </Paper>
    </>
  );
}
//c
