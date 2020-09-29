import React from 'react';
import { Link } from 'gatsby';

const TutorialLink = ({ tutorial }) => (
  <div className='tutorial-link'>
    <Link className='text-link' to={tutorial.frontmatter.slug}>
      {tutorial.frontmatter.title}
    </Link>
    <time>{tutorial.frontmatter.date}</time>
  </div>
);
export default TutorialLink;
