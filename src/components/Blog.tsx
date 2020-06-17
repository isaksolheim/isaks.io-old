import React from 'react';

const Blog = () => {
  return (
    <section className='blog'>
      <h1>blog</h1>
      <h2>
        Programming on a plane
        <span role='img' aria-label='rocket'>
          🛩
        </span>
      </h2>
      <h3 className='date'>
        <span role='img' aria-label='date'>
          📅
        </span>
        14.06.2020
      </h3>
      <h3 className='location'>
        <span role='img' aria-label='pin'>
          📍
        </span>
        On a flight to Oslo
      </h3>
      <p>Programming on planes really makes the time flie</p>
      <div className='share-button'>Share</div>
    </section>
  );
};

export default Blog;
