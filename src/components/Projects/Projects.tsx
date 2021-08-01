import React from 'react';
import Project from '../Project/Project';
import './projects.scss';

const Projects = () => (
  <React.Fragment>
    <h2>Projects 🚀</h2>
    <ul className='projects-container'>
      <Project
        title='MyVinyl'
        aboutText='iOS / Android app used to track vinyl plays.'
        imgName='myvinyl.png'
        techUsed={[
          { name: 'TypeScript', techImgName: 'typescript.png' },
          { name: 'React Native', techImgName: 'react.png' },
          { name: 'Redux', techImgName: 'redux.png' },
          { name: 'Firebase', techImgName: 'firebase.png' },
          { name: 'Discogs API', techImgName: 'discogs.png' },
          { name: 'Adobe XD', techImgName: 'adobexd.png' },
        ]}
        projectLink='https://www.myvinyl.app'
      />
      <hr />
      <Project
        title='Beer In Review'
        aboutText='iOS / Android app used to track and visualize beer consumtion.'
        imgName='beerinreview.png'
        techUsed={[
          { name: 'TypeScript', techImgName: 'typescript.png' },
          { name: 'React Native', techImgName: 'react.png' },
          { name: 'Lottie', techImgName: 'lottie.png' },
        ]}
      />
      <hr />
      <Project
        title='Cloud'
        aboutText='Physical cloud that waters plants and drops beer.'
        imgName='cloud.png'
        techUsed={[
          { name: 'TypeScript', techImgName: 'typescript.png' },
          { name: 'Node', techImgName: 'nodejs.png' },
          { name: 'Python', techImgName: 'python.png' },
          { name: 'Raspberry PI', techImgName: 'raspberrypi.png' },
          { name: 'MQTT', techImgName: 'mqtt.png' },
        ]}
      />
    </ul>
  </React.Fragment>
);

export default Projects;
