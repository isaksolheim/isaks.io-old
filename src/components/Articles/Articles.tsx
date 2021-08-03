import React, { useEffect, useState } from 'react';
import { FullMediumData, MediumData } from '../../utils/mediumDataType';
import './articles.scss';
const moment = require('moment');

const Articles = () => {
  const [mediumData, setMediumData] = useState<MediumData[]>([]);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    fetch(
      `https://api.rss2json.com/v1/api.json?rss_url=https://medium.com/feed/@isaksolheim`
    )
      .then((res) => res.json())
      .then((response: FullMediumData) => {
        setMediumData(response.items);
        setIsLoading(false);
      })
      .catch((err) => console.log(err));
  }, []);

  const blogData = mediumData.slice(0, 4);

  return (
    <React.Fragment>
      <h2>Articles 📖</h2>
      <ul className='articles'>
        {blogData.map((article) => (
          <li key={article.link}>
            <a href={article.link}>
              <img src={article.thumbnail} alt='Article' />
              <p>{article.title}</p>
              <span>{moment(article.pubDate).format('MMMM Do YYYY')}</span>
            </a>
          </li>
        ))}
        <a className='text-link' href='https://medium.com/@isaksolheim'>
          View more
        </a>
      </ul>
    </React.Fragment>
  );
};

export default Articles;
