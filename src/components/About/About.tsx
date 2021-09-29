import React from 'react';
import './about.scss';

const About = () => (
  <React.Fragment>
    <h2>About 👋</h2>
    <p>
      Hi, I'm Isak, a software developer currently living in Trondheim. I love
      problem solving and building things for the web!
    </p>

    <p>
      <b>Current projects:</b>
    </p>
    <ul>
      <li>
        🛰️ I'm learning C and building a satellite @{' '}
        <a href='https://orbitntnu.com'>Orbit</a>
      </li>
      <li>
        💻 I'm building a tool for students with Svelte and Tailwind @{' '}
        <a href='https://github.com/dotkom'>Dotkom</a>
      </li>
      <li>
        🔑 I'm developing and maintaing a CMS for the app Oslonøkkelen @{' '}
        <a href='https://www.oslo.kommune.no/etater-foretak-og-ombud/oslo-origo/#gref'>
          Oslo Origo
        </a>
      </li>
    </ul>

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
        <a href='https://storybook.js.org/'>Storybook</a>
      </li>
      <li>
        <a href='https://svelte.dev/'>Svelte</a>
      </li>
      <li>
        <a href='https://testing-library.com/'>React Testing Library</a>
      </li>
      <li>
        <a href='https://firebase.google.com/'>Firebase</a>
      </li>
      <li>
        <a href='https://www.gatsbyjs.com/'>Gatsby</a>
      </li>
      <li>
        <a href='https://kotlinlang.org/'>Kotlin</a>
      </li>
      <li>
        <a href='https://tailwindcss.com/'>Tailwind</a>
      </li>
    </ul>
  </React.Fragment>
);

export default About;
