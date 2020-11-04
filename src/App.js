import React, {useState} from "react";
import "./App.css";
import { ThemeProvider } from "@material-ui/core/styles";
import theme from "./theme";
import ProjectList from './components/ProjectList';
import Form from './components/Form';

function App() {
  const [inputProject, setInputProject] = useState('');
  const [projects, setProjects] = useState([]);




  return (
    <>
      <ThemeProvider theme={theme}>
        <h1 style={{ marginBottom: "100px" }}>My Projects</h1>
        <Form 
          inputProject={inputProject} 
          setInputProject={setInputProject} 
          projects={projects}
          setProjects={setProjects}  
        />
        <ProjectList 
          projects={projects}  
        />
      </ThemeProvider>
    </>
  );
}

export default App;
