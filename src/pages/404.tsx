import React, { useEffect } from 'react';
import TextLink from '../components/TextLink/text-link';
import firebase from 'gatsby-plugin-firebase';

const NotFoundPage = () => {
  useEffect(() => {
    if (!firebase) {
      return;
    }

    firebase.analytics().logEvent('visited_404');
  }, [firebase]);
  return (
    <div>
      <h1>NOT FOUND</h1>
      <p>
        You just hit a route that doesn&#39;t exist...{' '}
        <TextLink url='/' text='Go back' />
      </p>
    </div>
  );
};

export default NotFoundPage;
