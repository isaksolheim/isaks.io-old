import React, { useState } from 'react';
import { StaticImage } from 'gatsby-plugin-image';
import TextLink from '../TextLink/text-link';
import './header.scss';
import ImageSVG from '../../assets/empty-svg.svg';
import Svg from '../../assets/Svg';

const Header = () => {
  const [loaded, setLoaded] = useState(false);

  const handleOnLoad = () => setLoaded(true);

  return (
    <header>
      {!loaded && <Svg />}
      <img
        style={{ position: 'absolute', left: 0, top: -4 }}
        src='https://ghchart.rshah.org/isaksolheim'
        alt='Github contribution graph'
        onLoad={handleOnLoad}
      />
      <TextLink url='/' text='isaks.io' />
    </header>
  );
};

export default Header;
