import React from 'react';
import { GatsbyImage } from 'gatsby-plugin-image';
import { Link } from 'gatsby';
import './project.scss';

import AdobeXdImage from '../images/AdobeXdImage';
import DiscogsImage from '../images/DiscogsImage';
import FirebaseImage from '../images/FirebaseImage';
import JavaScriptImage from '../images/JavaScriptImage';
import LottieImage from '../images/LottieImage';
import MqttImage from '../images/MqttImage';
import NodeImage from '../images/NodeImage';
import PythonImage from '../images/PythonImage';
import PiImage from '../images/PiImage';
import ReactImage from '../images/ReactImage';
import ReduxImage from '../images/ReduxImage';
import SassImage from '../images/SassImage';
import TypeScriptImage from '../images/TypeScriptImage';

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
  const nameToImageMap = {
    'adobexd.png': <AdobeXdImage />,
    'discogs.png': <DiscogsImage />,
    'firebase.png': <FirebaseImage />,
    'javascript.png': <JavaScriptImage />,
    'lottie.png': <LottieImage />,
    'mqtt.png': <MqttImage />,
    'nodejs.png': <NodeImage />,
    'python.png': <PythonImage />,
    'raspberrypi.png': <PiImage />,
    'react.png': <ReactImage />,
    'redux.png': <ReduxImage />,
    'sass.png': <SassImage />,
    'typescript.png': <TypeScriptImage />,
  };

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
              {nameToImageMap[tech.techImgName]}
            </figure>
            <label>{tech.name}</label>
          </li>
        ))}
      </ul>
    </li>
  );
};

export default Project;
