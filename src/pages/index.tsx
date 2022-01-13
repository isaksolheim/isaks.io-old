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

export const query = graphql`query indeximages {
  onImage: file(relativePath: {eq: "projectImages/oslonokkelen.png"}) {
    childImageSharp {
      gatsbyImageData(layout: FULL_WIDTH)
    }
  }
  myVinylImg: file(relativePath: {eq: "projectImages/myvinyl.png"}) {
    childImageSharp {
      gatsbyImageData(layout: FULL_WIDTH)
    }
  }
  beerInReviewImg: file(relativePath: {eq: "projectImages/beerinreview.png"}) {
    childImageSharp {
      gatsbyImageData(layout: FULL_WIDTH)
    }
  }
  cloudImg: file(relativePath: {eq: "projectImages/cloud.png"}) {
    childImageSharp {
      gatsbyImageData(layout: FULL_WIDTH)
    }
  }
}
`;

export default Home;
