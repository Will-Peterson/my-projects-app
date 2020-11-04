import React from 'react';
import TextField from "@material-ui/core/TextField";
import {v4} from 'uuid';

const Form = ({inputProject, setInputProject, projects, setProjects}) => {

    const handleInputProject = (e) => {
        setInputProject(e.target.value);
    };
    
    const submitProjectInput = (e) => {
        e.preventDefault();
        setProjects([...projects, {task: inputProject, completed: false, id: v4()}]);
        setInputProject('');
    };
    console.log(setInputProject);
    return (
        <form noValidate autoComplete="off">
        
        <TextField
            label="Add Project"
            variant="filled"
            color="primary"
            type='text'
            value={inputProject}
            onChange={handleInputProject}
            />
        <button type='submit' onClick={submitProjectInput} >Add</button>
        </form>
    );
}

export default Form;