"use client"
import React from 'react';
import YouTube from 'react-youtube';

const YoutubeVideo = ({ videoId }:any) => {
  // You can pass the video ID as a prop to the component
  const opts = {
    height: '300',
    width: '100%',
    playerVars: {
      // Add any desired player options here (e.g., autoplay: 1)
    },
  };

  return <YouTube 
  
  videoId={videoId} 
  opts={opts} />;
};

export default YoutubeVideo;