import React from 'react';
import Img from 'gatsby-image';
import { Link } from 'gatsby';
import './project.scss';

interface ProjectProps {
  title: string;
  aboutText: string;
  img: Object;
  techUsed: {
    name: string;
    techImgName: string;
  }[];
  projectLink?: string;
}

const Project = ({
  title,
  aboutText,
  img,
  techUsed,
  projectLink,
}: ProjectProps) => (
  <li className='project-container'>
    {projectLink ? (
      <Link to={projectLink}>View project</Link>
    ) : (
      <p className='top-right-text'>In development</p>
    )}
    <Img
      fluid={img.childImageSharp.fluid}
      alt='project'
      className='project-image'
    />
    <h3>{title}</h3>
    <p>{aboutText}</p>
    <h4>Technologies used</h4>
    <ul>
      {techUsed.map((tech) => (
        <li key={tech.name}>
          <img src={require(`../../images/techImages/${tech.techImgName}`)} />
          <label>{tech.name}</label>
        </li>
      ))}
    </ul>
  </li>
);

export default Project;
