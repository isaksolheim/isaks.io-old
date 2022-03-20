import React from 'react';
import Project from '../Project/Project';
import './projects.scss';

const Projects = ({
  myVinylImg,
  beerInReviewImg,
  cloudImg,
}: {
  myVinylImg: Object;
  beerInReviewImg: Object;
  cloudImg: Object;
}) => (
  <React.Fragment>
    <h2>Projects 🚀</h2>
    <ul className='projects-container'>
      <Project
        title='Cloud'
        aboutText='Physical cloud that waters plants and drops beer.'
        img={cloudImg}
        techUsed='TypeScript, Node, Python, Raspberry PI, MQTT'
        projectLink='/cloud'
      />
      <hr />
      <Project
        title='MyVinyl'
        aboutText='iOS / Android app used to track vinyl plays.'
        img={myVinylImg}
        techUsed='TypeScript, React Native, Redux, Firebase, Discogs API, Adobe XD'
        projectLink='https://www.myvinyl.app'
      />
      <hr />
      <Project
        title='Beer In Review'
        aboutText='iOS / Android app used to track and visualize beer consumtion.'
        img={beerInReviewImg}
        techUsed='TypeScript, React Native, Lottie'
      />
    </ul>
  </React.Fragment>
);

export default Projects;
