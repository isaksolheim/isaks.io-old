import * as React from 'react';
import Title from '../../components/title';
import Layout from '../../layouts/layout';
import TutorialLink from '../../components/tutorialLink';
import { graphql } from 'gatsby';

const Tutorials = ({
  data: {
    allMarkdownRemark: { edges },
  },
}) => {
  const Tuts = edges
    .filter(
      (edge) =>
        !!edge.node.frontmatter.date &&
        edge.node.frontmatter.type === 'tutorial'
    )
    .map((edge) => <TutorialLink key={edge.node.id} tutorial={edge.node} />);

  return (
    <Layout>
      <Title text='tutorials' />
      {Tuts}
    </Layout>
  );
};

export default Tutorials;

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
          }
        }
      }
    }
  }
`;
