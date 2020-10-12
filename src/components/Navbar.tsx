import * as React from 'react';
import Link from 'gatsby-link';

const Navbar = () => {
  const url = typeof window !== 'undefined' ? window.location.href : '';
  return (
    <nav>
      <ul>
        <li>
          <Link
            className={`text-link ${
              url.includes('projects') ? 'selected' : ''
            }`}
            to='/projects'
          >
            projects
          </Link>
        </li>
        <li>
          <Link
            className={`text-link ${
              url.includes('tutorials') ? 'selected' : ''
            }`}
            to='/tutorials'
          >
            tutorials
          </Link>
        </li>
        <li>
          <Link
            className={`text-link ${url.includes('videos') ? 'selected' : ''}`}
            to='/videos'
          >
            videos
          </Link>
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;
