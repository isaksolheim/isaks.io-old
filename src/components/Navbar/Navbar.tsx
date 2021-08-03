import React from 'react';
import './navbar.scss';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faLinkedin,
  faMedium,
  faGithub,
  faYoutube,
} from '@fortawesome/free-brands-svg-icons';

const Navbar = () => {
  const links = [
    {
      text: 'LinkedIn',
      url: 'https://www.linkedin.com/in/isak-solheim/',
      icon: faLinkedin,
    },
    { text: 'Medium', url: 'https://medium.com/@isaksolheim', icon: faMedium },
    { text: 'GitHub', url: 'https://github.com/wickdeeb', icon: faGithub },
    {
      text: 'YouTube',
      url: 'https://www.youtube.com/c/isaks',
      icon: faYoutube,
    },
  ];

  return (
    <nav>
      <ul>
        {links.map((link) => (
          <li key={link.text}>
            <a href={link.url}>
              <FontAwesomeIcon
                icon={link.icon}
                style={{ marginRight: '2px', color: 'black', width: 20 }}
              />
              {link.text}
            </a>
          </li>
        ))}
      </ul>
    </nav>
  );
};

export default Navbar;
