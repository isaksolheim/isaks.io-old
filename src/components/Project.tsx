import React from 'react';
import ReactMarkdown from 'react-markdown';

import { RouteComponentProps } from 'react-router-dom';
import CodeBlock from './CodeBlock';
import { stringToSlug } from '../helpers/slugify';

import { projects } from '../helpers/projectsData';

interface MatchParams {
  id: string;
}

interface Props extends RouteComponentProps<MatchParams> {}

const Project: React.FC<Props> = ({ match }) => {
  const project = projects.filter(
    p => stringToSlug(p.name) === match.params.id
  )[0];

  return (
    <section className='project'>
      <div className='markdown-container'>
        <ReactMarkdown
          source={project.markdown}
          renderers={{ code: CodeBlock }}
        />
      </div>
    </section>
  );
};

export default Project;
