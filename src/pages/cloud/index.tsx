import React from 'react';
import Img from 'gatsby-image';
import { graphql } from 'gatsby';
import Title from '../../components/title';
import Layout from '../../layouts/layout';

const Cloud = ({ data }) => {
  console.log(data);
  return (
    <Layout>
      <Title text='Cloud' />

      <Img fluid={data.image1.childImageSharp.fluid} alt='Cloud' />
    </Layout>
  );
};

export const query = graphql`
  query cloudimages {
    image1: file(relativePath: { eq: "cloud/sky.jpg" }) {
      childImageSharp {
        fluid {
          ...GatsbyImageSharpFluid
        }
      }
    }
    image2: file(relativePath: { eq: "cloud/isak-anders.jpg" }) {
      childImageSharp {
        fluid {
          ...GatsbyImageSharpFluid
        }
      }
    }
  }
`;

export default Cloud;
