import React from 'react';
import Layout from '../layouts/layout';
import Articles from '../components/Articles/Articles';
import Projects from '../components/Projects/Projects';
import About from '../components/About/About';

const Home = () => {
  return (
    <Layout>
      <Articles />
      <Projects />
      <About />
    </Layout>
  );
};

export default Home;
