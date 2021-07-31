import React from 'react';
import TextLink from '../TextLink/text-link';

const About = () => (
  <React.Fragment>
    <h2>About</h2>
    <p>
      Hi, my name is Isak, and I am a front-end developer currently living in
      Trondheim.
    </p>
    <p>
      On this website you can find some of my{' '}
      <TextLink link='/projects' text='projects' />,{' '}
      <TextLink link='/tutorials' text='tutorials' />, and{' '}
      <TextLink link='/videos' text='my videos' />. Also, check out my{' '}
      <TextLink link='https://github.com/wickdeeb' text='github' /> and my{' '}
      <TextLink link='https://www.youtube.com/c/isaks' text='youtube channel' />
      .
    </p>
  </React.Fragment>
);

export default About;
