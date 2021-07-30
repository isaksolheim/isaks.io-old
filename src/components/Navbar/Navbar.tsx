import React from 'react';
import TextLink from '../TextLink/text-link';
import './navbar.scss';

const Navbar = () => {
  const links = [
    { text: 'LinkedIn', url: 'https://www.linkedin.com/in/isak-solheim/' },
    { text: 'Medium', url: 'https://medium.com/@isaksolheim' },
    { text: 'GitHub', url: 'https://github.com/wickdeeb' },
    { text: 'YouTube', url: 'https://www.youtube.com/c/isaks' },
  ];

  return (
    <nav>
      <ul>
        {links.map((link) => (
          <li key={link.text}>
            <TextLink text={link.text} url={link.url} />
          </li>
        ))}
      </ul>
    </nav>
  );
};

export default Navbar;
