import React from 'react';

import { tutorials } from '../helpers/tutorialsData';
import { stringToSlug } from '../helpers/slugify';
import { Link } from 'react-router-dom';

const Tutorials = () => {
  return (
    <section className='tutorials'>
      <h1>tutorials</h1>
      {tutorials.map(tutorial => (
        <div key={tutorial.name} className='tutorial'>
          <Link to={`/tutorials/${stringToSlug(tutorial.name)}`}>
            {tutorial.name}
          </Link>
          <div className='date'>{tutorial.date}</div>
        </div>
      ))}
    </section>
  );
};

export default Tutorials;
