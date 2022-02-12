import React from "react";
import PropTypes from "prop-types";
import Tabs from "@mui/material/Tabs";
import Tab from "@mui/material/Tab";
import Typography from "@mui/material/Typography";
import Box from "@mui/material/Box";
import { Container, List, Paper } from "@mui/material";
import ItemsDone from "./TodoItems";
import TodoItem from "./TodoItems";

function TabPanel(props) {
  const { children, value, index, ...other } = props;

  return (
    <div
      role="tabpanel"
      hidden={value !== index}
      id={`simple-tabpanel-${index}`}
      aria-labelledby={`simple-tab-${index}`}
      {...other}
    >
      {value === index && (
        <Box sx={{ p: 1 }}>
          <Typography>{children}</Typography>
        </Box>
      )}
    </div>
  );
}

TabPanel.propTypes = {
  children: PropTypes.node,
  index: PropTypes.number.isRequired,
  value: PropTypes.number.isRequired,
};

function a11yProps(index) {
  return {
    id: `simple-tab-${index}`,
    "aria-controls": `simple-tabpanel-${index}`,
  };
}

export default function BasicTabs(props) {
  const [value, setValue] = React.useState(0);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  return (
    <>
      <Container maxWidth="lg">
        <Paper style={{ marginLeft: "0.5em", marginRight: "0.5em" }}>
          <Box sx={{ mt: 0.6 }}>
            <Box sx={{ borderColor: "divider" }}>
              <Tabs
                value={value}
                onChange={handleChange}
                aria-label="basic tabs example"
              >
                <Tab
                  style={{ fontStyle: "italic" }}
                  label=" 
              Your "
                  {...a11yProps(0)}
                />
                <Tab
                  style={{ fontStyle: "italic" }}
                  label=" performed"
                  {...a11yProps(1)}
                />
              </Tabs>
            </Box>

            <TabPanel value={value} index={0}>
              <List>
                {props.todos.map((todo) => (
                  <div key={todo.id} style={{ marginTop: "1em" }}>
                    <TodoItem
                      style={todo.color}
                      todo={todo}
                      deleteTodo={props.deleteTodo}
                      editTodo={props.editTodo}
                      marketTodo={props.marketTodo}
                    />
                  </div>
                ))}
              </List>
            </TabPanel>
            <TabPanel value={value} index={1}>
              <List sx={{ marginTop: "1em" }}>
                {props.todoexcluded.map((todo) => (
                  <div style={{ marginTop: "1em" }}>
                    <ItemsDone
                      style={todo.color}
                      deleteTodo={props.deleteTodoDone}
                      editTodo={props.editTodo}
                      todo={todo}
                      checked={"checked"}
                    />
                  </div>
                ))}
              </List>
            </TabPanel>
          </Box>
        </Paper>
      </Container>
    </>
  );
}
// <List sx={{ marginTop: "1em" }}>{props.todoexcluded.text}</List>;
