import React from 'react';
import TextField from "@material-ui/core/TextField";
import {v4} from 'uuid';
import IconButton from '@material-ui/core/IconButton';
import {AiFillFileAdd} from 'react-icons/ai';

const Form = ({inputProject, setInputProject, projects, setProjects}) => {

    const handleInputProject = (e) => {
        let input = e.target.value;
        setInputProject(input);
    };
    
    const submitProjectInput = (e) => {
        e.preventDefault();
        setProjects([...projects, {task: inputProject.trim(), completed: false, id: v4()}]);
        setInputProject('');
    };
   
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
        <IconButton type='submit' onClick={submitProjectInput} >
            <AiFillFileAdd style={{color: 'white'}} />
        </IconButton>
        </form>
    );
}

export default Form;