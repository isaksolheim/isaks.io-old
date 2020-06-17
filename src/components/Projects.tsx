import React from 'react';

import { Link } from 'react-router-dom';
import { stringToSlug } from '../helpers/slugify';
import { projects } from '../helpers/projectsData';

const Projects = () => {
  return (
    <section className='projects'>
      <h1>projects</h1>
      {projects.map(project => (
        <Link
          to={`/projects/${stringToSlug(project.name)}`}
          className='project'
        >
          <img
            src={require(`../assets/${project.imageName}`)}
            alt={project.name}
          />
          <div className='centered'>
            <div className='text'>{project.name}</div>
          </div>
          <div className='info bottom-left'>{project.date}</div>
          <div className='info top-right'>{project.progress}</div>
        </Link>
      ))}
    </section>
  );
};

export default Projects;
