import React from 'react';
import { Link } from 'react-router-dom';

const Landing = () => {
  return (
    <section className='landing'>
      <p>
        Hi, my name is Isak, and I am a front-end developer currently living in
        Oslo.
      </p>
      <p>
        On this website you can find some of my{' '}
        <Link to='/projects'>projects</Link>,{' '}
        <Link to='/tutorials'>tutorials</Link>, and{' '}
        <Link to='/videos'>my videos</Link>. Also, check out my{' '}
        <a href='https://github.com/wickdeeb'>github</a> and my{' '}
        <a href='https://www.youtube.com/c/isaks'>youtube channel</a>.
      </p>
    </section>
  );
};

export default Landing;
