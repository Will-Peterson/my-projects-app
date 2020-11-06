import React from 'react';
import TextField from "@material-ui/core/TextField";
import {v4} from 'uuid';
import IconButton from '@material-ui/core/IconButton';
import {AiFillFileAdd} from 'react-icons/ai';

const Form = ({inputProject, setInputProject, projects, setProjects}) => {

    const handleInputProject = (e) => {
        setInputProject(e.target.value);
    };
    
    const submitProjectInput = (e) => {
        if (inputProject !== '') {
            e.preventDefault();
            setProjects([...projects, {task: inputProject.trim(), completed: false, id: v4()}]);
            setInputProject('');
        } else {
            e.preventDefault();
            return null;
        } 
    };
   
    return (
        <form noValidate autoComplete="off" onSubmit={submitProjectInput}>
        <TextField
            inputProps={{maxLength: 20}}
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
        <br/>
        <div style={{color: 'white', marginBottom: '50px', float: 'right', fontSize: '.5rem'}}>{20 - inputProject.length} characters remaining</div>
        </form>
    );
}

export default Form;