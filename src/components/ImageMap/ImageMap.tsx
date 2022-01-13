import React from 'react';

import AdobeXdImage from '../images/AdobeXdImage';
import DiscogsImage from '../images/DiscogsImage';
import FirebaseImage from '../images/FirebaseImage';
import JavaScriptImage from '../images/JavaScriptImage';
import LottieImage from '../images/LottieImage';
import MqttImage from '../images/MqttImage';
import NodeImage from '../images/NodeImage';
import PythonImage from '../images/PythonImage';
import PiImage from '../images/PiImage';
import ReactImage from '../images/ReactImage';
import ReduxImage from '../images/ReduxImage';
import SassImage from '../images/SassImage';
import TypeScriptImage from '../images/TypeScriptImage';

interface ImageMapProps {
  imgName: string;
}

const ImageMap = ({ imgName }: ImageMapProps) => {
  const nameToImageMap = {
    'adobexd.png': <AdobeXdImage />,
    'discogs.png': <DiscogsImage />,
    'firebase.png': <FirebaseImage />,
    'javascript.png': <JavaScriptImage />,
    'lottie.png': <LottieImage />,
    'mqtt.png': <MqttImage />,
    'nodejs.png': <NodeImage />,
    'python.png': <PythonImage />,
    'raspberrypi.png': <PiImage />,
    'react.png': <ReactImage />,
    'redux.png': <ReduxImage />,
    'sass.png': <SassImage />,
    'typescript.png': <TypeScriptImage />,
  };

  return nameToImageMap[imgName];
};

export default ImageMap;
