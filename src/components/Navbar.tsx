import * as React from 'react';
import Link from 'gatsby-link';

const Navbar = () => {
  return (
    <nav>
      <ul>
        <li>
          <Link className='text-link' to='/projects'>
            projects
          </Link>
        </li>
        <li>
          <Link className='text-link' to='/tutorials'>
            tutorials
          </Link>
        </li>
        <li>
          <Link className='text-link' to='/videos'>
            videos
          </Link>
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;
