import React, { useEffect } from 'react';
import { GatsbyImage } from 'gatsby-plugin-image';
import { graphql } from 'gatsby';
import Title from '../../components/Title/Title';
import Layout from '../../layouts/layout';
import './cloud.scss';
import { log } from '../../utils/firebaseConfig';

const Cloud = ({ data }) => {
  useEffect(() => {
    log('visit_cloud_project');
  }, []);
  return(
  <Layout>
    <Title text='Cloud' />
    <p>
      During a hackathon me and a friend created physical cloud that could water
      plants, create steam and drop beer.
    </p>
    <GatsbyImage
      image={data.image1.childImageSharp.gatsbyImageData}
      alt='cloud hanging from ceiling'
    />
    <h2>The build</h2>
    <p>
      Inside the cloud, we have all the components mounted on a wooden plate.
      The components are as follows:
    </p>
    <ul>
      <li>Water tank w/ pump (used for the "rain")</li>
      <li>Transducer (used to create steam)</li>
      <li>LED lights</li>
      <li>Beer delivery mechanism</li>
      <li>4 way relay module (used to switch on/off the components)</li>
      <li>Raspberry PI</li>
    </ul>
    <GatsbyImage
      image={data.inside.childImageSharp.gatsbyImageData}
      alt='components mounted on wooden plate'
    />
    <br />
    <p>
      The wooden plate with all the components mounted on it is then inserted
      into a cloud-shaped mold created from chicken wire. The mold is stuffed
      with cotton, which makes it look like a cloud.
    </p>
    <h3>The tech</h3>
    <p>
      I wrote a simple MQTT client in Node that runs on the clouds Raspberry PI.
      This allows us to easily send commands to the cloud from any terminal.
      When receiving a command, the PI uses a Python script I wrote to toggle
      the Relay Module, which performs the selected operation (drop a beer,
      toggle rain, toggle steam).
    </p>
    <GatsbyImage
      image={data.progge.childImageSharp.gatsbyImageData}
      alt='messy desk with code on computer screen'
    />
    <br />
    <p>
      I also made it possible to toggle the beer drop mechanism using our app{' '}
      <a href='https://www.oslo.kommune.no/oslonokkelen/'>Oslonøkkelen</a>. Here
      is a video of the cloud in action:
    </p>
    <div className='gif-container'>
      <iframe
        src='https://giphy.com/embed/tV0DKtm4Ix9NfKOC0d'
        width='270'
        height='480'
        frameBorder='0'
        className='giphy-embed'
        allowFullScreen
      ></iframe>
      <p>
        <a href='https://giphy.com/gifs/tV0DKtm4Ix9NfKOC0d'>via GIPHY</a>
      </p>
    </div>
  </Layout>
);

export const query = graphql`
  query cloudimages {
    image1: file(relativePath: { eq: "cloud/sky.jpg" }) {
      childImageSharp {
        gatsbyImageData(width: 720, layout: CONSTRAINED)
      }
    }
    progge: file(relativePath: { eq: "cloud/proggesetup.jpg" }) {
      childImageSharp {
        gatsbyImageData(width: 720, layout: CONSTRAINED)
      }
    }
    inside: file(relativePath: { eq: "cloud/tech.jpg" }) {
      childImageSharp {
        gatsbyImageData(width: 720, layout: CONSTRAINED)
      }
    }
  }
`;

export default Cloud;
