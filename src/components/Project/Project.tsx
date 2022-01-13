import React from 'react';
import { GatsbyImage } from 'gatsby-plugin-image';
import { Link } from 'gatsby';
import './project.scss';
import ImageMap from '../ImageMap/ImageMap';

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
}: ProjectProps) => {
  return (
    <li className='project-container'>
      {projectLink ? (
        <Link to={projectLink}>View project</Link>
      ) : (
        <p className='top-right-text'>In development</p>
      )}
      <GatsbyImage
        image={img.childImageSharp.gatsbyImageData}
        alt='project'
        className='project-image'
      />
      <h3>{title}</h3>
      <p>{aboutText}</p>
      <h4>Technologies used</h4>
      <ul>
        {techUsed.map((tech) => (
          <li key={tech.name}>
            <figure className='image-container'>
              <ImageMap imgName={tech.techImgName} />
            </figure>
            <label>{tech.name}</label>
          </li>
        ))}
      </ul>
    </li>
  );
};

export default Project;
