import * as React from 'react';
import TextLink from './text-link';

const Header = () => (
  <header>
    <img src={require('../assets/empty-svg.svg')} alt='background' />
    <img
      style={{ position: 'absolute', left: 0, top: 0 }}
      src='http://ghchart.rshah.org/wickdeeb'
      alt='Github contribution graph'
    />
    <TextLink link='/' text='isaks.io' />
  </header>
);

export default Header;
