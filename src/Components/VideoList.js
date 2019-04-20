import React from 'react';
import VideoItem from './VideoItem';

const VideoList = ({ videos, onVideoSelect }) => {
  const renderedList = videos.map(vid => (
    <VideoItem key={vid.id.videoId} info={vid} onVideoSelect={onVideoSelect} />
  ));

  return <div className="ui relaxed divided list">{renderedList}</div>;
};

export default VideoList;
