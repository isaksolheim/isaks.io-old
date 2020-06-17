import React from 'react';
import { Link } from 'react-router-dom';

const Header = () => {
  return (
    <div className='header'>
      <img
        src='http://ghchart.rshah.org/wickdeeb'
        alt='Github contribution graph'
      />
      <div className='centered'>
        <Link to='/'>isaks.io</Link>
      </div>
    </div>
  );
};

export default Header;
