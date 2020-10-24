import React from 'react';
import { graphql } from 'gatsby';
import Layout from '../layouts/layout';
import { findAllIndexes } from '../utils/findAllIndexes';
import { createHtmlWithHighlighting } from '../utils/htmlWithHighlighting';
import { defineCustomElements as deckDeckGoHighlightElement } from '@deckdeckgo/highlight-code/dist/loader';
deckDeckGoHighlightElement();

const Template = ({ data }) => {
  const { markdownRemark } = data;
  const { frontmatter, html } = markdownRemark;

  let startOfCodesSnippets = findAllIndexes(
    html,
    '<code class="language-javscript">'
  );
  let endOfCodeSnipptes = findAllIndexes(html, '</code>');

  for (let i = 0; i < startOfCodesSnippets.length; i++) {
    startOfCodesSnippets[i] += 33;
  }

  for (let i = 0; i < endOfCodeSnipptes.length; i++) {
    endOfCodeSnipptes[i] = endOfCodeSnipptes[i] - startOfCodesSnippets[i];
  }

  const htmlWithHighlighting = createHtmlWithHighlighting(
    html,
    startOfCodesSnippets,
    endOfCodeSnipptes
  );

  return (
    <Layout>
      <article className='markdown-container'>
        <h1>{frontmatter.title}</h1>
        <time>{frontmatter.date}</time>
        <div
          className='markdown-content'
          dangerouslySetInnerHTML={{
            __html: htmlWithHighlighting !== '' ? htmlWithHighlighting : html,
          }}
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
