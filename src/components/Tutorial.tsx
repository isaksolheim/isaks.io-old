import React from 'react';
import ReactMarkdown from 'react-markdown';

import { RouteComponentProps } from 'react-router-dom';
import CodeBlock from './CodeBlock';
import { stringToSlug } from '../helpers/slugify';

import { tutorials } from '../helpers/tutorialsData';

interface MatchParams {
  id: string;
}

interface Props extends RouteComponentProps<MatchParams> {}

const Tutorial: React.FC<Props> = ({ match }) => {
  const tutorial = tutorials.filter(
    tut => stringToSlug(tut.name) === match.params.id
  )[0];

  return (
    <section className='project'>
      <div className='markdown-container'>
        <ReactMarkdown
          source={tutorial.markdown}
          renderers={{ code: CodeBlock }}
        />
      </div>
    </section>
  );
};

export default Tutorial;
