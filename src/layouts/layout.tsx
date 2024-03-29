import * as React from 'react';
import Header from '../components/Header/Header';
import Navbar from '../components/Navbar/Navbar';
import Footer from '../components/Footer/Footer';
import './layout.scss';
import Helmet from 'react-helmet';
import favicon from '../assets/favicon.png';

const Layout = ({ children }) => (
  <>
    <Helmet>
      <title>isaks.io</title>
      <meta name='description' content='Programmers Personal Website' />
      <meta
        name='keywords'
        content='web development, gatsby, react, frontend'
      />
      <meta name='og:title' content='isaks.io' />
      <meta name='og:type' content='website' />
      <meta name='og:description' content='Programmers Personal Website' />
      <meta name='og:locale' content='en_US' />
      <meta name='og:url' content='https://isaks.io' />
      <link rel='canoical' href='https://isaks.io' />
      <link rel='icon' href={favicon} />
    </Helmet>
    <Header />
    <Navbar />
    {children}
    <Footer />
  </>
);

export default Layout;
