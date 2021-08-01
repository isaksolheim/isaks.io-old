import React from 'react';
import TextLink from '../TextLink/text-link';

const About = () => (
  <React.Fragment>
    <h2>About 👋</h2>
    <p>Hi, I'm Isak, a front-end developer currently living in Trondheim.</p>
    <p>
      On this website you can find some of my{' '}
      <TextLink url='/projects' text='projects' />,{' '}
      <TextLink url='/tutorials' text='tutorials' />, and{' '}
      <TextLink url='/videos' text='my videos' />. Also, check out my{' '}
      <TextLink url='https://github.com/wickdeeb' text='github' /> and my{' '}
      <TextLink url='https://www.youtube.com/c/isaks' text='youtube channel' />.
    </p>
  </React.Fragment>
);

export default About;
