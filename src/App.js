import React from "react";
import "./App.css";
import Button from "@material-ui/core/Button";
import IconButton from "@material-ui/core/IconButton";
import Tooltip from "@material-ui/core/Tooltip";
import TextField from "@material-ui/core/TextField";
import { ThemeProvider } from "@material-ui/core/styles";
import { FaRegEdit, FaCheck } from "react-icons/fa";
import { MdDeleteForever } from "react-icons/md";
import theme from "./theme";

function App() {
  const editHandler = () => {
    console.log("update works");
  };

  const completedHandler = () => {
    console.log("completed works");
  };

  const deleteHandler = () => {
    console.log("delete works");
  };

  return (
    <>
      <ThemeProvider theme={theme}>
        <h1 style={{ marginBottom: "100px" }}>My Projects</h1>
        <form noValidate autoComplete="off">
          <div>
            <TextField
              label="Add Project"
              variant="filled"
              color="primary"
            />
          </div>
        </form>
        <Button variant="contained" color="primary">
          <div className="project-container">wash dishes</div>
          <Tooltip title="Edit">
            <IconButton onClick={editHandler}>
              <FaRegEdit style={{ color: "white" }} />
            </IconButton>
          </Tooltip>
          <Tooltip title="Mark as Completed">
            <IconButton onClick={completedHandler}>
              <FaCheck style={{ color: "white" }} />
            </IconButton>
          </Tooltip>
          <Tooltip title="Delete">
            <IconButton onClick={deleteHandler}>
              <MdDeleteForever style={{color: 'white'}} />
            </IconButton>
          </Tooltip>
        </Button>
      </ThemeProvider>
    </>
  );
}

export default App;
