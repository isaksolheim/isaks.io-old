import React from 'react';
import { graphql } from 'gatsby';
import Layout from '../layouts/layout';
// import { defineCustomElements as deckDeckGoHighlightElement } from '@deckdeckgo/highlight-code/dist/loader';
// deckDeckGoHighlightElement();

const Template = ({ data }) => {
  const { markdownRemark } = data;
  const { frontmatter, html } = markdownRemark;

  return (
    <Layout>
      <article className='markdown-container'>
        <h1>{frontmatter.title}</h1>
        <time>{frontmatter.date}</time>
        <div
          className='markdown-content'
          dangerouslySetInnerHTML={{ __html: html }}
        />
      </article>
    </Layout>
  );
};

export default Template;

export const pageQuery = graphql`
  query($slug: String!) {
    markdownRemark(frontmatter: { slug: { eq: $slug } }) {
      html
      frontmatter {
        date(formatString: "MMMM DD, YYYY")
        slug
        title
      }
    }
  }
`;
