module.exports = {
  pathPrefix: '/',
  siteMetadata: {
    title: `isaks.io`,
    author: 'Isak Solheim',
    description: 'Personal website',
    siteUrl: 'https://isaks.io',
  },
  plugins: [
    `gatsby-plugin-sass`,
    `gatsby-plugin-sharp`,
    `gatsby-plugin-react-helmet`,
    `gatsby-transformer-sharp`,
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `pages`,
        path: `${__dirname}/src/pages`,
      },
    },
    {
      resolve: `gatsby-plugin-typography`,
      options: {
        pathToConfigModule: `src/utils/typography`,
      },
    },
    {
      resolve: `gatsby-transformer-remark`,
      options: {
        plugins: [
          {
            resolve: `gatsby-remark-highlight-code`,
            resolve: `gatsby-remark-images`,
            options: {
              maxWidth: 1200,
            },
          },
        ],
      },
    },
  ],
};
