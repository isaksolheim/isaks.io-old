import React from 'react';
import TextLink from '../TextLink/text-link';
import './header.scss';

const Header = () => (
  <header>
    <img src={require('../../assets/empty-svg.svg')} alt='background' />
    <img
      style={{ position: 'absolute', left: 0, top: 0 }}
      src='http://ghchart.rshah.org/wickdeeb'
      alt='Github contribution graph'
    />
    <TextLink link='/' text='isaks.io' />
  </header>
);

export default Header;
