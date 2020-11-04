import React from 'react';
import Button from '@material-ui/core/Button';
import Tooltip from '@material-ui/core/Tooltip';
import IconButton from '@material-ui/core/IconButton';
import {FaCheck, FaRegEdit} from 'react-icons/fa';
import {MdDeleteForever} from 'react-icons/md';

const Project = ({project}) => {
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
        <div>
            <Button variant="contained" color="primary">
          <div className="project-container">{project.task}</div>
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
        </div>
    );

}

export default Project;