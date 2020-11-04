import React from 'react';
import Project from './Project';

const ProjectList = ({projects, editHandler, completedHandler, deleteHandler}) => {
  return (
    <div>
      {projects.map((project) => (
        <Project 
          project={project}
          editHandler={editHandler}
          completedHandler={completedHandler}
          deleteHandler={deleteHandler}
          key={project.id}
        />
      ))}
    </div>
  );
} 

export default ProjectList;