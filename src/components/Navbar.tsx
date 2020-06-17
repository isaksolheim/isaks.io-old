import React from 'react';
import { Link } from 'react-router-dom';

const Navbar = () => {
  return (
    <nav>
      <ul>
        <li>
          <Link to='/projects'>projects</Link>
        </li>
        <li>
          <Link to='/tutorials'>tutorials</Link>
        </li>
        <li>
          <Link to='/videos'>videos</Link>
        </li>
        {/*
        <li>
          <Link to='/blog'>blog</Link>
        </li>
        <li>
          <a href='https://www.youtube.com/u/isaks/'>youtube</a>
        </li>
        <li>
          <a href='https://www.github.com/wickdeeb/'>github</a>
        </li>
        */}
      </ul>
    </nav>
  );
};

export default Navbar;
