import React, { useState, useEffect } from 'react';
import Title from '../../components/title';
import Layout from '../../layouts/layout';
import { dummyData } from '../../utils/dummyVideoData';

interface Video {
  etag: string;
  id: {
    kind: string;
    videoId: string;
  };
  kind: string;
  snippet: {
    channelId: string;
    channelTitle: string;
    description: string;
    liveBroadcastContent: string;
    publishTime: string;
    publishedAt: string;
    thumbnails: {
      default: Thumbnail;
      high: Thumbnail;
      medium: Thumbnail;
    };
    title: string;
  };
}

interface Thumbnail {
  height: number;
  url: string;
  width: number;
}

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

  return (
    <Layout>
      <Title text='videos' />
      <div className='videos-container'>
        {videos.map((video) => {
          if (video.id.kind !== 'youtube#channel') {
            return (
              <div className='video' key={video.snippet.title}>
                <h3>{video.snippet.title}</h3>
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
      </div>
    </Layout>
  );
};

export default Videos;
