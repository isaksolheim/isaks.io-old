import React from 'react';
import './title.scss';

const Title = ({ text }): { text: string } => <h1 className='title'>{text}</h1>;

export default Title;
