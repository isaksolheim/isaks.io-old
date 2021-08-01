import React from 'react';
import Layout from '../layouts/layout';
import Articles from '../components/Articles/Articles';
import Projects from '../components/Projects/Projects';
import About from '../components/About/About';
import Experience from '../components/Experience/Experience';

const Home = () => {
  return (
    <Layout>
      <About />
      <Articles />
      <Experience />
      <Projects />
    </Layout>
  );
};

export default Home;
