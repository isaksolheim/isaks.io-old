import React from 'react';
import { GatsbyImage } from 'gatsby-plugin-image';
import { Link } from 'gatsby';
import './project.scss';
import ImageMap from '../ImageMap/ImageMap';

interface ProjectProps {
  title: string;
  aboutText: string;
  img: Object;
  techUsed: string;
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
    <Link to={projectLink} className='project-container'>
      <li>
        <p className='top-right-text'>
          {projectLink ? 'Live' : 'In development'}
        </p>
        <div className='section-container'>
          <div className='text-content'>
            <h3>{title}</h3>
            <p>{aboutText}</p>
            <p>
              <b>Tech:</b> {techUsed}
            </p>
          </div>
          <GatsbyImage
            image={img.childImageSharp.gatsbyImageData}
            alt='project'
            className='project-image'
          />
        </div>
      </li>
    </Link>
  );
};

export default Project;
