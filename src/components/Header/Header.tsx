import React, { useEffect, useRef, useState } from 'react';
import { StaticImage } from 'gatsby-plugin-image';
import TextLink from '../TextLink/text-link';
import './header.scss';
import EmptyContributionGraph from '../../assets/EmptyContributionGraph';

const Header = () => {
  const [loaded, setLoaded] = useState(false);
  const image = useRef();

  const handleOnLoad = () => setLoaded(true);

  useEffect(() => {
    if (image.current.complete) {
      setLoaded(true);
    }
  }, []);

  return (
    <header>
      {!loaded && <EmptyContributionGraph />}
      <img
        src='https://ghchart.rshah.org/isaksolheim'
        className='contribution-graph'
        alt='Github contribution graph'
        onLoad={handleOnLoad}
        ref={image}
      />
      <TextLink url='/' text='isaks.io' />
    </header>
  );
};

export default Header;
