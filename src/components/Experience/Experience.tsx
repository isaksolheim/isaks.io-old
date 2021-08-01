import React from 'react';
import Project from '../Project/Project';
import './experience.scss';

const Experience = () => (
  <div className='experience-container'>
    <h2>Experience 🎓</h2>
    {/*
    <figure>
      <span className='top-dot' />
      <p className='top-text'>Current</p>
      <span className='line' />
      <span className='bottom-dot' />
      <p className='bottom-text'>2019</p>
    </figure>
    */}
    <div className='content-container'>
      <h3>
        Software Engineer @{' '}
        <a href='https://labs.oslo.kommune.no/'>Oslo Origo</a>
      </h3>
      <p>
        Oslo Origo works to make everyday life for the inhabitants of Oslo a
        little easier and better through the development of personal, accurate,
        and proactive digital services. Oslo Origo has 110+ employees and
        delivers a wide range of different products.
      </p>
      <h4>Oslonøkkelen</h4>
      <p className='light'>2019 - Current</p>
      <img
        src={require('../../assets/projectImages/oslonokkelen.png')}
        alt='oslonøkkelen'
        className='project-image'
      />
      <p>
        Oslonøkkelen is a digital key that gives residents of Oslo expanded and
        easier access to several of the city's services. In a team of 10 people,
        I work as a front-end developer creating a tool used to manage the
        content of the app.
      </p>

      <p>
        Some of the technologies I use while working on this project are{' '}
        <a href='https://www.typescriptlang.org/'>TypeScript</a>,{' '}
        <a href='https://reactjs.org/'>React</a>,{' '}
        <a href='https://redux.js.org/'>Redux</a>,{' '}
        <a href='https://sass-lang.com/'>Sass</a>,{' '}
        <a href='https://jestjs.io/'>Jest</a>,{' '}
        <a href='https://testing-library.com/'>React Testing Library</a>,{' '}
        <a href='https://storybook.js.org/'>Storybook</a>,{' '}
        <a href='https://nodejs.org/en/'>Node</a>,{' '}
        <a href='https://aws.amazon.com/'>AWS</a> and{' '}
        <a href='https://kotlinlang.org/'>Kotlin</a>.
      </p>

      <p>
        Oslonøkkelen has a total of 200k+ downloads. You can download it for
        free on the{' '}
        <a href='https://apps.apple.com/us/app/oslon%C3%B8kkelen/id1392962722'>
          App Store
        </a>{' '}
        and{' '}
        <a href='https://play.google.com/store/apps/details?id=com.oslonokkel&hl=en&gl=US'>
          Google Play
        </a>
        .
      </p>
      <h4>Covid-19 Staffing</h4>
      <p className='light'>March 2020 - June 2020</p>
      <p>
        In March 2020 when the pandemic hit, I was part of a team that developed
        a tool to easily find qualified healthcare professionals to help out in
        the city. We were a small and agile team that had to work quickly to
        deliver a high-quality, stable product.
      </p>
    </div>
  </div>
);

export default Experience;
