import React from 'react';
import { Helmet } from 'react-helmet';
import { StaticQuery, graphql } from 'gatsby';

const Seo = ({
  description,
  keywords,
  title,
  image,
  url,
  author,
}: {
  description: string;
  keywords: string;
  title: string;
  url: string;
  author: string;
}) => {
  return (
    <StaticQuery
      query={detailsQuery}
      render={(data: any) => {
        const metaDescription =
          description || data.site.siteMetadata.description;
        const metaTitle = title || data.site.siteMetadata.title;
        const metaUrl = url || data.site.siteMetadata.url;
        const metaAuthor = author || data.site.siteMetadata.author;
        const metaKeywords = image || [
          'web development',
          'gatsby',
          'react',
          'frontend',
        ];
        return (
          <Helmet
            title={title}
            meta={[
              {
                name: `description`,
                content: metaDescription,
              },
              {
                name: `og:title`,
                content: metaTitle,
              },
              {
                name: `og:description`,
                content: metaDescription,
              },
              {
                name: `type`,
                content: `website`,
              },
              {
                name: `url`,
                content: metaUrl,
              },
            ].concat(
              metaKeywords && metaKeywords.length > 0
                ? {
                    name: `keywords`,
                    content: metaKeywords.join(', '),
                  }
                : []
            )}
          />
        );
      }}
    />
  );
};

const detailsQuery = graphql`
  query DefaultSEOQuery {
    site {
      siteMetadata {
        title
        description
        author
      }
    }
  }
`;

export default Seo;
