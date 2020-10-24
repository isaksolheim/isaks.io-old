import * as React from 'react';
import Title from '../../components/title';
import Layout from '../../layouts/layout';
import ProjectLink from '../../components/projectLink';
import { graphql } from 'gatsby';

const Projects = ({
  data: {
    allMarkdownRemark: { edges },
  },
}) => {
  const Projects = edges
    .filter(
      (edge) =>
        !!edge.node.frontmatter.date && edge.node.frontmatter.type === 'project'
    )
    .map((edge) => <ProjectLink key={edge.node.id} project={edge.node} />);

  return (
    <Layout>
      <Title text='projects' />
      <div className='project-links-container'>{Projects}</div>
    </Layout>
  );
};

export default Projects;

export const pageQuery = graphql`
  query {
    allMarkdownRemark(sort: { order: DESC, fields: [frontmatter___date] }) {
      edges {
        node {
          id
          excerpt(pruneLength: 250)
          frontmatter {
            date(formatString: "MMMM DD, YYYY")
            slug
            title
            type
            featuredImage {
              childImageSharp {
                fluid(maxWidth: 800) {
                  ...GatsbyImageSharpFluid
                }
              }
            }
          }
        }
      }
    }
  }
`;
