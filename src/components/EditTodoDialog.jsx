import React, { useState } from "react";
import Button from "@mui/material/Button";
import Dialog from "@mui/material/Dialog";
import DialogActions from "@mui/material/DialogActions";
import DialogContent from "@mui/material/DialogContent";
import DialogTitle from "@mui/material/DialogTitle";
import Slide from "@mui/material/Slide";
import { TextField } from "@mui/material";

const Transition = React.forwardRef(function Transition(props, ref) {
  return <Slide direction="up" ref={ref} {...props} />;
});

export default function EditTodoDialog(props) {
  const [editedText, setEditedText] = useState(props.noteOld.text);

  const textHandler = () => {
    props.editTodo(props.noteOld.id, editedText);
    props.dialogHandler();
  };

  return (
    <Dialog
      open={props.openDialog}
      TransitionComponent={Transition}
      keepMounted
      onClose={props.dialogHandler}
      aria-describedby="alert-dialog-slide-description"
      fullWidth
    >
      <DialogTitle>{"Edit Note"}</DialogTitle>
      <DialogContent>
        <TextField
          autoFocus
          defaultValue={editedText}
          fullWidth
          onChange={(e) => setEditedText(e.target.value)}
        />
      </DialogContent>
      <DialogActions>
        <Button onClick={props.dialogHandler}>Cancel</Button>
        <Button onClick={textHandler}>Save</Button>
      </DialogActions>
    </Dialog>
  );
}
