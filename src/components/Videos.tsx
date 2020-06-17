import React, { useState, useEffect } from 'react';

import { dummyData } from '../helpers/dummyData';
import { Video } from '../types/Video';

async function getYoutubeVideos(setVideos: Function) {
  try {
    const response = await fetch(
      'https://www.googleapis.com/youtube/v3/search?key=AIzaSyBq_xR0ZQ5oSS01jl3FAH7PTWn1RDyuq3w&channelId=UCXhe7rPnLCsIbDgd1omBxAg&part=snippet,id&order=date&maxResults=20'
    );
    const json = await response.json();
    if (json.items) {
      setVideos(json.items);
    } else {
      setVideos(dummyData);
    }
  } catch (error) {
    setVideos(dummyData);
    console.log(error);
  }
}

const Videos = () => {
  const [videos, setVideos] = useState<Video[]>([]);

  useEffect(() => {
    (async function anyNameFunction() {
      await getYoutubeVideos(setVideos);
    })();
  }, []);

  console.log(videos);

  return (
    <section className='videos'>
      <h1>videos</h1>
      {videos.map(video => {
        if (video.id.kind !== 'youtube#channel') {
          return (
            <div className='video' key={video.snippet.title}>
              <h2>{video.snippet.title}</h2>
              <iframe
                title='video'
                width='560'
                height='315'
                src={`https://www.youtube.com/embed/${video.id.videoId}`}
                allow='accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture'
              />
            </div>
          );
        } else {
          return null;
        }
      })}
    </section>
  );
};

export default Videos;
