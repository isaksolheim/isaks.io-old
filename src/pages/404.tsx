import React, { useEffect } from 'react';
import Layout from '../layouts/layout';
import TextLink from '../components/TextLink/text-link';
import { log } from '../utils/firebaseConfig';

const NotFoundPage = () => {
  useEffect(() => {
    log('visit_404');
  }, []);
  return(
  <div>
    <h1>NOT FOUND</h1>
    <p>
      You just hit a route that doesn&#39;t exist...{' '}
      <TextLink url='/' text='Go back' />
    </p>
  </div>
);

export default NotFoundPage;
