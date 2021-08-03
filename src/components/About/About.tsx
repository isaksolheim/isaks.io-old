import React from 'react';
import './about.scss';

const About = () => (
  <React.Fragment>
    <h2>About 👋</h2>
    <p>
      Hi, I'm Isak, a front-end developer currently living in Trondheim. I love
      problem solving and building things for the web!
    </p>

    <p>Here are a few technologies I've been working with recently:</p>
    <ul className='tech-list'>
      <li>
        <a href='https://www.typescriptlang.org/'>TypeScript</a>
      </li>
      <li>
        <a href='https://reactjs.org/'>React</a>
      </li>
      <li>
        <a href='https://redux.js.org/'>Redux</a>
      </li>
      <li>
        <a href='https://testing-library.com/'>React Testing Library</a>
      </li>
      <li>
        <a href='https://storybook.js.org/'>Storybook</a>
      </li>
      <li>
        <a href='https://firebase.google.com/'>Firebase</a>
      </li>
    </ul>
  </React.Fragment>
);

export default About;
