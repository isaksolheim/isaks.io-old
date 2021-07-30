import React from 'react';
import Project from '../Project/Project';

const Projects = () => (
  <React.Fragment>
    <h2>Projects</h2>
    <Project
      title='MyVinyl'
      aboutText='iOS and Android app used to track vinyl plays.'
      imgName='myvinyl.png'
      techUsed={[
        { name: 'TypeScript', techImgName: 'typescript.png' },
        { name: 'React Native', techImgName: 'react.png' },
        { name: 'Redux', techImgName: 'redux.png' },
        { name: 'Sass', techImgName: 'sass.png' },
        { name: 'Firebase', techImgName: 'firebase.png' },
        { name: 'Discogs API', techImgName: 'discogs.png' },
      ]}
    />
  </React.Fragment>
);

export default Projects;
