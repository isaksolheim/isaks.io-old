import React from 'react';
import './project.scss';
import { Link } from 'gatsby';

interface ProjectProps {
  title: string;
  aboutText: string;
  imgName: string;
  techUsed: {
    name: string;
    techImgName: string;
  }[];
  projectLink?: string;
}

const Project = ({
  title,
  aboutText,
  imgName,
  techUsed,
  projectLink,
}: ProjectProps) => (
  <li className='project-container'>
    {projectLink ? (
      <Link to={projectLink}>View project</Link>
    ) : (
      <p className='top-right-text'>In development</p>
    )}
    <img
      src={require(`../../assets/projectImages/${imgName}`)}
      alt='project'
      className='project-image'
    />
    <h3>{title}</h3>
    <p>{aboutText}</p>
    <h4>Technologies used</h4>
    <ul>
      {techUsed.map((tech) => (
        <li key={tech.name}>
          <img src={require(`../../assets/techImages/${tech.techImgName}`)} />
          <label>{tech.name}</label>
        </li>
      ))}
    </ul>
  </li>
);

export default Project;
