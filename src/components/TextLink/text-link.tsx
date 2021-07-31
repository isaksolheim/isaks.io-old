import React from 'react';
import { Link } from 'gatsby';
import './text-link.scss';

interface TextLinkProps {
  text: string;
  url: string;
}

const TextLink = ({ text, url }: TextLinkProps) => (
  <Link className='text-link' to={url}>
    {text}
  </Link>
);
export default TextLink;
