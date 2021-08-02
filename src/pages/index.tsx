import React from 'react';
import { graphql } from 'gatsby';
import Layout from '../layouts/layout';
import Articles from '../components/Articles/Articles';
import Projects from '../components/Projects/Projects';
import About from '../components/About/About';
import Experience from '../components/Experience/Experience';

const Home = ({ data }) => (
  <Layout>
    <About />
    <Articles />
    <Experience onImage={data.onImage} />
    <Projects
      myVinylImg={data.myVinylImg}
      beerInReviewImg={data.beerInReviewImg}
      cloudImg={data.cloudImg}
    />
  </Layout>
);

export const query = graphql`
  query indeximages {
    onImage: file(relativePath: { eq: "projectImages/oslonokkelen.png" }) {
      childImageSharp {
        fluid {
          ...GatsbyImageSharpFluid
        }
      }
    }
    myVinylImg: file(relativePath: { eq: "projectImages/myvinyl.png" }) {
      childImageSharp {
        fluid {
          ...GatsbyImageSharpFluid
        }
      }
    }
    beerInReviewImg: file(
      relativePath: { eq: "projectImages/beerinreview.png" }
    ) {
      childImageSharp {
        fluid {
          ...GatsbyImageSharpFluid
        }
      }
    }
    cloudImg: file(relativePath: { eq: "projectImages/cloud.png" }) {
      childImageSharp {
        fluid {
          ...GatsbyImageSharpFluid
        }
      }
    }
  }
`;

export default Home;
