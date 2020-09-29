import React from 'react';
import { Link } from 'gatsby';
import Img from 'gatsby-image';

const PostLink = ({ project }) => (
  <Link className='project-link' to={project.frontmatter.slug}>
    <Img fluid={project.frontmatter.featuredImage.childImageSharp.fluid} />
    <div className='title-container'>
      <div className='title'>{project.frontmatter.title}</div>
    </div>
    <time>{project.frontmatter.date}</time>
  </Link>
);

export default PostLink;
