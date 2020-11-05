import React, {useState} from "react";
import "./App.css";
import { ThemeProvider } from "@material-ui/core/styles";
import theme from "./theme";
import ProjectList from './components/ProjectList';
import Form from './components/Form';
import Container from '@material-ui/core/Container';
import Grid from '@material-ui/core/Grid';

function App() {
  const [inputProject, setInputProject] = useState('');
  const [projects, setProjects] = useState([]);

  const updateProject = (id) => {
    console.log('update project CONNECTED')
  }

  const completedProject = (id) => {
    setProjects(projects.map((project) => {
      if (project.id === id) {
        return {...project, completed: !project.completed};
      };
      return project;
    }))
  }
  
  const deleteProject = (id) => {
    setProjects(projects.filter((project) => project.id !== id));
  }

  return (
    <>
      <ThemeProvider theme={theme}>
        <Container maxWidth='md'>
          <Grid> 

          <h1 style={{ marginBottom: "100px" }}>My Projects</h1>
          <Form 
            inputProject={inputProject} 
            setInputProject={setInputProject} 
            projects={projects}
            setProjects={setProjects}  
            />
          <ProjectList 
            projects={projects}
            updateProject={updateProject}
            completedProject={completedProject}
            deleteProject={deleteProject}
            />
          </Grid>
        </Container>
      </ThemeProvider>
    </>
  );
}

export default App;
