import React from 'react';
import { Link } from 'gatsby';

const TextLink = ({ link, text }) => (
  <Link className='text-link' to={link}>
    {text}
  </Link>
);
export default TextLink;
