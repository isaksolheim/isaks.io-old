import React from 'react';
import './footer.scss';

const Footer = () => {
  const year = new Date().getFullYear();
  return <footer>isaks.io / {year}</footer>;
};

export default Footer;
